const getTheTitles = function(books) {
    //console.log(typeof(books));
    //console.log(Object.values(books)); 
    const titles = [];
    for(book of books){
        //console.log(book.titles);
        titles.push(book.title);
    }
    console.log(titles);
    return titles;
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
