const myLibrary=[];
function Book(name,pages,author,readStatus){
    this.id=crypto.randomUUID();
    this.name=name;
    this.pages=pages;
    this.author=author;
    this.readStatus=readStatus;
}
function addBookToLibrary(name,pages,author,readStatus){
    entry=new Book(name,pages,author,readStatus);
    myLibrary.push(entry);
}

function showBooks(){
    display=document.getElementById("display-section");
    myLibrary.forEach(entry=>{
        container=document.createElement("div");
        container.classList.add("book-container");
        for (prop in entry){
            if(this.prop!="id"&&this.prop!="toggleReadStatus"){
            container.innerHTML+=`${this.prop}:${entry[prop]}`+'<br>';
            }
        }
        display.appendChild(container);
    })
}
Book.prototype.toggleReadStatus=function(){
    this.readStatus=!(this.readStatus)
}
addBookToLibrary("lotr","100","tolkien","true");
addBookToLibrary("wow","100","grrm","true");
showBooks();
