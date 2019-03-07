// api request example
// $.ajax({
//     url: 'https://randomuser.me/api/?format=xml',
//     dataType: 'xml',
//     success: function(data) {
//       console.log(data);
//     }
//   });


// esempio richiesta ajax con javascript 
//creo l`oggetto
let xhr = new XMLHttpRequest();
//creo la callback 
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        console.log(data);
        let dataRaffinati = data.results[0];
        console.log(dataRaffinati);
       let generatedHTML = `
       <ul>
            <li>First Name: ${}
       
       `
    }
};
//apro la richiesta 
xhr.open('GET', 'https://randomuser.me/api/?format=JSON');
//mando la richiesta
xhr.send();
 