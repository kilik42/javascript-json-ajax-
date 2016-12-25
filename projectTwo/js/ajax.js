var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");

var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
        var ourRequest = new XMLHttpRequest();

        ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1' + pageCounter + '.json');

        ourRequest.onLoad = function(){
            if(ourRequest.status >= 200 && ourRequest.status < 400){
                    var ourData = JSON.parse(OurRequest.responseText);

            //console.log(ourData[0]);
                    renderHTML(ourData);
            } else {
                console.llg('we connected to the server, but it returned an error');
            }
            
        }

        ourRequest.onerror = function(){
                console.log("connection error");

        };
        ourRequest.send();
        pageCounter++;
        if (pageCounter > 3){
            btn.classList.add("hideme");
        }
});

function renderHTML(data) {
    var htmlString = ' ';
    for (i = 0; i < data.length; i++){
        htmlString += "<p> " + data[i].name +  "is a " + data[i].species + "that likes to eat ";
        for( ii = 0; ii <data[i].foods.likes.length; ii++){
            if(ii ==0){
                htmlSting += data[i].foods.likes[ii];
            } else {
                htmlString += " and " + data[i].foods.likes[ii];
            }

        }
        htmString += 'and dislikes';

        
        for( ii = 0; ii <data[i].foods.dislikes.length; ii++){
            if(ii ==0){
                htmlSting += data[i].foods.dislikes[ii];
            } else {
                htmlString += " and " + data[i].foods.disikes[ii];
            }

        }
        htmlString += '.</p>';

    }
       animalContainer.insertAdjacentHTM('beforeend', htmlString ); 
}
