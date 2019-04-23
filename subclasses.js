class Book {
  constructor(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

// Magazine Subclass

class Magazine extends Book {
  constructor(title, author, year, month){
    super(title, author, year);
    this.month = month;
  }
}

// Instantiate Magazine
const mag1 = new Magazine('The Atlantic', "John McWharter", "2019", "April");

console.log(mag1.getSummary()); // The Atlantic was written by John McWharter in 2019

