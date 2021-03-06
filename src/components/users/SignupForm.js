import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

const SignupForm = (props) => {    

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

   const handleSubmit = event => {
            event.preventDefault();
                setUsername("")
                setPassword("")
        props.handleSubmit(username, password)
        props.history.push("/welcome")
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="inner-container">
                <div className="header">
                    <h2>Signup</h2>
                    <h4>Register to challenge the adventures!</h4>
                </div>
                <div className="box">
                    <div className="input-group">
                        <input type="text" name="username" className="login-input" placeholder="Enter Username" 
                            onChange={event => setUsername(event.target.value)}
                            value={username} 
                            required/>
                    </div>

                    <div className="input-group">
                        <input type="password" name="password" className="login-input" placeholder="Enter Password"
                            onChange={event => setPassword(event.target.value)}
                            value={password} 
                            required/>
                    </div>
                    <button type="submit" id="btn">Signup</button>

                </div>
            </div>
        </form>
    )
}

export default withRouter(SignupForm);