class Card {
    constructor(url) {
        this.url = url;
    }
    generateCard() {
        
}

let galleryContainer = document.querySelector('#gallery');
let apiRequest  = () => {
let xhr = new XMLHttpRequest();
    //creo la callback 
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            let refinedData = data.results[0];
            console.log(refinedData);
            let generatedHTML = `
                <div class="card">
                    <div class="card-img-container">
                        <img class="card-img" src="${refinedData.picture.medium}" alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${refinedData.name.first} ${refinedData.name.last}</h3>
                        <p class="card-text">${refinedData.email}</p>
                        <p class="card-text cap">${refinedData.location.city}, ${refinedData.location.state}</p>
                    </div>
                </div>
            `;
            galleryContainer.innerHTML += generatedHTML;
            
            
        }
    };
    //apro la richiesta 
    xhr.open('GET', 'https://randomuser.me/api/?format=JSON');
    //mando la richiesta
    xhr.send();
}








