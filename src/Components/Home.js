import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'

function Home() {
    const credentials = {
        uname : 'admin', pwd: 'admin'
    }
    const [logindetails, setLogindetails] = useState({
        username:'', password:''
    })
    const navigate = useNavigate()

    const SubmitEvent = (e) => {
        e.preventDefault()

        if (!logindetails.username || !logindetails.password) {
            alert('Please fill in both username and password.');
            return;
          }

        if (logindetails.username === credentials.uname && logindetails.password === credentials.pwd){
            console.log('login successfull')
            navigate('/DashBoard')
        }
        else{
            alert('Invalid username or password.');
        }
    }
  return (
    <div className='container d-flex justify-content-center align-items-center'>
        <div className='row p-5'>
            <div className='col-12 bg-lights '>
                <div className='p-3'>
                    <form onSubmit={SubmitEvent}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className='text-light fonts'>Username</label>
                            <input type="text" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            name='username'
                            aria-describedby="emailHelp" 
                            placeholder="Enter email"
                            onChange={(e) => setLogindetails({...logindetails, [e.target.name]:e.target.value})}
                            />
                            <small id="emailHelp" 
                            className="form-text text-light text-muted t-font ">
                                We'll never share your email with anyone else.
                            </small>
                        </div>
                        <div className="form-group ">
                            <label htmlFor="exampleInputPassword1"
                            className='text-light fonts'>Password</label>
                            <input type="password" 
                            className="form-control " 
                            id="exampleInputPassword1" 
                            name='password'
                            placeholder="Password"
                            onChange={(e) => setLogindetails({...logindetails, [e.target.name]:e.target.value})}
                            />
                        </div>
                        <button type="submit" className="btn mt-3 btn-primary"
                        >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Home
