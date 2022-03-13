import { Auth } from 'aws-amplify';
import { useState, useContext } from 'react';
import { useNavigate, Link} from 'react-router-dom'
import { useEffect } from 'react';

import PopUp from '../components/PopUp';
import {AuthContext} from '../contexts/AuthContext';

async function signUp(email,password) {
    try {
        const { user } = await Auth.signUp({
			username: email,
			password: password,
        });
        console.log('successfully signup');
		return user
    } catch (error) {
        console.log('error signing up:', error);
		throw new Error(error);
    }
}

async function confirmSignUp(email,code) {
    try {
      await Auth.confirmSignUp(email, code);
    } catch (error) {
        console.log('error confirming sign up', error);
		throw new Error(error);
    }
}

const SignUp = ()=>{
	const {user, setUser} = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(()=>{
		if (user !== null){
			navigate("/")	
		}
	})

	const [email,setEmail] = useState("");
	const [password,setPassword] = useState("");
	const [code,setCode] = useState("");
	const [signUpStatus,setSignUpStatus] = useState(-1); // -1: not, 0: processing 1: signup success, 2: signup fail
	const [jumpToConfirm,setJumpToConfirm] = useState(false);
	const [confirmStatus,setConfirmStatus] = useState(-1); // -1: not, 0: processing 1: signup success, 2: signup fail
	const [tempUser,setTempUser] = useState(null)


	const SingUpPopUp = ({status})=>{
		status = status ?? -1
		if (status === -1) return (<></>);
		if (status === 0) return (<PopUp text="Signing up..." bgColor="#57A9FB"/>);
		if (status === 1) return (<PopUp text="Signin up successfully" bgColor="#23C343"/>);
		if (status === 2) return (<PopUp text="Signin up fail" bgColor="#F53F3F"/>);
	}

	const ConfirmPopUp = ({status})=>{
		status = status ?? -1
		if (status === -1) return (<></>);
		if (status === 0) return (<PopUp text="Confirming..." bgColor="#57A9FB"/>);
		if (status === 1) return (<PopUp text="Confirm successfully" bgColor="#23C343"/>);
		if (status === 2) return (<PopUp text="Confirm fail" bgColor="#F53F3F"/>);
	}

	const processSignUp = ()=>{
		setSignUpStatus(0);
		signUp(email,password)
			.then(_user => {
				setSignUpStatus(1)
				setTempUser(_user)
				setTimeout(()=>{
					setJumpToConfirm(true);
				},1000);
			})
			.catch(err=>{
				setSignUpStatus(2);
			})
			.finally(()=>{
			setTimeout(()=>{
					setSignUpStatus(-1);
				},2000);
		})
	}
	const processConfirm = ()=>{
		setConfirmStatus(0);
		confirmSignUp(email,code)
			.then(msg => {
				setConfirmStatus(1);
			setTimeout(()=>{
					setUser(tempUser);
					localStorage.setItem("user",tempUser);
					navigate("/");
				},2500);
			})
			.catch(err=>{
				setConfirmStatus(2);
			})
			.finally(()=>{
			setTimeout(()=>{
					setConfirmStatus(-1);
				},2000);
		})

	}
	return (
		<div className='flex md:flex-row flex-col w-screen h-screen items-center'>
			<SingUpPopUp status={signUpStatus}/> 
			<ConfirmPopUp status={confirmStatus}/> 
			<div className='md:order-1 order-2 h-full flex-shrink-0 flex-grow basis-3/3 md:basis-1/3 bg-orange-300 flex flex-col justify-center' style={{
				clipPath: window.innerWidth > 768 ? "polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%)": ""
				}}>
				<div className="text-white text-2xl h-[80%] w-[80%] flex flex-col justify-around items-center">
					<div className='flex flex-row justify-around items-center'>
						<img src="/rocket.svg" alt="" />
						<h3>Upload family members’voice.</h3>
					</div>
					<div className='flex flex-row justify-around items-center'>
						<img src="/notebook.svg" alt="" />
						<h3>Choose a story from the library.</h3>
					</div>
					<div className='flex flex-row justify-around items-center'>
						<img src="/earth.svg" alt="" />
						<h3>Enjoy the fancy moment! </h3>
					</div>
				</div>
			</div>
			<div className='md:order-2 order-1 h-full flex-shrink-0 flex-grow basis-3/3 md:basis-2/3 flex flex-col items-center justify-center'>
				<div className='w-[80%] h-[80%] flex flex-col justify-around'>
					<h1 className='text-5xl'>Welcome to Little Parrot</h1>
					{
					!jumpToConfirm ? 
						<div>
							<h3 className='text-3xl mb-14 text-gray-400'>SIGN UP</h3>
							<p>Email:</p>
							<input key="email" onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder="Type your email" className='border rounded-lg outline-gray-400 px-2 py-1 w-full mt-2' />
							<p className='mt-5'>Password:</p>
							<input key="pwd" onChange={e => {setPassword(e.target.value)}} type="password" placeholder="Please inlcude Both uppercase and lowercase with at least 8 characters" className='border rounded-lg outline-gray-400 px-2 py-1 w-full mt-2'/>
							<div className='flex flex-row items-center mt-5'>
								<input type="checkbox" />
								<p className='ml-2'><span className='text-gray-400'>I agree with</span> TERMS&CONDITIONS</p>
							</div>
							<div className='mt-10 flex flex-col md:flex-row gap-5 items-center'>
							    <button onClick={()=>{processSignUp()}} className='bg-orange-300 px-5 py-2 rounded-md'>Sign Up</button>
								<p>
									<span className='text-gray-400'>Already have an account?</span>
									<Link to='/login' className='text-orange-400 ml-5'>Log In</Link>
								</p>
							</div>
						</div>
						:
						<div>
							<h3 className='text-3xl mb-14 text-gray-400'>COMFIRM YOUR ACCOUNT</h3>
							<p className='mt-5'>Code:</p>
							<input key="code" onChange={e=>{setCode(e.target.value)}} type="text" placeholder="your comfirm code is sent to your email" className='border rounded-lg outline-gray-400 px-2 py-1 w-full mt-2'/>
							<div className='mt-10'>
							<button onClick={()=>{processConfirm()}} className='bg-orange-300 px-5 py-2 rounded-md'>Confirm</button>
							</div>
					</div>
					}
				</div>
			</div>
		</div>
	)
}

export default SignUp;
