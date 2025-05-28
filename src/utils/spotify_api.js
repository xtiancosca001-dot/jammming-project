const clientId = 'bb0603428d284800a9669277817244db';
const redirectUri = 'http://127.0.0.1:5173/callback';
const scope = 'playlist-modify-public playlist-modify-private';
const apiSearchUrl = 'https://api.spotify.com/v1/search';

function generateRandomString(length) {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const randomValues = new Uint8Array(length);
    crypto.getRandomValues(randomValues);
    return Array.from(randomValues)
        .map(x => charset[x % charset.length])
        .join('');
}

async function generateCodeChallenge(codeVerifier) {
    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

const SpotifyAPI = {
    accessToken: null,
    tokenExpirationTime: null,
    isAuthorizationPending: false,

    isTokenExpired() {
        return this.tokenExpirationTime ? Date.now() > this.tokenExpirationTime : true;
    },

    async authorize() {
        try {
            const codeVerifier = generateRandomString(128);
            const codeChallenge = await generateCodeChallenge(codeVerifier);
            localStorage.setItem('code_verifier', codeVerifier);

            const params = new URLSearchParams({
                client_id: clientId,
                response_type: 'code',
                redirect_uri: redirectUri,
                scope: scope,
                code_challenge_method: 'S256',
                code_challenge: codeChallenge,
                show_dialog: true
            });

            window.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
        } catch (error) {
            console.error('Authorization failed:', error);
            throw error;
        }
    },

    async refreshAccessToken(refreshToken) {
        try {
            const response = await fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    client_id: clientId,
                    grant_type: 'refresh_token',
                    refresh_token: refreshToken,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to refresh token');
            }

            const data = await response.json();
            const expirationTime = Date.now() + (data.expires_in - 60) * 1000;

            this.accessToken = data.access_token;
            this.tokenExpirationTime = expirationTime;
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('token_expiration', expirationTime.toString());

            // Save new refresh token if provided
            if (data.refresh_token) {
                localStorage.setItem('refresh_token', data.refresh_token);
            }

            return data.access_token;
        } catch (error) {
            console.error('Token refresh failed:', error);
            this.clearAuthData();
            throw error;
        }
    },
    async getAccessToken() {
        try {
            // Prevent multiple simultaneous auth attempts
            if (this.isAuthorizationPending) {
                return null;
            }

            // Check for existing valid token
            if (this.accessToken && !this.isTokenExpired()) {
                return this.accessToken;
            }

            // Try to refresh if we have a refresh token
            const refreshToken = localStorage.getItem('refresh_token');
            if (refreshToken) {
                try {
                    return await this.refreshAccessToken(refreshToken);
                } catch (error) {
                    console.warn('Token refresh failed, starting new auth flow');
                    this.clearAuthData();
                }
            }

            // Check URL for auth code
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');
            
            // If no code in URL, start auth flow
            if (!code) {
                this.isAuthorizationPending = true;
                await this.authorize();
                return null;
            }

            // Get code verifier
            const codeVerifier = localStorage.getItem('code_verifier');
            if (!codeVerifier) {
                throw new Error('No code verifier found');
            }

            this.isAuthorizationPending = true;

            // Exchange code for token
            const response = await fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    client_id: clientId,
                    grant_type: 'authorization_code',
                    code: code,
                    redirect_uri: redirectUri,
                    code_verifier: codeVerifier,
                }),
            });

            if (!response.ok) {
                throw new Error(`Token request failed: ${response.status}`);
            }

            const data = await response.json();
            
            // Save token data
            const expirationTime = Date.now() + (data.expires_in - 60) * 1000;
            this.accessToken = data.access_token;
            this.tokenExpirationTime = expirationTime;
            
            // Store in localStorage
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('token_expiration', expirationTime.toString());
            if (data.refresh_token) {
                localStorage.setItem('refresh_token', data.refresh_token);
            }
            
            // Clean up code verifier
            localStorage.removeItem('code_verifier');
            
            return data.access_token;

        } catch (error) {
            console.error('Token exchange failed:', error);
            this.clearAuthData();
            throw error;
        } finally {
            this.isAuthorizationPending = false;
        }
    },
    
    async searchTrack(searchText) {
        const token = await this.getAccessToken();
        if(!token) throw new Error("No token available");

        const query = `track:${encodeURIComponent(searchText)}`;
        const endpoint = `${apiSearchUrl}?q=${query}&type=track`;
        try {
            const response = await fetch(endpoint, {
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": `Bearer ${token}`
                }
            });
            if(response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            }
        } catch(e) {
            console.error(e);
        }
    },

    clearAuthData() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('token_expiration');
        localStorage.removeItem('code_verifier');
        this.accessToken = null;
        this.tokenExpirationTime = null;
    }
};

export default SpotifyAPI;