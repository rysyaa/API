let films = document.querySelector('.films');
films.innerHTML = "";


let z = fetch('https://www.omdbapi.com/?apikey=b6003d8a&s=All');
// let res = JSON.parse(z)
// console.log(JSON.parse(z))   
z.then((response) =>{
    return response.json()
}).then((info) => {
    // console.log(data.Search);
    info.Search.forEach(elem => {
        // console.log(elem.avatar);
    films.innerHTML += `
        <div data-aos="zoom-in-up" class="movie">
        <img src="${elem.Poster}" alt="user" style="width: 180px; cursor: pointer;"> 
        <h3 class="name">${elem.Title}</h3>
        <p>Year ${elem.Year}</p>
        </div>
        `
    });
})