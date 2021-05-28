import React from 'react';
import upload_icon from './images/upload_icon.png';
import './regformstyle.css';
import code_logo from './images/code_logo.png';

const Formreg=()=>{
    return (
        <div className="form-complete">
            <div className="header">
                <div className="logo">
                    <img src={code_logo}></img>
                </div>
                <div className="heading-reg">
                    Registration Form
                </div>
            </div>

            <span className="empty"></span>
            <form className="register-form">
                <div className="form-input">
                    <label htmlFor="first-name" className="form-label">
                        First Name:                       
                    </label>
                    <div className="input-box">
                    <input type="text" placeholder="Enter Your First Name" className="form-input" required /> 
                    </div>
                </div>
                <div className="form-input">
                    <label htmlFor="last-name" className="form-label">
                        Last Name:                       
                    </label>
                    <div className="input-box">
                    <input type="text" placeholder="Enter Your Last Name" className="form-input" required/> 
                    </div>
               </div>
                <div className="form-input">
                    <label htmlFor="email" className="form-label">
                        Email Address:                       
                    </label>
                    <div className="input-box">
                    <input type="email" placeholder="Enter Your Email Address" className="form-input" required/> 
                    </div>
                </div>
                <div className="form-input">
                    <label htmlFor="contact" className="form-label">
                        Contact Number:                       
                    </label>
                    <div className="input-box">
                    <input type="tel" placeholder="Enter Your Contact Number" className="form-input" required/> 
                    </div>
                </div>
                <div className="form-input">
                    <label htmlFor="dob" className="form-label">
                        Date Of Birth:                       
                    </label>
                    <div className="input-box">
                    <input type="date" id="birthday" name="birthday" placeholder="Please Enter Your Date of Birth" max="2021-01-01" min="1979-12-31" required/> 
                    </div>
                </div>
                <div className="form-input">
                    <label htmlFor="current-year" className="form-label">
                        Current Year:                       
                    </label>
                    <div className="input-box">
                    <input type="Number" placeholder="Enter Your Current Year" className="form-input" min="1" max="8" required /> 
                    </div>
                </div>
                <div className="form-input">
                    <label htmlFor="cgpa" className="form-label">
                        Current CGPA:                       
                    </label>
                    <div className="input-box">
                        <input type="Number" placeholder="Enter Your Current Year" className="form-input" min="0" max="10" step="0.01" required /> 
                    </div>
                </div>
                <div className="form-input">
                    <label htmlFor="address" className="form-label">
                        Address:                       
                    </label>
                    <br />
                    <div className="input-box">
                        <textarea cols="100%" rows="20%" placeholder="Enter Your Address" className="form-input" required /> 
                    </div>
                    
                </div>
                
                <div className="emptydiv">   
                    <span className="empty"></span>
                </div>

                <div className="form-input">
                    <label htmlFor="gender" className="form-label">
                        Gender:                       
                    </label>
                        <input type="radio" id="male" name="gender" value="male" checked/>
                        <label for="male">Male</label>
                        <input type="radio" id="female" name="gender" value="female"/>
                        <label for="female">Female</label>
                        <input type="radio" id="other" name="gender" value="other"/>
                        <label for="other">Other</label>
                </div>
                <div className="form-input">
                    <label htmlFor="document" className="form-label">
                        <img src={upload_icon} width="25%" alt="File Upload Icon"/>                       
                    </label>

                    <div className="document">
                        <div className="form-input">
                            <label htmlFor="resume/cv" className="form-label">
                                Resume:                       
                            </label>
                            <input type="file" id="resume" name="resume" required/> 
                        </div>
                        <div className="form-input">
                            <label htmlFor="resume/cv" className="form-label">
                            CV:                       
                            </label>
                            <input type="file" id="cv" name="cv"/> 
                        </div>  
                    </div>
                </div>                
                <br></br>
                <br></br>

                <div className="emptydiv">   
                    <span className="empty"></span>
                </div>

                <div className="submit">
                    <button type="submit">
                        Submit
                    </button>
                </div>
                
            </form>

            <div className="footer">
                <div className="footer-heading">
                    Copyright @CODE-Club-Of-Developers
                </div>
            </div>
        </div>
    );
}

export default Formreg;