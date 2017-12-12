use library;

db.dropDatabase();

db.books.insert({
  author: "J.R.R. Tolkein",
  title: "The Hobbit"
});

db.books.insert({
  author: "Neal Stephenson",
  title: "Snow Crash"
});

db.books.insert({
  author: "Terry Pratchett",
  title:  "Night Watch"
});

db.books.insert({
  author: "William Gibson",
  title: "Neuromancer"
});

db.books.insert({
  author: "Warren Ellis",
  title: "Gun Machine"
});

db.books.insert({
  author: "William Browning Spencer",
  title: "Resume with Monsters"
});

db.books.find();
