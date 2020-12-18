function bookSearch(){
    var search = document.getElementById('inputSearch').value
    var select = document.getElementById('searchSelect').value
    var APIkey = "AIzaSyDdn6yzTBR15sshvZlumi1L_HVSpX3lvgk"
    document.getElementById('books').innerHTML = ""
    console.log(search)
    if(search == "") {
        alert("Please enter informatiion into the search field to find a book")
        return false
    } else if (select == ""){
        $.ajax({
            type:"GET",
            data: {search:search, select: ""},
            url: "https://www.googleapis.com/books/v1/volumes?q=" + search + "&maxResults=36&orderBy=relevance&key=" + APIkey,
            dataType: "text",
            success: forLoop,
            error: function() {
                alert("Please enter informatiion into the search field to find a book");
            },
        });
    } else {
        $.ajax({
            type:"GET",
            data: {search:search, select:select},
            url: "https://www.googleapis.com/books/v1/volumes?q=" + select + search + "&maxResults=36&orderBy=relevance&key=" + APIkey,
            dataType: "text",
            success: forLoop,
            error: function() {
                alert("Please enter informatiion into the search field to find a book");
            },
        });
    }
}
document.getElementById('searchBTN').addEventListener('click', bookSearch)

function forLoop(inputdata) {
    var data = JSON.parse(inputdata)
    console.log(data)    
    var i;
    for(i in data.items) {
        let result = ""
        result += "<div class=bookCard>"
            result += "<div class=row>"
                result += "<a href=" + (data.items[i].volumeInfo.infoLink || '') + ">"
                    try {
                        try {
                            result += "<img class=bookCover src=" + data.items[i].volumeInfo.imageLinks.thumbnail + "/>"
                        } catch {
                            result += "<img class=bookCover src=" + data.items[i].volumeInfo.imageLinks.smallThumbnail + "/>"
                        }
                    } catch {
                        result += "<img class=bookCover src=nobook.jpg>"
                    }
                result += "</a>"
                result += "<div class=bookDetails>"
                    result += "<h3 id=title>" + (data.items[i].volumeInfo.title || 'Title Unavailable') + "</h3>"
                        result += "<h4>Author(s):</h4>"
                            result += "<ul>"
                                try {
                                    data.items[i].volumeInfo.authors.forEach(author => {result += "<li>" + (author) + "</li>"})
                                } catch {
                                    result += "<li>Author Unavailable</li>"
                                }
                            result += "</ul>"
                        result += "<p id=description>" + (data.items[i].volumeInfo.description || 'Description Unavailable') + "</p>"
                    result += "</div>"
                result += "</div>"
            result += "<div class=links>"
                result += "<div>"
                    result += '<span id=GBS_Button0><img src=https://books.google.com/intl/en/googlebooks/images/gbs_preview_button1.gif border=0></span>'
                result += "</div>"
                result += "<div class=linkbtn><a href=" + (data.items[i].volumeInfo.previewLink || alert("Preview Unavailable")) + " target=_blank>Preview</a></div>"
                result += "<div class=linkbtn><a href=" + (data.items[i].volumeInfo.infoLink || alert("Preview Unavailable")) + " target=_blank>More Info</a></div>"
            result += "</div>"        
        result += "</div>"
    books.innerHTML += result
    }
}

// function APIkey() {
//     return "AIzaSyDdn6yzTBR15sshvZlumi1L_HVSpX3lvgk"
// }
