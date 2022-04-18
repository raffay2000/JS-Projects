console.log('hello');

let name = document.getElementById('name')
let email = document.getElementById('email')
let phone = document.getElementById('phone')

let validname = false
let validemail = false
let validphone= false


name.addEventListener('blur',()=>{
    let reg=/^[a-zA-Z]([a-zA-Z0-9]){2,14}$/;
    let str = name.value;
    if (reg.test(str)) {
        console.log('it\'s a match');
        
        name.classList.remove('is-invalid')
        validname = true
        
    }
    else{
        name.classList.add('is-invalid')
        validname = false
    }

})
email.addEventListener('blur',()=>{
    let reg=/^([_\-\.a-zA-Z0-9]+)@([_\-\.0-9a-zA-Z]+)\.(([a-z]){0,6})$/;
    let str = email.value;
    if (reg.test(str)) {
        console.log('it\'s a match');
        
        email.classList.remove('is-invalid')
        validemail=true
        
    }
    else{
        email.classList.add('is-invalid')
        validemail=false
    }

})
phone.addEventListener('blur',()=>{
    let reg=/^[+920]([0-9]){10,12}$/;
    let str = phone.value;
    if (reg.test(str)) {
        console.log('it\'s a match');
        
        phone.classList.remove('is-invalid')
        validphone=true
        
    }
    else{
        phone.classList.add('is-invalid')
        validphone=false
    }

})

let submit = document.getElementById('submit')
submit.addEventListener('click',((e)=>{
    e.preventDefault()
    console.log(validemail, validname, validphone);
    if (validname && validemail && validphone) {
        let success = document.getElementById('success');
        success.classList.add('show') 
        $('#failure').hide();
        $('#success').show();
          
    }
    else{
        let failure = document.getElementById('failure');
        failure.classList.add('show')
        $('#failure').show();
        $('#success').hide();

    }
}))
