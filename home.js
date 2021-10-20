window.addEventListener('load',function(){
    const btn= document.getElementById('Btn')
    btn.addEventListener('click',handleSearch)
})
var per_page=10
var current_page=1
const handleSearch= async ()=>{
    const response= await fetchUser()
    showUsers(response)
}

const fetchUser= ()=>{
    const user= document.getElementById('search').value
    return(fetch(`https://api.github.com/search/users?q=${user}&per_page=${per_page}&page=${current_page}`))
    .then(res=>res.json())
}

const showUsers= (response)=>{
    console.log(response)
    const container= document.getElementById('result')
    container.textContent=null
    const total= document.createElement('h3')
    total.textContent= `Total results: ${response.total_count}`
    container.append(total)
    const div= document.createElement('div')
    for(let item of response.items){
        console.log(item)
        container.append(createUserCard(item))
    }
    const prev= document.createElement('button')
    prev.textContent='Previous'
    if(current_page===1){
        prev.disabled= true
    }
    prev.addEventListener('click',handlePrev)
    const current= document.createElement('button')
    current.textContent= current_page
    const next= document.createElement('button') 
    next.textContent='Next'
    container.append(prev,current,next)
    next.addEventListener('click',handleNext)
}

function handlePrev(e){
    const btn= e.target
    current_page--
    handleSearch()
}

function handleNext(e){
    const btn= e.target
    current_page++
    handleSearch()
}

function createUserCard(item){
    const div= document.createElement('div')
    const login= document.createElement('h4')
    login.textContent=`Login id: ${item.login}`
    const id= document.createElement('p')
    id.textContent= `ID: ${item.id}`
    const img= document.createElement('img')
    img.src= item.avatar_url
    img.style.width='200px'
    img.style.height='200px'
    const url= document.createElement('p')
    url.textContent= `User url: ${item.url}`
    const repo_url= document.createElement('p')
    repo_url.textContent= `Repos url: ${item.repos_url}`
    const followers_url= document.createElement('p')
    followers_url.textContent= `Followers url: ${item.followers_url}`
    const following_url= document.createElement('p')
    following_url.textContent= `Following url: ${item.following_url}`
    div.append(login,id,img,url,repo_url,followers_url,following_url)
    div.style.border= '1px solid black'
    div.style.margin='20px'
    return div
}

