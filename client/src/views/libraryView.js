var libraryView = function(books){
  this.render(books)
};

libraryView.prototype = {
  render: function(books) {
  books.forEach(function(book){
    var ul = document.getElementById('books')
    var li = document.createElement('li');
    var details = document.createElement('p');
      details.innerText = book.title + " by " + book.author;
      li.appendChild(details);
      ul.appendChild(li);
    })
  }
};

module.exports = libraryView;
