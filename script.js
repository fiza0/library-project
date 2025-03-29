const myLibrary=[];
function Book(name,pages,author,readStatus){
    this.id=crypto.randomUUID();
    this.name=name;
    this.pages=pages;
    this.author=author;
    this.readStatus=readStatus;
}
function addBookToLibrary(name,pages,author,readStatus){
    
}