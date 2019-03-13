// class Card {
//     constructor(numberUsers) {
//         this.url = `https://randomuser.me/api/?results=${numberUsers}`;
        
//     }
    
//      callBack (response) {
       
//             let refinedData = response.results[0];
//             console.log(refinedData);
//             let generatedHTML = `
//                             <div class="card">
//                                 <div class="card-img-container">
//                                     <img class="card-img" src="${refinedData.picture.thumbnail}" alt="profile picture">
//                                 </div>
//                                 <div class="card-info-container">
//                                     <h3 id="name" class="card-name cap">${refinedData.name.first} ${refinedData.name.last}</h3>
//                                     <p class="card-text">${refinedData.email}</p>
//                                     <p class="card-text cap">${refinedData.location.city}, ${refinedData.location.state}</p>
//                                 </div>
//                             </div>
//                         `;
//                 let generatedModal = `
//                     <div class="modal-container">
//                     <div class="modal">
//                         <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
//                         <div class="modal-info-container">
//                             <img class="modal-img" src="${refinedData.picture.thumbnail}" alt="profile picture">
//                             <h3 id="name" class="modal-name cap">${refinedData.name.first} ${refinedData.name.last}</h3>
//                             <p class="modal-text">${refinedData.email}</p>
//                             <p class="modal-text cap">${refinedData.location.city}</p>
//                             <hr>
//                             <p class="modal-text">${refinedData.phone}</p>
//                             <p class="modal-text">${refinedData.location.street}</p>
//                             <p class="modal-text">Birthday: ${refinedData.dob.date}</p>
//                         </div>
//                     </div>
                    
//                 `;
//                 //appen the gallery
//                 $('#gallery').html(generatedHTML);
//                 //quando la card viene cliccata
//                 $('.card').on('click', function() {
//                     $('#gallery').append(generatedModal);
//                     $('modal-container').fadeOut();
//                 });
          

                
                
                
//                 //quando il bottone di chiusura viene cliccato
//                 //fade out il modale


                
//             }
//             $.getJSON(this.url, callBack);
            
            
            
//         }

//   }





// $.getJSON('https://randomuser.me/api/?results=12', function(data) {

//        console.log(data);

// });







$.getJSON('https://randomuser.me/api/?results=12', function(data) {


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
});

document.querySelectorAll('.modal-close-btn').forEach(function(item){
    item.addEventListener('click', function() {
        
    });
});














