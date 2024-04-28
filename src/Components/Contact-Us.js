import React,{useState,useEffect} from 'react'
import './Contact-Us.css'

const Contact_Us = () => {
    const [values,setValues] = useState({
        username:'',
        email:'',
        message:'',
        resume:''
    })
    
    
    const submitHandler = (e) =>{
        e.preventDefault();
        alert("Submited!");
        

    }
    const changeHandler = (e) =>{
        setValues((previousValues) => ({
            ...previousValues, [e.target.name]:e.target.value,
        }));
    }

    const clearHandler = (e) =>{
        setValues({
            username:'',
            email:'',
            message:'',
            resume:''
        })
    }

    useEffect(() => {
        localStorage.setItem('form', JSON.stringify(values));
    },[values])
  return (
    <div className='contact_form'>
        
        <h1><div className='line'></div>Contact Us<hr/></h1>
        
        <form onSubmit={submitHandler}>
        <div className="user-name">
            <p>User Name</p>
            <div className='input-styling'>
                <input type="text" name="username" id='username' value={values.name} onChange={changeHandler}required />
                <div className='name'>User Name</div>
            </div>
        </div>
        <div className="email_style">
            <p>Email</p>
            <div className='input-styling'>
                <input type="email" name='email' id='email' value={values.email} onChange={changeHandler} required />
                <div className='name'>Email</div>
            </div>
        </div>
        <div className="message_style">
            <p>Message</p>
            <div className='input-styling'>
                <textarea name="message" id="message" value={values.message} cols="60" rows="2" placeholder='Message' onChange={changeHandler} required></textarea>
            </div>
        </div>

        <div className='cv'>
            <p>Cv/Resume</p>
            <input type="file" name='resume' id='resume' value={values.resume} onChange={changeHandler} required className='file'/>
        </div>
        <div className="submit">
            <button >Submit</button>
            <p className='clear-form' onClick={clearHandler}>Clear form</p>   
        </div>
        </form>
        
        
    </div>
  )
}

export default Contact_Us;