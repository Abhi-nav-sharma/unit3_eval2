window.addEventListener('load',function(){
    const btn= document.getElementById('login')
    btn.addEventListener('click',handleLogin)
})
const handleLogin= async ()=>{
    try{
        const email= document.getElementById('email').value
        document.getElementById('email').value=''
        const password= document.getElementById('password').value
        document.getElementById('password').value=''
        const payLoad= {
            email,
            password
        }
        const response= await loginUser(payLoad)
        if(!response.token){
            alert(`${response.error}. Please try again`)
        }
        else{
            window.location.replace("home.html")
        }
    }
    catch(err){
        console.log(err)
    }
}

const loginUser=(payload)=>{
    return fetch('https://reqres.in/api/login',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res=>res.json())
}