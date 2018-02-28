fetch('http://fed17.herokuapp.com/popular-movies')

.then(function(response) {
    return response.json();
});

.then(function(movies) {
    displayMovies(movies)
});

.catch(function(error) {
    console.log(error)
});

function displayMovies(movies) {
    var htmlBlock = "";
    document.body.innerHTML = htmlBlock;

    for (const movie in movies) {

    }
}