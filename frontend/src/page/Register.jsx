import { useState } from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
const Register = () => {

 const navigate = useNavigate()
  
  const [data,setData] = useState({
    username:'',
    email:'',
    password:''
  })

  const handleRegister = async(e)=>{
    e.preventDefault()


    const {username,email,password} = data

    try {
      const {data} = await axios.post("http://localhost:9898/auth/register",{
        username,password,email
      })
      if(data.error){
        console.log(data.error)
      }else{
        setData({})
        navigate("/login")
        console.log("User created")
      }
      
    } catch (error) {
      console.log(error)
      
    }


  }


  return (
    <div>
      Register
      <div>
      


      <input type="text" placeholder="username" value={data.username} onChange={(e)=> setData({...data, username:e.target.value})} />
      <input type="email" placeholder="email" value={data.email} onChange={(e)=> setData({...data, email:e.target.value})} />
      <input type="password" placeholder="password" value={data.password} onChange={(e)=> setData({...data, password:e.target.value})} />
      <button onClick={handleRegister}>Register</button>
    </div>
    </div>
  )
}

export default Register
