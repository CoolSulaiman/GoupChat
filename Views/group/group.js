const groupList = document.getElementById('group') 
const form = document.getElementById('group-form')
const groupCreate = document.getElementById('groupCreate')
const groupInput=document.getElementById('groupInput')

let token = localStorage.getItem('Usertoken')
let username = localStorage.getItem('name')
let groupId = localStorage.getItem('groupId')

localStorage.removeItem(`msg${groupId}`)

window.addEventListener("DOMContentLoaded" , (e)=>{
    loadScreen(e);
})

async function loadScreen(e){
    e.preventDefault();

    document.getElementById('welcomename').innerHTML = `${username.split(' ')[0]}`
    console.log("mmmmmmmmmmmmmmmmmmm")
    try {
        let response = await axios.get('http://localhost:3000/group/getgroups' , {headers:{'Authorization':token}});

        console.log(response.data.data)
        showOnScreen(response.data.data)
    } catch (err) {
        console.log(err);
    }
}

function showOnScreen(data){
    groupList.innerHTML = '';

    data.forEach(element => {
        const child = `<div class="group-name" id="group-name-btn" onClick="openGroup('${element.id}','${element.name}')">${element.name}</div>`

        groupList.innerHTML += child
    });

}

function openGroup(groupId,groupname){
    console.log(groupId)
    console.log(groupname)
    localStorage.setItem('groupId' , groupId)
    localStorage.setItem('groupName' , groupname)
    window.location.href = '../Chat/chat.html'
}

groupCreate.addEventListener('click' , async(e)=>{
    e.preventDefault()
    // console.log(e.target.group.value)
    const group ={
        group:groupInput.value
    }
console.log(group)
    try {
        const response = await axios.post('http://localhost:3000/group/create-group' ,group , {headers:{'Authorization':token}});
        console.log(response,"aa gaiya")
        loadScreen(e)
        // e.target.group.value = ""
    } catch (err) {
        console.log(err);
    }
})

document.getElementById('logout').onclick = function(e){
    e.preventDefault();
    localStorage.removeItem('userToken')
    window.location.href = '../login.html'
}