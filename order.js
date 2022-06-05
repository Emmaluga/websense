
const form = document.getElementById('form')
const  fullName = document.getElementById('fullname')
const email = document.getElementById('email')
const phoneNumber  = document.getElementById('phonenumber')
const error = document.getElementsByClassName('error')

form.addEventListener('submit',(e)=>{

     e.preventDefault()

     engine(fullName, 0, 'fullname cannot be blank')
     engine( email, 1, 'fullname cannot be blank')
     engine( phoneNumber, 2, ' phone number cannot be blank')
})

let engine = (id, serial, message)=>{

    if(id.value.trim()=== ''){

        error[serial].innerHTML = message
        id.style.border = '2px solid red'

    }
    else{

        error[serial].innerHTML = message
        id.style.border = '2px solid green'
    }
}













