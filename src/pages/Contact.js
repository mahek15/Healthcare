import React, { useState } from 'react'
import { useUserAuth } from '../context/UserAuthContext';

const Contact = () => {
    const [userData,setUserData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const {user} = useUserAuth();
    let name,value ;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value });
    };

    const submitData = async(event) =>{
        event.preventDefault();
        const {name, email, subject, message} = userData;
        if (name && email && subject && message){
        const res = fetch('https://medicare-message-default-rtdb.firebaseio.com/messagesRecords.json',
        {
            method: "POST",
            headers: {
                "content-Type" : "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                subject,
                message,
              }),
        }
    );

    if (res) {
        setUserData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
        alert("Message sent");
      } else {
        alert("Please fill all the details");
      }
    }
    else {
        alert("Please fill all the details");
      }
    }

  return (
    <>
    <div className='bg-light font-poppins '>
        <div className='mx-auto w-4/5 text-center py-32'>
            <p className='text-dark text-5xl uppercase font-bold mb-5'>Contact Us</p>
            <div className='flex mx-auto'>
                <img src='/images/contact.png' alt='contact' className='h-auto w-1/2 bg-cover'/>
            <form className='flex flex-col text-center mx-auto w-full gap-5 ' method='POST'>

                <input placeholder='Your name' 
                type='text' 
                className='focus:outline-none border p-2 focus:border-dark focus:border-2 text-dark font-light' 
                name='name'
                id=''
                value={userData.name}
                onChange={postUserData}/>

                <input placeholder='Your Email' 
                type='fixed' 
                className='focus:outline-none border p-2 focus:border-dark focus:border-2 font-light tracking-wider'
                name='email'
                id=''
                value={user && user.email}
                onChange={postUserData}/>

                <input placeholder='Subject' 
                type='text' 
                className='focus:outline-none border p-2 focus:border-dark focus:border-2 font-light tracking-wider'
                name='subject'
                id=''
                value={userData.subject}
                onChange={postUserData}/>

                <input placeholder='Your Message' 
                type='text' 
                className='focus:outline-none border pt-2 px-2 pb-20 focus:border-dark focus:border-2 font-light tracking-wider'
                name='message'
                id=''
                value={userData.message}
                onChange={postUserData}/>

                <button className='py-3 px-5 bg-neon w-auto text-xl text-dark rounded mx-auto' onClick={submitData}> SEND MESSAGE</button>
            </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact