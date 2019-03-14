// class Card {
//     constructor(numberUsers) {
//         this.url = `https://randomuser.me/api/?results=${numberUsers}`,
        
//     }


   
    
     
// });





const callBack = (data) => {

    let refinedData = data.results;
    refinedData.forEach((item, index) => {
    let generatedHTML = `
            <div class="card">
                <div class="card-img-container">
                    <img class="card-img" src="${item.picture.thumbnail}" alt="profile picture">
                </div>
                <div class="card-info-container">
                <h3 id="name" class="card-name cap">${item.name.first} ${item.name.last}</h3>
                <p class="card-text">${item.email}</p>
                <p class="card-text cap">${item.location.city}, ${item.location.state}</p>
                </div>
            </div>
            `;

            let generatedModal = `
                <div class="modal-container">
                    <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                    <img class="modal-img" src="${item.picture.thumbnail}" alt="profile picture">
                    <h3 id="name" class="modal-name cap">${item.name.first} ${item.name.last}</h3>
                    <p class="modal-text">${item.email}</p>
                    <p class="modal-text cap">${item.location.city}</p>
                    <hr>
                    <p class="modal-text">${item.phone}</p>
                    <p class="modal-text">${item.location.street}</p>
                    <p class="modal-text">Birthday: ${item.dob.date}</p>
                    </div>
                </div>
            `;
        $('#gallery').append(generatedHTML); 
        document.querySelectorAll('.card')[index].addEventListener('click', function() {
            $('#gallery').append(generatedModal);
            $('.modal-close-btn').on('click', function() {
                  $('.modal-container').fadeOut();  
            });
        });   
    });
};

document.querySelectorAll('.modal-close-btn').forEach(function(item){
    item.addEventListener('click', function() {
        
    });

});

$.getJSON('https://randomuser.me/api/?results=12',  callBack(data));














