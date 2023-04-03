import React, { useState } from 'react'
import './AddBirthDate.css'
import DatePicker from 'react-date-picker'
import Footer from '../components/Footer'

import AnchorTag from '../components/AnchorTag'
import ImgTag from '../components/ImgTag'

import appleAppStore from "../images/Yfc020c87j0.png";
import googleAppStore from "../images/c5Rp7Ym-Klz.png";
import birthDayCake from '../images/birthDayCake.png'
import Button from '../components/Button';


const AddBirthDate = () => {

    const [value, onChange] = useState(new Date())

    return (
        <div className='AddBirthDatePanel'>
            <div className='birthDateContainer'>
                <div className='selectDatePanel'>
                    <div className='cakeIcon'>
                        <ImgTag src={birthDayCake} width={150} />
                        <h4>Add Your Birthday</h4>
                        <p>This won't be a part of your public profile.</p>
                        <AnchorTag href={"*"} text={"Why do I need to provide my birthday?"} />
                    </div>
                    <div className='dateSelection'>
                        <span> You need to enter the date you were born  </span>

                        <p> Use your own birthday, even if this account is for a business, a pet, or something else  </p>
                    </div>
                    <div className='nextBackBtn'>
                        <Button className={'nextBtn'} text={"next"} />
                        <AnchorTag href={"*"} text={"Go Back"} />
                    </div>


                </div>


                <div className="loginOption">
                    Have an account?
                    <AnchorTag href={"/accounts/login"} text={"Log In"} />
                </div>
                <div className="appStoreIcons">
                    <div className="getAppHeading">
                        <span> Get the app.</span>
                    </div>
                    <div className="getAppIcons">
                        <ImgTag src={appleAppStore} width={130} />
                        <ImgTag src={googleAppStore} width={130} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AddBirthDate