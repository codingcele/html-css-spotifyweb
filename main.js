const {
    createApp
} = Vue

createApp({
    data() {
        return {
            showPause: false,
            songs: [
                {
                    title: "Mia Mia",
                    author: "ÜM",
                    image: "img/songs/MiaMia.jpg"
                },
                {
                    title: "Paris",
                    author: "Kungs",
                    image: "img/songs/paris.webp"
                },
                {
                    title: "micro",
                    author: "rusowsky",
                    image: "img/songs/micro.jpg"
                },
                {
                    title: "Chandelier",
                    author: "Will Paquin",
                    image: "img/songs/Chandelier.jpg"
                },
                {
                    title: "Freaks",
                    author: "Surf Curse",
                    image: "img/songs/Freaks.jpg"
                },
                {
                    title: "Welcome To The People",
                    author: "JADED",
                    image: "img/songs/WelcomeToThePeople.jpg"
                },
                {
                    title: "Tocka",
                    author: "Molchat Doma",
                    image: "img/songs/Tocka.jpg"
                },
                {
                    title: "Good Vibes Only",
                    author: "strangerperson",
                    image: "img/songs/GoodVibesOnly.jpg"
                },
                {
                    title: "Tienaté",
                    author: "Nu Genea",
                    image: "img/songs/Tienaté.jpg"
                },
                {
                    title: "Beat Goes On",
                    author: "The All Seeing I",
                    image: "img/songs/BeatGoesOn.jpg"
                },
            ],
            suggestedPlaylists: [
                {
                    name: "Top 50 USA",
                    description: "Le 50 canzoni più ascoltate negli Stati Uniti.",
                    image: "img/playlists/top50usa.jpg"
                },
                {
                    name: "Top 50 Italy",
                    description: "Top 50 canzoni più ascoltate in Italia.",
                    image: "img/playlists/top50ita.jpg"
                },
                {
                    name: "Coding Mode",
                    description: "Dedicated to all the programmers out there.",
                    image: "img/playlists/codingPlaylist.jpg"
                }
            ],
            mostPopularArtists: [
                {
                    name: "Taylor Swift",
                    image: "img/artists/taylorSwift.jpg"
                },
                {
                    name: "Drake",
                    image: "img/artists/drake.jpg"
                },
                {
                    name: "Ed Sheeran",
                    image: "img/artists/EdSheeran.jpg"
                },
                {
                    name: "Eminem",
                    image: "img/artists/eminem.jpg"
                },
            ]
        }
    },
    methods: {
        togglePlayerButtons() {
            this.showPause = !this.showPause;
        }
    },
    updated() {
    }
}).mount("#spotify")
