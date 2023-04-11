import React, { useState } from 'react';
import './SignUp.css';
import ImgTag from '../../components/ImgTag';
import AnchorTag from '../../components/AnchorTag';
import InputField from '../../components/InputField';
import Button from '../../components/Button';

import Footer from '../../components/Footer/Footer';
import AppStoreIcons from '../../components/Common/AppStoreIcons/AppStoreIcons';
import LoginSignupOption from '../../components/Common/LoginSignupOption';
import HorizontalLine from '../../components/Common/HorizontalLine';
import { register } from '../../api/authApi';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
	const navigate = useNavigate();

	const initialState = {
		email: '',
		name: '',
		userName: '',
		password: '',
	};

	const [signUpData, setSignUpData] = useState(initialState);
	const [warning, setWarning] = useState('');
	const [disable, setDisable] = useState(true);

	const [error, setError] = useState(initialState);
	const [signUpWearning, setSignUpWearning] = useState("")

	//password input
	const [showPassword, setShowPassword] = useState(false);

	//check email validation
	const checkEmail = function (v) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
	};

	//check phone validation
	const ph = (v) => {
		return v.length === 10 && /^\+?[1-9][0-9]{7,14}$/.test(v);
	};

	//check password
	const password = (v) => {
		return /^[a-zA-Z0-9!@#$%^&*]{6,10}$/.test(v);
	};

	//check userName
	const checkUerName = (v) => {
		return v.length > 9 && /([A-Za-z._])\w+/.test(v);
	};

	// set error
	//check email and phone number
	const checkPhEmailValidation = (key) => {
		const inputValue = signUpData[key];
		const isture = checkEmail(inputValue) || ph(inputValue);

		if (isture) {
			setError({ ...error, [key]: 'success' });
		} else {
			setError({ ...error, [key]: 'error' });
		}
	};
	console.log('#m showPassword: ', showPassword);
	//check simple input
	const checkValidation = (key) => {
		const inputValue = signUpData[key];
		console.log('eee->', inputValue);
		if (inputValue.length <= 0) {
			setError({ ...error, [key]: 'error' });
		} else {
			setError({ ...error, [key]: 'success' });
		}
	};

	//check userName
	const checkUserName = (key) => {
		const inputValue = signUpData[key];
		const isture = checkUerName(inputValue);
		if (signUpData?.name !== inputValue && isture) {
			setError({ ...error, [key]: 'success' });
		} else {
			setError({ ...error, [key]: 'error' });
		}
	};

	//check password
	const checkPasswordValidation = (key) => {
		const inputValue = signUpData[key];
		const isture = password(inputValue);
		if (isture) {
			setError({ ...error, [key]: 'success' });
		} else {
			setError({ ...error, [key]: 'error' });
		}
	};

	const handleChange = (e) => {
		setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
		signUpData.password.length >= 5 ? setDisable(false) : setDisable(true);
		// console.log(checkEmail(e.target.value), ph(e.target.value));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (error?.userName === "error") {
			setSignUpWearning("This username isn't available. Please try another.")
		} else if (error?.email === "error") {
			setSignUpWearning("Enter a valid email address.")
		} else {
			register(signUpData, navigate, setWarning);
		}
	};

	const refreshUserName = () => {
		console.log('#m refresh username from api: ');
	}
	return (
		<div className="panel">
			<div className="signUpContainer">
				<div className="signUpPanel">
					<div className="icon">
						<ImgTag src={'/images/binstalogo.png'} width={200} />
					</div>
					<form className="signUpForm" onSubmit={handleSubmit}>
						<h2 className="signUpHeading">
							Sign up to see photos and videos from your friends.
						</h2>
						<Button
							className={'facebookLoginBtn'}
							fontIcon={
								<ImgTag
									src={'/images/whitefacebookIcon.png'}
									width={'16px'}
								/>
							}
							text={` Log in with Facebook `}
						/>

						<HorizontalLine />

						<InputField
							type={'text'}
							placeholder={'Mobile number or email'}
							onchange={handleChange}
							name={'email'}
							value={signUpData.email}
							showBtn
							innerInputContent={
								<RenderInnerInputContent
									fkey="email"
									error={error}
								/>
							}
							handleBlur={checkPhEmailValidation}
						/>
						<InputField
							type={'text'}
							placeholder={'Full Name'}
							onchange={handleChange}
							name={'name'}
							showBtn
							value={signUpData.name}
							innerInputContent={
								<RenderInnerInputContent
									fkey="name"
									error={error}
								/>
							}
							handleBlur={checkValidation}
						/>
						<InputField
							type={'text'}
							placeholder={'Username'}
							onchange={handleChange}
							name={'userName'}
							showBtn
							value={signUpData.userName}
							innerInputContent={
								<RenderInnerInputContent
									fkey="userName"
									error={error}
									refresh={signUpData?.name.length > 0}
									handleClick={refreshUserName}
								/>
							}
							handleBlur={checkUserName}
						/>
						<InputField
							type={showPassword ? 'text' : 'password'}
							placeholder={'Password'}
							onchange={handleChange}
							name={'password'}
							showBtn={signUpData.password.length > 0}
							value={signUpData.password}
							innerInputContent={
								<RenderInnerInputContent
									fkey="password"
									error={error}
									showPassword={showPassword}
									handleClick={() => setShowPassword(!showPassword)}
								/>
							}
							handleBlur={checkPasswordValidation}
						/>
						<span>{warning}</span>
						<div className="signUpDescription">
							<p>
								People who use our service may have uploaded
								your contact information to Instagram.{' '}
								<AnchorTag href={'*'} text={' Learn More'} />
							</p>
							<p>
								By signing up, you agree to our
								<AnchorTag
									href={'*'}
									text={'Terms , Privacy Policy'}
								/>
								and
								<AnchorTag
									href={'*'}
									text={'Cookies Policy.'}
								/>
							</p>
						</div>

						<Button
							className={'sginUpBtn'}
							text={'Sign up'}
							disabled={disable}
						/>
					</form>

					{
						signUpWearning
					}
				</div>
				<LoginSignupOption
					label={'Have an account?'}
					linkText="Log In"
					linkUrl="/accounts/login"
				/>
				<AppStoreIcons />
			</div>

			<Footer />
		</div>
	);
};

export default SignUp;

function RenderInnerInputContent({ fkey, error, handleClick, showPassword, refresh }) {

	if (refresh && fkey === 'userName') {
		return (<>
			<ImgTag src={error[fkey] === 'success' ? '/images/inputTrue.png' : '/images/x-mark-1.png'} alt="icon" width={20} />
			<ImgTag
				src={'/images/refreshing-1.png'}
				alt="icon"
				width={20}
				handleClick={handleClick}
			/>
		</>)
	}

	if (fkey === 'password') {
		return (
			<>
				<ImgTag src={error[fkey] === 'success' ? '/images/inputTrue.png' : '/images/x-mark-1.png'} alt="icon" width={20} />
				<Button
					text={showPassword ? 'hide' : 'show'}
					onclick={handleClick}
					className={"hideShowPassword"}
				/>
			</>
		)
	}

	if (error[fkey] === 'success') {
		return <ImgTag src={'/images/inputTrue.png'} alt="icon" width={20} />;
	}

	if (error[fkey] === 'error') {
		return <ImgTag src={'/images/x-mark-1.png'} alt="icon" width={20} />;
	}

	return null;
}
