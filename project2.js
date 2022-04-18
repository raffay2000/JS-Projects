class Book{
    constructor(name,author,type) {
        this.name=name
        this.author=author
        this.type=type
    }
}
class Display{
    add(book){
        let tableBody=document.getElementById('tableBody');
        let html= `<tr>
                 <td>${book.name}</td>
                 <td>${book.author}</td>
                 <td>${book.type}</td>
                 </tr>`
                 tableBody.innerHTML+=html;
                 
                 
        
    }
    

}
let libraryForm=document.getElementById('libraryForm');
libraryForm.addEventListener('submit',submitbtn)
function submitbtn(e) {
    let name=document.getElementById('bookName').value
    let author=document.getElementById('author').value
    let type;
    let fiction=document.getElementById('fiction');
    let programming=document.getElementById('programming');
    let cooking=document.getElementById('cooking');
    if (fiction.checked) {
        type=fiction.value
        }
    else if (programming.checked) {
        type=programming.value
        }
    else if (fiction.checked) {
        type=cooking.value
        }
        let names=localStorage.getItem('name')
        let authors=localStorage.getItem('author')
        let types=localStorage.getItem('type')
        if (names==null ||authors==null||typesObj==null) {
            namesObj=[]
            authorsObj=[]
            typesObj=[]
            
        }
        else{
            namesObj=JSON.parse(names)
            authorsObj=JSON.parse(authors)
            typesObj=JSON.parse(types)
        }
        namesObj.push(name)
        authorsObj.push(author)
        typesObj.push(type)
        localStorage.setItem('bookName',JSON.stringify(name))
        localStorage.setItem('author',JSON.stringify(author))
        localStorage.setItem('type',JSON.stringify(type))

    
    let book=new Book(name,author,type)
    let display=new Display();
    display.add(book)

        
    
    e.preventDefault();
    
    
}

































































// console.log('hello')
// class Book {
//     constructor(name, author, type) {
//         this.name = name
//         this.author = author
//         this.type = type
//     }

// }
// class Display {
//     add(book) {
//         let tableBody = document.getElementById('tableBody')
//         let html = `<tr>
//         <td>${book.name}</td>
//         <td>${book.author}</td>
//         <td>${book.type}</td>
//         </tr>`
//         tableBody.innerHTML += html;

//     }
//     clear() {
//         let libraryForm = document.getElementById('libraryForm')
//         libraryForm.reset();
//     }
//     validate(book) {
//         if (book.name.length < 2 || book.author.length < 2) {
//             return false
//         }
//         else {
//             return true;
//         }
//     }

//     show(type, displayMessage) {
//         let message = document.getElementById('message');
//         let boldText;
//         if (type === 'success') {
//             boldText = 'Success';
//         }
//         else {
//             boldText = 'Error!';
//         }
//         message.innerHTML = `<div class="alert alert-${type}                        alert-dismissible fade                              show" role="alert">
//                                 <strong>${boldText}:</strong> ${displayMessage}
//                                 <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//                                 <span aria-hidden="true">×</span>
//                                 </button>
//                                 </div>`
//                                 setTimeout(function () {
//                                     message.innerHTML = ''
//                             }, 5000);                      
//     } 

//     }

// let libraryForm = document.getElementById('libraryForm');
// libraryForm.addEventListener('submit', libraryFormSubmit);

// function libraryFormSubmit(e) {
//     console.log('YOu have submitted library form');
//     let name = document.getElementById('bookName').value;
//     let author = document.getElementById('author').value;
//     let type;
//     let fiction = document.getElementById('fiction');
//     let programming = document.getElementById('programming');
//     let cooking = document.getElementById('cooking');

//     if (fiction.checked) {
//         type = fiction.value;
//     }
//     else if (programming.checked) {
//         type = programming.value;
//     }
//     else if (cooking.checked) {
//         type = cooking.value;
//     }

//     let book = new Book(name, author, type);
//     console.log(book);

//     let display = new Display();

//     if (display.validate(book)) {

//         display.add(book);
//         display.clear();
//         display.show('success', 'Your book has been successfully added')
//     }
//     else {
//         // Show error to the user
//         display.show('danger', 'Sorry you cannot add this book');
//     }

//     e.preventDefault();
// }