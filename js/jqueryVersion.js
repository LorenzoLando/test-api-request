
//classe costruita con jQuery


class Card {
    constructor(url) {
        this.url = url;
        
    }
    generateCard() {
        let callBack = (response) => {
                let refinedData = response.results[0];
                console.log(refinedData);
                let generatedHTML = `
                            <div class="card">
                                <div class="card-img-container">
                                    <img class="card-img" src="${refinedData.picture.thumbnail}" alt="profile picture">
                                </div>
                                <div class="card-info-container">
                                    <h3 id="name" class="card-name cap">${refinedData.name.first} ${refinedData.name.last}</h3>
                                    <p class="card-text">${refinedData.email}</p>
                                    <p class="card-text cap">${refinedData.location.city}, ${refinedData.location.state}</p>
                                </div>
                            </div>
                        `;
                let generatedModal = `
                    <div class="modal-container">
                    <div class="modal">
                        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                        <div class="modal-info-container">
                            <img class="modal-img" src="${refinedData.picture.thumbnail}" alt="profile picture">
                            <h3 id="name" class="modal-name cap">${refinedData.name.first} ${refinedData.name.last}</h3>
                            <p class="modal-text">${refinedData.email}</p>
                            <p class="modal-text cap">${refinedData.location.city}</p>
                            <hr>
                            <p class="modal-text">${refinedData.phone}</p>
                            <p class="modal-text">${refinedData.location.street}</p>
                            <p class="modal-text">Birthday: ${refinedData.dob.date}</p>
                        </div>
                    </div>
                    
                `;
                //appen the gallery
                $('#gallery').html(generatedHTML);
                //quando la card viene cliccata
                $('.card').on('click', function() {
                    $('#gallery').append(generatedModal);
                    $('modal-container').fadeOut();
                });
          

                
                
                
                //quando il bottone di chiusura viene cliccato
                //fade out il modale


                
            }
            $.getJSON(this.url, callBack);
            
            
            
        }

    generateModal() {

    }
}





const firstCard  = new Card('https://randomuser.me/api/?format=JSON');
firstCard.generateCard();



















