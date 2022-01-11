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

async function show_best_movies() {
    const response = await fetch(allUrls[0][1]);
    const movies = await response.json();

    const resul_movie = await fetch(base_url + movies.results[0].id);
    const movies_infos = await resul_movie.json();
    console.log(movies_infos);
/*    const modal_content = `

        <a href="#modal">More infos</a>

        <img id="best_rating_img_img" src=${movies_infos.image_url} alt="">
        <h1 id="the_best_rating_title">Title : ${movies_infos.title}</h1>

        <aside id="modal" class="modal">
            <div class="modal_content">
                <div>
                    <img class="best_rating_img_img" src=${movies_infos.image_url} alt="">
                </div>
                <div class="info_content">
                    <h1>Title : ${movies_infos.title}</h1>
                    <p>Genre : ${movies_infos.genres}<p>
                    <p id="the_best_rating_date_published">Date published : ${movies_infos.date_published}<p>
                    <p>Rated : ${movies_infos.rated}<p>
                    <p>Score Imdb : ${movies_infos.imdb_score}<p>
                    <p>Directors : ${movies_infos.directors}<p>
                    <p>Actors : ${movies_infos.actors}<p>
                    <p>Duration : ${movies_infos.duration}<p>
                    <p>Countries : ${movies_infos.countries}<p>
                    <p>Box office : ${movies_infos.budget}$<p>
                    <p>Description : ${movies_infos.long_description}</p>
                    <a href="#" class="modal_close">&times;</a>
                </div>
            </div>
        </aside>`;

  let section = document.querySelector('#the_best_ranting_content');
  section.innerHTML = modal_content;*/

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

      for (let i = 0; i < categories_best_ranking.length; i++) {
        const response = await fetch(categories_best_ranking[i]);
        const response_json = await response.json();
        console.log(response_json.title);
        }
//    extract_url_movies_genre(allUrls[1], categories_action);
//    extract_url_movies_genre(allUrls[2], categories_sci_fi);
//    extract_url_movies_genre(allUrls[3], categories_crime);
}


main();

console.log(categories_best_ranking[0]);
//console.log(categories_action);
//console.log(categories_sci_fi);
//console.log(categories_crime);

//let e = ["a","b","c","d"];
//
//console.log(e);
//e.push(10);
//e.push("http://localhost:8000/api/v1/titles/1508669");
//console.log(e);
