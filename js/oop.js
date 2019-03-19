

//creare la struttura base della classe
//

class Card { 
    constructor(url) {
      this.url = url;  
      this.data = this.obtainData();
    }
    //method to obtain data
    obtainData() {
        let refinedData;
        $.getJSON(this.url, function (data) {
            refinedData = data.results;
        });
        
    }
}










//funzione che generale lo url in base alle scelte dell`utente
 var urlGenerator = () => {
 
}
 



 const cardExample = new Card('https://randomuser.me/api/?results=12');
 console.log(cardExample.data);


 

 
  