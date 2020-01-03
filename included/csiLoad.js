function csiLoad(fileName) {
    // this is intentionally synchronous to make sure the page loads all at once
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", fileName, false); // false for synchronous request
    xmlHttp.send(null);
    document.write(xmlHttp.responseText); 
}
