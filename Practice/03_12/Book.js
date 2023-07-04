class Book {
  constructor(name, author, year, price) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.price = price;
  }
  setName(newName) {
    this.name = newName;
  }
  setYear(year) {
    this.year = year;
  }
}

export default Book;
