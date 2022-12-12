import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import swal from 'sweetalert';
import "./Contect.css"
import { MdCall,MdEmail} from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
const Contact = () => {
  const form = useRef("");
  

  const sendEmail = () => {
    // e.preventDefault();

    emailjs.sendForm('service_crgglng', 'template_v4y022r', form.current, 'aEP91ywS0Ru2HB4eE')
      .then((result) => {
        swal({
          title: "Success",
          text: "Your massage has been sent!",
          icon: "success",
          button: "Ok!",
        });
       
          
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-main" id="contact" >
      <div className="contact-heading">
      <h1 style={{textAlign:"center",fontFamily: "Poppins Bold"}}>Contact <span style={{color:"#e74d06",fontFamily: "Poppins Bold"}}>Me</span></h1>
      <p style={{textAlign:"center",fontSize:"16px",fontFamily: "Poppins SemiBold"}}>Get In touch</p>
            
      </div>
      <div className="contact-details" >
      <div className="contact-link">
        <div >
        <h4 className="link"><MdCall className="span"/>+91 70884017971</h4>
        </div>
        <div >
          <h4 className="link"><MdEmail className="span"/>moashiq2018@gmail.com</h4>
        </div>
        <div >
          <h4 className="link"><HiLocationMarker className="span"/>Fatehpur, Uttar Pradesh-212601</h4>
        </div>
      </div>
      <div className="msg">
      <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
      
      <input type="text" name="user_name" placeholder="Name" />
    
      <input type="email" name="user_email" placeholder="Email" />
      
      <textarea name="message" placeholder="Massage"/>
      <input type="submit" value="Send" />
    </form>
   
    </StyledContactForm>
      </div>
      </div>
    </div>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 100%;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    gap:20px;
    font-size: 16px;
    input {
      width: 100%;
      height: 40px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 150px;
      min-height: 150px;
      padding: 7px;
      
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
   
    input[type="submit"] {
     
      cursor: pointer;
      background: #e74d06;
      color: white;
      border: none;
    }
  }
`;