document.addEventListener('DOMContentLoaded', (event) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const idmovie = urlParams.get('idmovie');

    if(idmovie === null) {
        document.querySelector("#main").innerHTML = '<h1 class="text-white text-center" style="margin-top: 200px">Trang này yêu cầu ID phim. Vui lòng truy cập đúng URL.</h1>';
    } else {
        fetchMovieDetails(idmovie);
    }
});

function fetchMovieDetails(idmovie) {
    fetch('./src/assets/data/movies.json')
        .then(response => response.json())
        .then(movies => {
            const movie = movies.find(m => m.id.toString() === idmovie);
            if (movie) {
                renderMovieDetails(movie);
            } else {
                document.querySelector("#main").innerHTML = '<h1 class="text-white text-center" style="margin-top: 200px">Không tìm thấy thông tin phim. Hãy kiểm tra lại.</h1>';
            }
        })
        .catch(error => console.error('Có lỗi xảy ra khi tải thông tin phim:', error));
}

function renderMovieDetails(movie) {
    document.querySelector("#poster").setAttribute("src",`${movie.poster}`)
    document.querySelector("#title-movie").textContent = `${movie.name}`
    document.querySelector("#type").textContent = `${movie.type}`
    document.querySelector("#price").textContent = `${movie.price}`+" vnđ"
    document.querySelector("#director").textContent += movie.description.director
    document.querySelector("#actor").textContent += movie.description.actor
    document.querySelector("#release").textContent += movie.description.release
    document.querySelector("#content").textContent = movie.content
    document.querySelector("#country").textContent = movie.country
}