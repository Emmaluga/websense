   
let nav = document.querySelector("nav")
window.addEventListener('scroll', function () {
    if(window.pageYOffset > 100){
         nav.style.background="#000000"
    }
    else{
        nav.style.background="#000000"
    }
})

// form validation


const form = document.getElementById('form')
const fullname = document.getElementById('fullname')
const email = document.getElementById('email')
const textarea = document.getElementById('textarea')
const error = document.getElementsByClassName('error')

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    engine(fullname , 0, 'fullname cannot be blank')
    engine(email , 1, 'email cannot be blank')
    engine(textarea , 2, 'textarea cannot be blank')

})

let engine = (id, serial, message)=>{

    if(id.value.trim()===''){

        error[serial].innerHTML=message
        id.style.border='2px solid red'

    }
    else{

        error[serial].innerHTML=''
        id.style.border='2px solid green'
    }
}



 