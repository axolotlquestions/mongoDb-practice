var libraryView = require('./views/libraryView');

var app = function(){
  var url = 'http://localhost:3000/library';
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function(){
  if(this.status != 200) return;
  var jsonString = this.responseText;
  var books = JSON.parse(jsonString);
	new libraryView(books)
}




window.addEventListener('load', app);
