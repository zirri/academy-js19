//API-functions

async function getAllMovies(){
    const responseJson = await fetch('/movies');
    const response = await responseJson.json();
    return response
}

async function getMovieById(id){
    const responseJson = await fetch(`/movies/${id}`);
    const response = await responseJson.json();
    return response
}

async function postNewMovie(movie){
    return fetch('/movies',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    });
}

async function putEditMovie(movie){
    return fetch(`/movies/${movie.id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    });
};

async function deleteMovie(id){
    return fetch(`/movies/${id}`,{
        method: 'DELETE'
    });
};

//Functions for make\ing markup
function makeOverviewItemMarkup(movie){
    return `
    <div class="col l2 m4 s6 overview-div">
        <img class="thumb" src="${movie.coverImg}" id="${movie.id}">
    </div>`
}

function makeOverviewMarkup(movies){
    return `
    <div class="container">
        <div class="row movies-overview">
            ${movies.map(movie =>{
               return makeOverviewItemMarkup(movie)}).join('')}
         </div>
    </div>
    `;
};

function makeMovieDetailsMarkup(movie){
    return `
        <div class="container">
            <div class="row">
                <div class="col s8 offset-s2">
                    <div class="card">
                        <div class="card-image">
                            <img src="${movie.coverImg}">
                            <span class="card-title">${movie.title}</span>
                            <a class="btn-floating waves-effect halfway-fab  waves-light teal btn-edit"><i class="material-icons" id="${movie.id}">create</i></a>
                        </div>
                        <div class="card-content">
                            <p>Produced: ${movie.year}</p> 
                            <p>Genre: ${movie.genre}</p>
                            <p>Rating: ${movie.rating}</p>
                            <p>Running time: ${movie.runningTime}</p>
                            <p></p>
                            <p>${movie.summary}</p>
                            <button class="btn waves-effect red waves-light" name="action" id="delete-button">
                                Delete movie
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderAddMovieMarkup(){
    return `
    <div class="container" id="add-movie">
        <div class="row">
            <div class="col s8 offset-s2">
                <form id="add-movie-form">
                    <label for="title">Title: 
                        <input type="text" name="title" id="title" min="1">
                    </label>
                    <label for="year">Production year: 
                        <input type="number" name="year" id="year" min="1900" max="2100">
                    </label>
                    <label for="genre">Genre: 
                        <input type="text" name="genre" id="genre" min="1">
                    </label>
                    <label for="rating">Rating: 
                        <input type="number" name="rating" id="rating" min="1" max="5">
                    </label>
                    <label for="runningTime">Running time: 
                        <input type="number" name="runningTime" id="runningTime" min="1" max="500">
                    </label>
                    <label for="summary">Short summary: 
                        <input type="text" name="summary" id="summary" min="1">
                    </label>
                    <label for="coverImg">Link to cover image: 
                        <input type="text" name="coverImg" id="coverImg" min="1">
                    </label>
                    <button class="btn waves-effect waves-light" type="submit" name="action" id="submit-button">
                        Send
                        <i class="material-icons right">send</i>
                    </button>
                    <button class="btn waves-effect grey waves-light" name="action" id="cancel-button">
                    Cancel
                    </button>
                </form>
            </div>
        </div>
    </div>`;
};

function renderEditMovieMarkup(movie){
    return `
    <div class="container" id="add-movie">
        <div class="row">
            <div class="col s8 offset-s2">
                <form id="edit-movie-form">
                    <label for="title">Title: 
                        <input type="text" name="title" id="title" value="${movie.title||''}" min="1">
                    </label>
                    <label for="year">Production year: 
                        <input type="number" name="year" id="year" value="${movie.year||''}" min="1900" max="2100">
                    </label>
                    <label for="genre">Genre: 
                        <input type="text" name="genre" id="genre" value="${movie.genre||''}"min="1">
                    </label>
                    <label for="rating">Rating: 
                        <input type="number" name="rating" id="rating" value="${movie.rating||''}" min="1" max="5">
                    </label>
                    <label for="runningTime">Running time: 
                        <input type="number" name="runningTime" id="runningTime" value="${movie.runningTime||''}" min="1" max="500">
                    </label>
                    <label for="summary">Short summary: 
                        <input type="text" name="summary" id="summary" value="${movie.summary||''}"min="1">
                    </label>
                    <label for="coverImg">Link to cover image: 
                        <input type="text" name="coverImg" id="coverImg" value="${movie.coverImg||''}" min="1">
                    </label>
                    <button class="btn waves-effect waves-light" type="submit" name="action" id="submit-button">
                        Send
                        <i class="material-icons right">send</i>
                    </button>
                    <button class="btn waves-effect grey waves-light" name="action" id="cancel-button">
                    Cancel
                    </button>
                </form>
            </div>
        </div>
    </div>`;
};

function renderloadingMarkup(action){
    return `
        <h1>${action} in progress...</h1>
    `
}

function rendererrorMarkup(errorMessage="Something went wrong"){
    return `
        <h1>Error</h1>
        <pre>${errorMessage}</pre>
        <button class="btn waves-effect red waves-light" name="action" id="retry-button">
            Retry
        </button>
    `
}

//Rendering functions
function renderError(errorMessage="Something went wrong", fn=renderOverview, id=-1){
    console.log(fn, typeof fn)
    const mainNode = document.querySelector('#main');
    mainNode.innerHTML = rendererrorMarkup(errorMessage);

    const retryButton = document.querySelector('#retry-button');
    retryButton.addEventListener('click', event => {
        fn(id);
    })
}

async function renderOverview(){
    const mainNode = document.querySelector('#main');
    mainNode.innerHTML = renderloadingMarkup('Loading movies '); 
    const movies = await getAllMovies();
    
    if(movies.error){
        return renderError(movies.error, arguments.callee)
    }
    mainNode.innerHTML = makeOverviewMarkup(movies);

    const divMoviesOverview = document.querySelector('.movies-overview');
    divMoviesOverview.addEventListener('click', event => {
        if(event.target.id){
            renderMovieDetails(event.target.id);
        }
    })
};

async function renderMovieDetails(id){
    const mainNode = document.querySelector('#main');
    mainNode.innerHTML = renderloadingMarkup('Getting details ');

    const movie = await getMovieById(id);
    if(movie.error){
        return renderError(movies.error, arguments.callee, id);
    }

    mainNode.innerHTML = makeMovieDetailsMarkup(movie);
    const editButton = document.querySelector('.btn-edit');
    editButton.addEventListener('click', event => {
        renderEditMovie(id, movie);
    })

    const deleteButton = document.querySelector('#delete-button');
    deleteButton.addEventListener('click', async event => {
        mainNode.innerHTML = renderloadingMarkup('Deleting movie ');
        await deleteMovie(id);
        renderOverview()
    })
}

async function renderAddMovie(){
    const mainNode = document.querySelector('#main');
    mainNode.innerHTML = renderAddMovieMarkup();

    const submitButton = document.querySelector('#submit-button');
    submitButton.addEventListener('click', event => {
        event.preventDefault();
        const addForm = document.querySelector('#add-movie-form');
        const movieToAdd = {
            title: addForm.title.value,
            year: addForm.year.value,
            genre: addForm.genre.value,
            rating: addForm.rating.value,
            runningTime: addForm.runningTime.value,
            summary: addForm.summary.value,
            coverImg: addForm.coverImg.value,
        };
        postNewMovie(movieToAdd)
        .then(res => res.json())
        .then(res => {   
            if(res.error){
                return renderError(res.error, arguments.callee);
            } 
            renderOverview();
        });
    });
    const cancelButton = document.querySelector('#cancel-button');
    cancelButton.addEventListener('click', event => {
        renderOverview();
    });
};

async function renderEditMovie(id, movie){
    const mainNode = document.querySelector('#main');

    mainNode.innerHTML = renderEditMovieMarkup(movie);

    const submitButton = document.querySelector('#submit-button');
    submitButton.addEventListener('click', event => {
        event.preventDefault();
        const editForm = document.querySelector('#edit-movie-form');
        const movieToEdit = {
            id:id,
            title: editForm.title.value,
            year: editForm.year.value,
            genre: editForm.genre.value,
            rating: editForm.rating.value,
            runningTime: editForm.runningTime.value,
            summary: editForm.summary.value,
            coverImg: editForm.coverImg.value,
        };
        putEditMovie(movieToEdit)
        .then(res => res.json())
        .then(res => {  
            if(res.error){
                return renderError(res.error, arguments.callee, id);
            }   
            renderOverview();
        });
    });
    const cancelButton = document.querySelector('#cancel-button');
    cancelButton.addEventListener('click', event => {
        renderOverview();
    });
};

//Static elements with eventlistener
const logo = document.querySelector('.nav-wrapper');
logo.addEventListener('click', event => {
    if(event.target.id){
        switch (event.target.id){
            case 'logo':
                renderOverview();
                break;
            case 'back':
                renderOverview();
                break;
            case 'add-movie':
                renderAddMovie();
                break;
        }
    }
})

renderOverview();