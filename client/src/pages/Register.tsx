import { Link } from 'react-router-dom'
import './Login.css'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

interface IRegister {
    name: string;
    email: string;
    password: string;
    cfPw: string;
}

const Register = () => {

    const [showPw, setShowPw] = useState(true);
    const [formData, setFormData] = useState<IRegister>({
        name: "",
        email: "",
        password: "",
        cfPw: "",
    })
    

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    const handleSubmit =  (e: FormEvent) => {
        e.preventDefault();
        try {
            // validate cf password
            if (formData.password !== formData.cfPw) {
                return alert("Password not match")
            }
            // validate empty field
            if (!formData.name || !formData.email || !formData.password || !formData.cfPw) {
                return console.log("Submit Failed!, please fill all field.");
            }

            // success
            console.log("Submit success!");
        } catch (error) {
            throw Error((error instanceof Error) && error.message || 'Error submitting register form');
        }
    }

    useEffect(() => {
        console.log(formData)
    }, [formData])

  return (
    <div>
        <div className="login-container">
            <span>Not implement yet</span>
        <h1>Register</h1>
        <form className="login-form" onSubmit={handleSubmit}>
            <div className='form-group'>
                <input type="text" name="name" id="name" placeholder=''
                    onChange={(e) => handleChange(e)}
                />
                <label htmlFor="name">Name</label>
            </div>
            <div className='form-group'>
                <input type="email" name="email" id="email" placeholder=''
                    onChange={(e) => handleChange(e)}
                />
                <label htmlFor="email">Email</label>
            </div>
            <div className='form-group'>
                <input type={showPw ? "text" : "password"} name="password" id="password" placeholder=''
                    onChange={(e) => handleChange(e)}
                />
                <label htmlFor="password">Password</label>
                <span className='show-pw' onClick={() => setShowPw(!showPw)}>{showPw ? "Hide password" : "Show Password"}</span>
            </div>
            <div className='form-group'>
                <input name="cfPw" type={showPw ? "text" : "password"} id="cfPw" placeholder=''
                    onChange={(e) => handleChange(e)}
                />
                <label htmlFor="cfPw">Confirm Password</label>
            </div>
            <div className='login-help'>
                <span>Forgot password?</span>
                <span>Already have an account? <Link to={'/login'} style={{textDecoration: "none"}}>Login</Link></span>
            </div>
            <button type='submit' className='login-button'>Register</button>
        </form>
    </div>
    </div>
  )
}

export default Register