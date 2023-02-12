import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Blogs from '../pages/Blogs';

const config ={
    width: "400px",
    height: "500px", 
  };
  

const theme = {
    background: '#f5f8fb',
    fontFamily: 'poppins',
    headerBgColor: '#09371F',
    headerFontColor: '#FBFBF3',
    headerFontSize: '15px',
    botBubbleColor: '#09371F',
    botFontColor: '#FBFBF3',
    userBubbleColor: '#FBFBF3',
    userFontColor: '#09371F',
  };

class Chat extends Component {
  render() {
    return (
        <div className='p-10 absolute top-0'>
        <ThemeProvider theme={theme}>
        <ChatBot 
        
          steps={[
            {
                id:'q-firstname', 
                message:'Hey There! What is your name?', 
                trigger:'firstname',
              },
              {
                id:'firstname', 
                user:true,
                trigger:'q-question'
              },
              {
                id:'q-question', 
                message:'What would you like to know about?', 
                trigger:'question'
              },
              {
                id:'question', 
                options:[
                {value:'about', label:'About us', trigger:'about'},
                {value:'blog', label:'Would like reading blogs', trigger:'blogs'},
                ] 
              },
              {
                      id: 'about',
                      message:'Medicare is a healthcare brand. For Anyone, Anywhere, at Anytime.', 
                      end: true,
                   },
                        {
                      id: 'blogs',
                      component: <Blogs />,
                      
                      end: true,
                   },
          ]}
          {...config}
          />
        </ThemeProvider>
        </div>
    );
  }
       
}

export default Chat;