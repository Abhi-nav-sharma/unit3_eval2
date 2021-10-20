window.addEventListener('load',function(){
    const btn= document.getElementById('Btn')
    btn.addEventListener('click',handleSearch)
})

var per_page=10
var current_page=1
const handleSearch= async ()=>{
    const user= document.getElementById('search').value
    document.getElementById('search').value=''
    const response= await fetchUser(user)
    console.log(response)
    showUsers(response)
}

const fetchUser= (user)=>{
    return(fetch(`https://api.github.com/search/users?q=${user}&per_page=${per_page}&page=${current_page}`))
    .then(res=>res.json())
}

const showUsers= (response)=>{
    const container= document.getElementById('result')
    const total= document.createElement('h3')
    total.textContent= `Total count: ${response.total_count}`
    container.append(total)
    const div= document.createElement('div')
    for(let item of response.items){
        console.log(item)
        container.append(createUserCard(item))
    }
    
}

function createUserCard(item){
    const div= document.createElement('div')
    const login= document.createElement('h4')
    login.textContent=`Login id: ${item.login}`
    div.append(login)
    return div
}

