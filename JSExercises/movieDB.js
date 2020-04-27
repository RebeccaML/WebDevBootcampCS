let movies = [{
        title: "Beauty and the Beast",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Shawshank Redemption",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Once Upon a Time in Hollywood",
        rating: 3.5,
        hasWatched: true
    },
    {
        title: "Frozen 2",
        rating: 4,
        hasWatched: false
    }
];

movies.forEach(function(movie) {
    if (movie.hasWatched === true) {
        console.log(`You have watched "${movie.title}" - ${movie.rating} stars`);
    }
    else {
        console.log(`You have not watched "${movie.title}" - ${movie.rating} stars`);
    }
});