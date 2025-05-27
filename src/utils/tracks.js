const tracks = [
    {
        id: 1,
        name: "Blinding Lights",
        artist: "The Weeknd",
        album: "After Hours"
    },
    {
        id: 2,
        name: "Anti-Hero",
        artist: "Taylor Swift",
        album: "Midnights"
    },
    {
        id: 3,
        name: "Shape of You",
        artist: "Ed Sheeran",
        album: "÷"
    },
    {
        id: 4,
        name: "Uptown Funk",
        artist: "Mark Ronson ft. Bruno Mars",
        album: "Uptown Special"
    },
    {
        id: 5,
        name: "Someone Like You",
        artist: "Adele",
        album: "21"
    },
    {
        id: 6,
        name: "Bad Guy",
        artist: "Billie Eilish",
        album: "When We All Fall Asleep, Where Do We Go?"
    },
    {
        id: 7,
        name: "Bohemian Rhapsody",
        artist: "Queen",
        album: "A Night at the Opera"
    },
    {
        id: 8,
        name: "Sweet Child O' Mine",
        artist: "Guns N' Roses",
        album: "Appetite for Destruction"
    },
    {
        id: 9,
        name: "Thriller",
        artist: "Michael Jackson",
        album: "Thriller"
    },
    {
        id: 10,
        name: "Stairway to Heaven",
        artist: "Led Zeppelin",
        album: "Led Zeppelin IV"
    },
    {
        id: 11,
        name: "Smells Like Teen Spirit",
        artist: "Nirvana",
        album: "Nevermind"
    },
    {
        id: 12,
        name: "Hey Jude",
        artist: "The Beatles",
        album: "The Beatles (White Album)"
    },
    {
        id: 13,
        name: "Rolling in the Deep",
        artist: "Adele",
        album: "21"
    },
    {
        id: 14,
        name: "Despacito",
        artist: "Luis Fonsi & Daddy Yankee ft. Justin Bieber",
        album: "Vida"
    },
    {
        id: 15,
        name: "Purple Rain",
        artist: "Prince",
        album: "Purple Rain"
    },
    {
        id: 16,
        name: "Hotel California",
        artist: "Eagles",
        album: "Hotel California"
    },
    {
        id: 17,
        name: "Like a Rolling Stone",
        artist: "Bob Dylan",
        album: "Highway 61 Revisited"
    },
    {
        id: 18,
        name: "Imagine",
        artist: "John Lennon",
        album: "Imagine"
    },
    {
        id: 19,
        name: "Sweet Dreams (Are Made of This)",
        artist: "Eurythmics",
        album: "Sweet Dreams"
    },
    {
        id: 20,
        name: "Billie Jean",
        artist: "Michael Jackson",
        album: "Thriller"
    },
    {
        id: 21,
        name: "Born to Run",
        artist: "Bruce Springsteen",
        album: "Born to Run"
    },
    {
        id: 22,
        name: "November Rain",
        artist: "Guns N' Roses",
        album: "Use Your Illusion I"
    },
    {
        id: 23,
        name: "Wonderwall",
        artist: "Oasis",
        album: "(What's the Story) Morning Glory?"
    },
    {
        id: 24,
        name: "Like a Prayer",
        artist: "Madonna",
        album: "Like a Prayer"
    },
    {
        id: 25,
        name: "Shake It Off",
        artist: "Taylor Swift",
        album: "1989"
    },
    {
        id: 26,
        name: "Sweet Home Alabama",
        artist: "Lynyrd Skynyrd",
        album: "Second Helping"
    },
    {
        id: 27,
        name: "Losing My Religion",
        artist: "R.E.M.",
        album: "Out of Time"
    },
    {
        id: 28,
        name: "Every Breath You Take",
        artist: "The Police",
        album: "Synchronicity"
    },
    {
        id: 29,
        name: "Yesterday",
        artist: "The Beatles",
        album: "Help!"
    },
    {
        id: 30,
        name: "Smooth",
        artist: "Santana ft. Rob Thomas",
        album: "Supernatural"
    },
    {
        id: 31,
        name: "I Will Always Love You",
        artist: "Whitney Houston",
        album: "The Bodyguard"
    },
    {
        id: 32,
        name: "Sweet Caroline",
        artist: "Neil Diamond",
        album: "Sweet Caroline"
    },
    {
        id: 33,
        name: "Paint It Black",
        artist: "The Rolling Stones",
        album: "Aftermath"
    },
    {
        id: 34,
        name: "Dancing Queen",
        artist: "ABBA",
        album: "Arrival"
    },
    {
        id: 35,
        name: "Livin' on a Prayer",
        artist: "Bon Jovi",
        album: "Slippery When Wet"
    },
    {
        id: 36,
        name: "I Want to Hold Your Hand",
        artist: "The Beatles",
        album: "Meet the Beatles!"
    },
    {
        id: 37,
        name: "Sweet Dreams",
        artist: "Beyoncé",
        album: "I Am... Sasha Fierce"
    },
    {
        id: 38,
        name: "Don't Stop Believin'",
        artist: "Journey",
        album: "Escape"
    },
    {
        id: 39,
        name: "All Star",
        artist: "Smash Mouth",
        album: "Astro Lounge"
    },
    {
        id: 40,
        name: "Toxic",
        artist: "Britney Spears",
        album: "In the Zone"
    },
    {
        id: 41,
        name: "Sweet Child O' Mine",
        artist: "Guns N' Roses",
        album: "Appetite for Destruction"
    },
    {
        id: 42,
        name: "I Wanna Dance with Somebody",
        artist: "Whitney Houston",
        album: "Whitney"
    },
    {
        id: 43,
        name: "Girls Just Want to Have Fun",
        artist: "Cyndi Lauper",
        album: "She's So Unusual"
    },
    {
        id: 44,
        name: "Sweet Home Chicago",
        artist: "Robert Johnson",
        album: "King of the Delta Blues Singers"
    },
    {
        id: 45,
        name: "California Girls",
        artist: "The Beach Boys",
        album: "Summer Days (And Summer Nights!!)"
    },
    {
        id: 46,
        name: "Take on Me",
        artist: "a-ha",
        album: "Hunting High and Low"
    },
    {
        id: 47,
        name: "Sweet Emotion",
        artist: "Aerosmith",
        album: "Toys in the Attic"
    },
    {
        id: 48,
        name: "Stayin' Alive",
        artist: "Bee Gees",
        album: "Saturday Night Fever"
    },
    {
        id: 49,
        name: "Respect",
        artist: "Aretha Franklin",
        album: "I Never Loved a Man the Way I Love You"
    },
    {
        id: 50,
        name: "Sweet Jane",
        artist: "The Velvet Underground",
        album: "Loaded"
    },
    {
        id: 51,
        name: "Good Vibrations",
        artist: "The Beach Boys",
        album: "Smiley Smile"
    },
    {
        id: 52,
        name: "Like a Virgin",
        artist: "Madonna",
        album: "Like a Virgin"
    },
    {
        id: 53,
        name: "Sweet Dreams (Are Made of This)",
        artist: "Eurythmics",
        album: "Sweet Dreams (Are Made of This)"
    },
    {
        id: 54,
        name: "Born in the U.S.A.",
        artist: "Bruce Springsteen",
        album: "Born in the U.S.A."
    },
    {
        id: 55,
        name: "Sweet Thing",
        artist: "Van Morrison",
        album: "Astral Weeks"
    },
    {
        id: 56,
        name: "American Woman",
        artist: "The Guess Who",
        album: "American Woman"
    },
    {
        id: 57,
        name: "Sweet Surrender",
        artist: "Sarah McLachlan",
        album: "Fumbling Towards Ecstasy"
    },
    {
        id: 58,
        name: "Light My Fire",
        artist: "The Doors",
        album: "The Doors"
    },
    {
        id: 59,
        name: "Sweet Victory",
        artist: "David Glen Eisley",
        album: "SpongeBob SquarePants: The Yellow Album"
    },
    {
        id: 60,
        name: "Walk This Way",
        artist: "Aerosmith",
        album: "Toys in the Attic"
    },
    {
        id: 61,
        name: "Sweet Dreams",
        artist: "Air Supply",
        album: "The One That You Love"
    },
    {
        id: 62,
        name: "Sweet Home Chicago",
        artist: "Blues Brothers",
        album: "Briefcase Full of Blues"
    },
    {
        id: 63,
        name: "Sweet Disposition",
        artist: "The Temper Trap",
        album: "Conditions"
    },
    {
        id: 64,
        name: "Bridge Over Troubled Water",
        artist: "Simon & Garfunkel",
        album: "Bridge Over Troubled Water"
    },
    {
        id: 65,
        name: "Sweet Leaf",
        artist: "Black Sabbath",
        album: "Master of Reality"
    },
    {
        id: 66,
        name: "American Pie",
        artist: "Don McLean",
        album: "American Pie"
    },
    {
        id: 67,
        name: "Sweet Soul Music",
        artist: "Arthur Conley",
        album: "Sweet Soul Music"
    },
    {
        id: 68,
        name: "(I Can't Get No) Satisfaction",
        artist: "The Rolling Stones",
        album: "Out of Our Heads"
    },
    {
        id: 69,
        name: "Sweet Escape",
        artist: "Gwen Stefani",
        album: "The Sweet Escape"
    },
    {
        id: 70,
        name: "Whole Lotta Love",
        artist: "Led Zeppelin",
        album: "Led Zeppelin II"
    },
    {
        id: 71,
        name: "Sweet Baby James",
        artist: "James Taylor",
        album: "Sweet Baby James"
    },
    {
        id: 72,
        name: "Johnny B. Goode",
        artist: "Chuck Berry",
        album: "Chuck Berry Is on Top"
    },
    {
        id: 73,
        name: "Sweet About Me",
        artist: "Gabriella Cilmi",
        album: "Lessons to Be Learned"
    },
    {
        id: 74,
        name: "God Save the Queen",
        artist: "Sex Pistols",
        album: "Never Mind the Bollocks"
    },
    {
        id: 75,
        name: "Sweet Love",
        artist: "Anita Baker",
        album: "Rapture"
    },
    {
        id: 76,
        name: "Beat It",
        artist: "Michael Jackson",
        album: "Thriller"
    },
    {
        id: 77,
        name: "Sweet Nothing",
        artist: "Calvin Harris ft. Florence Welch",
        album: "18 Months"
    },
    {
        id: 78,
        name: "London Calling",
        artist: "The Clash",
        album: "London Calling"
    },
    {
        id: 79,
        name: "Sweet Talkin' Woman",
        artist: "Electric Light Orchestra",
        album: "Out of the Blue"
    },
    {
        id: 80,
        name: "Good Times",
        artist: "Chic",
        album: "Risqué"
    },
    {
        id: 81,
        name: "Sweet Virginia",
        artist: "The Rolling Stones",
        album: "Exile on Main St."
    },
    {
        id: 82,
        name: "Walk Like an Egyptian",
        artist: "The Bangles",
        album: "Different Light"
    },
    {
        id: 83,
        name: "Sweet Sacrifice",
        artist: "Evanescence",
        album: "The Open Door"
    },
    {
        id: 84,
        name: "What's Going On",
        artist: "Marvin Gaye",
        album: "What's Going On"
    },
    {
        id: 85,
        name: "Sweet Sixteen",
        artist: "Billy Idol",
        album: "Whiplash Smile"
    },
    {
        id: 86,
        name: "The Sound of Silence",
        artist: "Simon & Garfunkel",
        album: "Sounds of Silence"
    },
    {
        id: 87,
        name: "Sweet City Woman",
        artist: "The Stampeders",
        album: "Against the Grain"
    },
    {
        id: 88,
        name: "Sweet Child O' Mine",
        artist: "Guns N' Roses",
        album: "Appetite for Destruction"
    },
    {
        id: 89,
        name: "Sweet Dreams",
        artist: "La Bouche",
        album: "Sweet Dreams"
    },
    {
        id: 90,
        name: "Message in a Bottle",
        artist: "The Police",
        album: "Reggatta de Blanc"
    },
    {
        id: 91,
        name: "Sweet Emotion",
        artist: "Aerosmith",
        album: "Toys in the Attic"
    },
    {
        id: 92,
        name: "Sweet Home Alabama",
        artist: "Lynyrd Skynyrd",
        album: "Second Helping"
    },
    {
        id: 93,
        name: "Sweet Dreams",
        artist: "Marilyn Manson",
        album: "Smells Like Children"
    },
    {
        id: 94,
        name: "Light My Fire",
        artist: "The Doors",
        album: "The Doors"
    },
    {
        id: 95,
        name: "Sweet Caroline",
        artist: "Neil Diamond",
        album: "Sweet Caroline"
    },
    {
        id: 96,
        name: "Sweet Home Chicago",
        artist: "Robert Johnson",
        album: "King of the Delta Blues Singers"
    },
    {
        id: 97,
        name: "Sweet Dreams (Are Made of This)",
        artist: "Eurythmics",
        album: "Sweet Dreams (Are Made of This)"
    },
    {
        id: 98,
        name: "Sweet Child O' Mine",
        artist: "Guns N' Roses",
        album: "Appetite for Destruction"
    },
    {
        id: 99,
        name: "Sweet Emotion",
        artist: "Aerosmith",
        album: "Toys in the Attic"
    },
    {
        id: 100,
        name: "Sweet Home Alabama",
        artist: "Lynyrd Skynyrd",
        album: "Second Helping"
    }
];

export default tracks;
