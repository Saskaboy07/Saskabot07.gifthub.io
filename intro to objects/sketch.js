// intro to objects
// jordam
// 10/10/2024

let myBook;
let myBook2;
function setup() {
  createCanvas(windowWidth, windowHeight);
  myBook = new Book("CS40 Text", "Jordan The 3rd", 1234567891011, "leatherbound", 515, width*0.3);
  myBook2 = new Book("")               
}

function draw() {
  background(220);
  myBook.display();
  myBook2.display();


}



class Book{
 //1.constructor
  constructor(title, author, isbn, cover, pages, x){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
  this.cover = cover;
  this.pages = pages;
  this.x = x;
  }
  //2, class methods
  display(){
    //render our book on the screen
    rectMode(CENTER);  textAlign(CENTER,CENTER);
    textSize(20);
    switch(this.cover){
      case "softcover":
      fill(250,200,150);   break;
      case "hardcover":
      fill(220,255,255);  break;
      case "leatherbound":
      fill(150,100,15); break;
    }
    rect(this.x, height/2, this.pages/10, 150, )
      fill(0);
      text(this.title[0], this.x, height/2 - 50);
    


  }
  
  printOut(){
    //print out our data in a nice format
    print(this.title + ", by " + this.title);
    print("length: " + this.pageCount);
    print("ISBN: " + this.isbn)
  }
}
