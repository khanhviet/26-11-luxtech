import React from 'react'
import './_login.scss'
import { useForm } from 'react-hook-form'
import image from "assets/download.png"
export default function Login() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {

    }
    return (
        <div className="container-login">
            <div className="image-login"> <img src={image} alt="" /></div>
            <div className="inner-login">
                <h1 className="title">Login</h1>
                <h3> Access to our dashboard</h3>
                <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="email" className='f-l'>Email Address</label>
                    <input type="email" id="email" name="email" ref={register({
                        required: true
                    })} />
                    {errors.name && errors.name.type === "required" && <span>This is required</span>}
                    <br />
                    <br />
                    <label className='f-l' htmlFor="password">Password</label>
                    <a href="/" className='f-r' >forgot password</a>
                    <input type="password" id="password" name="password" />
                    <br />
                    <br />
                    <input type="submit" value="Login"></input>
                </form>
            </div>
        </div>
    )
}
