import { useState } from "react"

const Login = () => {

  const [data,setData] = useState({
    username:'',
 
    password:''
  })

  const handleSubmit = (e)=>{
    e.preventDefault()

  }


  return (
    <div>
      Login


      <input type="text" placeholder="username" value={data.username} onChange={(e)=> setData({...data, username:e.target.value})} />
      
      <input type="password" placeholder="password" value={data.username} onChange={(e)=> setData({...data, password:e.target.value})} />
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login
