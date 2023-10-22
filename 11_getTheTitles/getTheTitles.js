const getTheTitles = function(books) {
    const titles = [];
    // for(book of books){
    //     titles.push(book.title);
    // }
    // return titles;

    // the given solution used the array.map() built in function
    // along with the object reference

    return books.map((book) => book.title);
};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
]

  getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
