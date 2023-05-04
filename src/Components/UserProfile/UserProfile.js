import React, { useEffect, useState } from 'react'
import { getUser } from '../../apiRequests/userApi';
import AnchorTag from '../AnchorTag';
import Button from '../Button';
import Footer from '../Footer/Footer';
import ImgTag from '../ImgTag';
import "./UserProfile.css"



const UserProfile = () => {
  const images = [
        {
            src: "../images/inputIcons/wedding.jpeg"
        }, {
            src: "../images/inputIcons/wedding.jpeg"
        }, {
            src: "../images/inputIcons/wedding.jpeg"
        }, {
            src: "../images/inputIcons/wedding.jpeg"
        }, {
            src: "../images/inputIcons/wedding.jpeg"
        },
    ]
    const [currentUser, setCurrentUser] = useState(null);


    const getUserData = async (token) => {
        await getUser(token)
            .then((response) => {
                setCurrentUser(response.data.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        const token = localStorage.getItem("token")
        const user=JSON.parse(localStorage.getItem("userCedentials"))
        getUserData(token);


    }, []);
    console.log("user->", currentUser);

    return (
        <div className='userProfilePage'>

            <div className='userContainer'>
                <header className='userProfileHeader'>
                    <div className='userAvtar'>
                        <div className='addProfileImg' >
                            <Button text={
                                <ImgTag src={"../images/birthDayCake.png"} width={150} />

                            } />
                        </div>
                    </div>
                    <section className='userDetailSection'>
                        <div className='userProfileUserName'>
                            <span>{currentUser?.userName}  </span>
                            <Button text={"Edit Profile"} className="editProfileBtn" />
                            <Button text={
                                < ImgTag src={"../images/refreshing-1.png"} width={20} />
                            }
                                className={"editProfileBtn"}

                            />
                        </div>
                        <div className='userContentList'>
                            <span>{"1 posts"}  </span>
                            <Button text={"3 followers"} />
                            <Button text={"4 following"} />
                        </div>
                        <div className='userprofileName'>
                            <span>{currentUser?.firstName} </span>
                        </div>

                    </section>

                </header>
                <div className='userProfileNavBar'>
                    <AnchorTag href={"*"} text={
                        <div >
                            <ImgTag src={"../images/inputIcons/saveBlackIcon3.png"} width={10} />
                            <span> posts  </span>
                        </div>

                    } />
                    <AnchorTag href={"*"} text={

                        <div >
                            <ImgTag src={"../images/inputIcons/saveBlackIcon3.png"} width={10} />
                            <span> saved  </span>
                        </div>
                    } />
                    <AnchorTag href={"*"} text={

                        <div >
                            <ImgTag src={"../images/inputIcons/saveBlackIcon3.png"} width={10} />
                            <span> tagged  </span>
                        </div>
                    } />
                </div>


                <div className='contentOfUserProfile'>
                    {
                        images.map((img, ind) => {
                            return (
                                <div className='showImg' key={ind}>
                                    <ImgTag src={img.src} />
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <div className='userProfilePageFooter'>

                <Footer />
            </div>
        </div>
    )
}

export default UserProfile