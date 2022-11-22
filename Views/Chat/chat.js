const token = localStorage.getItem('Usertoken');
const messageInput=document.getElementById('message')
const logoutt=document.getElementById('logout')


logoutt.addEventListener('click', logout)
function logout(){
window.location.href='../login.html'
localStorage.removeItem('Usertoken')

}


document.getElementById('chat-form').onsubmit = async function(e){
    e.preventDefault();

    const message = {
        message :messageInput.value
    }
    console.log(message , token);

    try {
        const response = await await axios.post(`http://localhost:3000/message` , message  , {headers:{"Authorization" : token}})
        console.log(response);
        messageInput.value = ""
    } catch (err) {
        console.log(err);
    }

}