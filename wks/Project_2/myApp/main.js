function bookSearch(){
    var search = document.getElementById('inputSearch').value
    var select = document.getElementById('searchSelect').value
    //var APIkey = "AIzaSyDdn6yzTBR15sshvZlumi1L_HVSpX3lvgk"
    document.getElementById('books').innerHTML = ""
    console.log(search)
    if(search == "") {
        alert("Please enter informatiion into the search field to find a book")
        return false
    } else if (select == ""){
        $.ajax({
            //url: "https://www.googleapis.com/books/v1/volumes?q=" + search + "&maxResults=36&orderBy=relevance&key=" + APIkey,
            url: "https://www.googleapis.com/books/v1/volumes?q=" + search + "&maxResults=36&orderBy=relevance",

            dataType: "json",
            type: 'GET',
            success: forLoop,
            error: function() {
                alert("Please enter informatiion into the search field to find a book");
            },
        });
    } else {
        $.ajax({
            //url: "https://www.googleapis.com/books/v1/volumes?q=" + select.select + "&maxResults=36&orderBy=relevance&key=" + APIkey,
            url: "https://www.googleapis.com/books/v1/volumes?q=" + select.select + "&maxResults=36&orderBy=relevance",

            dataType: "json",
            type: 'GET',
            success: forLoop,
            error: function() {
                alert("Please enter informatiion into the search field to find a book");
            },
        });
    }
}
document.getElementById('searchBTN').addEventListener('click', bookSearch, false)

function forLoop(data) {
    for(i = 0; i <= data.items.length; i++) {
        let result = ""
        result += "<div class=bookCard>"
            result += "<div class=row>"
                result += "<a href=" + (data.items[i].volumeInfo.infoLink || '') + "><img class=bookCover src=" + (data.items[i].volumeInfo.imageLinks.smallThumbnail) + "/></a>"
                    result += "<div class=bookDetails>"
                        result += "<h3>" + (data.items[i].volumeInfo.title || 'Title Unavailable') + "</h3>"
                            result += "<h4>Author(s):</h4>"
                                result += "<ul>" 
                                    data.items[i].volumeInfo.authors.forEach(author => {result += "<li>" + (author || 'Author Information Unavailable') + "</li>" })
                                result += "</ul>"
                            result += "<p id=description>" + (data.items[i].volumeInfo.description || 'Description Unavailable') + "</p>"
                    result += "</div>"
            result += "</div>"
            result += "<div class=links>"
                result += "<div>"
                    //result += '<script type=text/javascript src=https://books.google.com/books/previewlib.js></script>'
                    result += '<span id=GBS_Button0><img src=https://books.google.com/intl/en/googlebooks/images/gbs_preview_button1.gif border=0></span>'
                    result += '<script type=text/javascript>GBS_insertPreviewButtonPopup(\'ISBN:' + data.items[i].volumeInfo.industryIdentifiers[0].identifier + '\');</script>'                        
                result += "</div>"
                result += "<div class=linkbtn><a href=" + (data.items[i].volumeInfo.previewLink || alert("Preview Unavailable")) + " target=_blank>Preview</a></div>"
                result += "<div class=linkbtn><a href=" + (data.items[i].volumeInfo.infoLink || alert("Preview Unavailable")) + " target=_blank>More Info</a></div>"
                //result += "<div class=linkbtn><a href=" + (data.items[i].volumeInfo.canonicalVolumeLink || alert("Preview Unavailable")) + " target=_blank>Preview</a></div>"
            result += "</div>"        
        result += "</div>"
    books.innerHTML += result
    }      
}

// function APIkey() {
//     return "AIzaSyDdn6yzTBR15sshvZlumi1L_HVSpX3lvgk"
// }

//result += "<p>" +  + "</p>"