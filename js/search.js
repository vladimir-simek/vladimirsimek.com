let q = document.getElementById("searchText").value;
document.getElementById('searchButton').onclick = function() {
    window.open('http://google.com/search?q='+q);
    console.log("sadsa")
};