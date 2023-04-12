import React from 'react'
import './appstore.css';

import ImgTag from '../../ImgTag';

export default function AppStoreIcons() {
    return (
        <div className="appStoreIcons">
            <div className="getAppHeading">
                <span> Get the app.</span>
            </div>
            <div className="getAppIcons">
                <ImgTag src={'/images/Yfc020c87j0.png'} width={134} />
                <ImgTag src={'/images/c5Rp7Ym-Klz.png'} width={134} />
            </div>
        </div>
    )
}
