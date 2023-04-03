import React, { useState } from 'react'
import './AddBirthDate.css'
import DatePicker from 'react-date-picker'
import Footer from '../../components/Footer/Footer'

import AnchorTag from '../../components/AnchorTag'
import ImgTag from '../../components/ImgTag'

import Button from '../../components/Button';
import AppStoreIcons from '../../components/Common/AppStoreIcons/AppStoreIcons'
import LoginSignupOption from '../../components/Common/LoginSignupOption'


const AddBirthDate = () => {

    const [value, onChange] = useState(new Date())

    return (
        <div className='AddBirthDatePanel'>
            <div className='birthDateContainer'>
                <div className='selectDatePanel'>
                    <div className='cakeIcon'>
                        <ImgTag src={'/images/birthDayCake.png'} width={150} />
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
                <LoginSignupOption />
                <AppStoreIcons />
            </div>
            <Footer />
        </div>
    )
}

export default AddBirthDate