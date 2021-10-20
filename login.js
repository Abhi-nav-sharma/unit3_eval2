window.addEventListener('load',function(){
    const btn= document.getElementById('login')
    btn.addEventListener('click',handleLogin)
})
const handleLogin= ()=>{
    const email= document.getElementById('email').value
    document.getElementById('email').value=''
    const password= document.getElementById('password').value
    document.getElementById('password').value=''
    const payLoad= {
        email,
        password
    }
    console.log(payLoad)
}

const loginUser=(email,password)=>{
    return fetch('https://reqres.in/api/login',{

    })
}