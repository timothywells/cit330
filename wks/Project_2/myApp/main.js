function bookSearch(){
    var search = document.getElementById('inputSearch').value
    document.getElementById('books').innerHTML = ""
    console.log(search)

    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
        dataType: "json",

        success: function(data) {
            for(i = 0; i < data.items.length; i++) {
                let result = ""
                result += "<div class=bookCard>"
                result += "<img src=" + data.items[i].volumeInfo.imageLinks.smallThumbnail + "/>"
                result += "<ul>"
                result += "<li><h2>" + data.items[i].volumeInfo.title + "</h2></li>"
                result += "<li>Author(s):<ul>" 
                data.items[i].volumeInfo.authors.forEach(author => {result += "<li>" + author + "</li>" 
                });
                result +="</ul></li>"
                //result += "<li>" +  + "</li>"
                result += "</ul>"
                result += "</div>"
                books.innerHTML += result
            }      
        },
        type: 'GET'
    });
}
document.getElementById('searchBTN').addEventListener('click', bookSearch, false)





//API key
//AIzaSyDdn6yzTBR15sshvZlumi1L_HVSpX3lvgk

//Get info from input

//send request to API
//https://www.googleapis.com/books/v1/volumes?q=search+terms

//build and post individual book cards

//function volumeCard(){
    //use innner.HTML to create cards startng with an outer div?
    // <div id="cover"></div>
    // <ul>
    //     <li>Title:</li>
    //     <li>Author:</li>
    //     <li>Publisher:</li>
    //     <li>Publish Date:</li>
    //     <li>Description:</li>
    // </ul>
//}

//extended portion - setup Oauth 2.0 for personalized information