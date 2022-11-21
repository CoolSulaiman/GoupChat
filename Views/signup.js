const form = document.getElementById('click')
const nameInput=document.getElementById('name')
const emailInput=document.getElementById('email')

const phoneInput=document.getElementById('phone')
const passwordInput=document.getElementById('pas')


form.addEventListener('click' , signup)

async function signup(e){
e.preventDefault()
const obj={

name: nameInput.value,
email: emailInput.value,
phone: phoneInput.value,
password: passwordInput.value

}
axios.post("http://localhost:3000/signup",obj)
.then(res=>{
    console.log(res)
})

.catch(err=>{
    console.log(err)
})

}


