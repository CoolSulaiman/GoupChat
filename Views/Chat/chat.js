const token = localStorage.getItem('Usertoken');
const messageInput=document.getElementById('message')
const logoutt=document.getElementById('logout')



const chatContainer = document.querySelector('.chat-container-div'); 
const name = localStorage.getItem('name')


window.addEventListener('DOMContentLoaded', loadScreen)

async function loadScreen(e){
    e.preventDefault();
    console.log(`${new Date().getHours()}:${new Date().getMinutes()}`)
    try {
        const response =  await axios.get(`http://localhost:3000/getMessage`  , {headers:{"Authorization" : token}})
        console.log(response.data)
        showChatsOnScreen(response.data , response.data.userName);

    } catch (err) {
        console.log(err);
    }     
}

function showChatsOnScreen(data , name){

    localStorage.setItem('name' , name)
    data.data.forEach(chat =>{
        showChats(chat , name)
    } )
}

function showChats(chat , name){
    let child = `<div class="msg-div">
    <div class="resize-sent">
      <div class="sent">
        <p class="sent-name">${name.split(' ')[0]}</p>
        <p class="sent-msg">${chat.message}</p>
        <p class="sent-time">${chat.createdAt.split('T')[1].slice(0,5)}</p>
      </div>
    </div>
  </div>`

  chatContainer.innerHTML += child

}














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
        const response = await await axios.post(`http://localhost:3000/PostMessage` , message  , {headers:{"Authorization" : token}})
        console.log(response);
        messageInput.value = ""
        showOnScreen( message )
    } catch (err) {
        console.log(err);
    }

}

function showOnScreen(chat){

    const name = localStorage.getItem('name')

    let child = `<div class="msg-div">
    <div class="resize-sent">
      <div class="sent">
      <p class="sent-name">${name.split(' ')[0]}</p>
        <p class="sent-msg">${chat.message}</p>
        <p class="sent-time">${new Date().getHours()}:${new Date().getMinutes()}</p>
      </div>
    </div>
  </div>`

  chatContainer.innerHTML += child
}