function bookSearch(){
    var search = document.getElementById('inputSearch').value
    var select = document.getElementById('searchSelect').value
    //filter by book type
    document.getElementById('books').innerHTML = ""
    console.log(search)
    if(search == "" || search == NULL) {
        alert("Please enter informatiion into the search field to find a book")
        return false
            //if search is empty, set allert else ajax
    } else {
        $.ajax({
            // url: "https://www.googleapis.com/books/v1/volumes?q=" + search + "&maxResults=36&orderBy=relevance",
            url: "https://www.googleapis.com/books/v1/volumes?q=" + select + search + "&maxResults=36&orderBy=relevance&key=" + APIKey(),
            dataType: "json",
            type: 'GET',
            success: forLoop,
            //setup for if error from google cant load page
            error: function() {
                alert("Please enter informatiion into the search field to find a book");
            },
        });
    }
}
document.getElementById('searchBTN').addEventListener('click', bookSearch, false)
//event listener for enter key
//uncaught error set as Unavailable


function forLoop(data) {
    for(i = 0; i <= data.items.length; i++) {
        let result = ""
        result += "<div class=bookCard style={list-style-type: none;}>"
        result += "<a href=" + data.items[i].volumeInfo.infoLink + "><img class=bookCover src=" + data.items[i].volumeInfo.imageLinks.smallThumbnail + "/></a>"
        result += "<div class=bookDetails>"
        result += "<h3>" + data.items[i].volumeInfo.title + "</h3>"
        result += "<h4>Author(s):</h4>"
        result += "<ul>" 
            data.items[i].volumeInfo.authors.forEach(author => {result += "<li>" + author + "</li>" })
        result += "</ul>"
        result += "<p id=description>" + data.items[i].volumeInfo.description + "</p>"
        //result += "<p>" +  + "</p>"
        result += "</div></div>"
        books.innerHTML += result
    }      
}


function APIKey() {
    return "AIzaSyDdn6yzTBR15sshvZlumi1L_HVSpX3lvgk"
}

//API key
//AIzaSyDdn6yzTBR15sshvZlumi1L_HVSpX3lvgk