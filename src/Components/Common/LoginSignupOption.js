import React from 'react'
import AnchorTag from '../AnchorTag'

export default function LoginSignupOption({
    label, linkText, linkUrl
}) {
    return (
        <div className="loginOption">
            {label} {' '}
            <AnchorTag href={linkUrl} text={linkText} />
        </div>
    )
}
