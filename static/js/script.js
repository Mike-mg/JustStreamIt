const base_url = 'http://localhost:8000/api/v1/titles/';
const allUrls = [
    ['http://localhost:8000/api/v1/titles/?sort_by=-imdb_score',
    'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page=2'],
    ['http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-votes',
    'http://localhost:8000/api/v1/titles/?genre=Action&page=2&sort_by=-votes'],
    ['http://localhost:8000/api/v1/titles/?genre=Sci-Fi&sort_by=-votes',
    'http://localhost:8000/api/v1/titles/?genre=Sci-Fi&page=2&sort_by=-votes'],
    ['http://localhost:8000/api/v1/titles/?genre=Crime&sort_by=-votes',
    'http://localhost:8000/api/v1/titles/?genre=Crime&page=2&sort_by=-votes']
];

let categories_best_ranking = []; //best_ratings
let categories_action = []; //action
let categories_sci_fi = []; //sci-fi
let categories_crime = []; // crime

async function show_movies(url) {
    const response = await fetch(url);
    const movies_infos = await response.json();

    const modal_content = `
        <img class="best_rating_img_img" src=${movies_infos.image_url} alt="">
        <div class="infos">
            <h1 class="the_best_rating_title">${movies_infos.title}</h1>
            <p class="description">${movies_infos.description}</p>
            <a href="#modal">More infos</a>
        </div>


        <aside id="modal" class="modal">
            <div class="modal_content">
                <div>
                    <img class="best_rating_img_img" src=${movies_infos.image_url} alt="">
                </div>
                <div class="info_content">
                    <h1><u>Title :</u> ${movies_infos.title}</h1>
                    <p><u>Genre :</u> ${movies_infos.genres}</p>
                    <p id="the_best_rating_date_published"><u>Date published :</u> ${movies_infos.date_published}</p>
                    <p><u>Rated :</u> ${movies_infos.rated}</p>
                    <p><u>Score Imdb :</u> ${movies_infos.imdb_score}</p>
                    <p><u>Directors :</u> ${movies_infos.directors}</p>
                    <p><u>Actors :</u><br>${movies_infos.actors}</p>
                    <p><u>Duration :</u> ${movies_infos.duration}min</p>
                    <p><u>Countries :</u> ${movies_infos.countries}</p>
                    <p><u>Box office :</u> ${movies_infos.budget}$</p>
                    <p><u>Description :</u><br>${movies_infos.long_description}</p>
                    <a href="#" class="modal_close">&times;</a>
                </div>
            </div>
        </aside>`;

  let section = document.querySelector('#the_best_ranting_content');
  section.innerHTML = modal_content;

}


async function extract_url_movies_genre(url_api, url_movie) {
    for (let i = 0; i < url_api.length; i++) {
        const response = await fetch(url_api[i]);
        const response_json = await response.json();

        for (let i = 0; i < response_json.results.length; i++) {
            url_movie.push(base_url + response_json.results[i].id);
        }
    }
}

async function main() {

    await extract_url_movies_genre(allUrls[0], categories_best_ranking);
    await extract_url_movies_genre(allUrls[1], categories_action);
    await extract_url_movies_genre(allUrls[2], categories_sci_fi);
    await extract_url_movies_genre(allUrls[3], categories_crime);

    for (let i = 0; i < categories_best_ranking.length; i++) {
        const response = await fetch(categories_best_ranking[i]);
        const response_json = await response.json();
    }

    show_movies(categories_best_ranking[6])

}


main();