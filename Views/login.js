const loginn =document.getElementById('login')
const emailInput=document.getElementById('email')
const passInput=document.getElementById('pas')


loginn.addEventListener('click',login)


async function login(e){
    e.preventDefault()
    const obj={
    email:emailInput.value,
    password:passInput.value

}

try {

const response= await axios.post("http://localhost:3000/login",obj)
    console.log(response)
    if (response.status === 200){
        alert('User login success')
        window.location.href =" Chat/chat.html";

    }else{
        passInput.value='';
        console.log('bye')
    }
} 


catch (err) {
    if(err.response.status == 400){
     alert('Enter all fields')
    }if(err.response.status == 404){
     alert('User not found , Please create an account')
    }if(err.response.status == 401){
     alert('User not authorized')
    }
    else{
     console.log(err)
    }
 }
}

