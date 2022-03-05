import {useContext,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { Auth } from 'aws-amplify';

import {AuthContext} from '../contexts/AuthContext';

async function logIn(email,password) {
    try {
        const user = await Auth.signIn(email, password);
		return user
    } catch (error) {
        console.log('error signing in', error);
		throw error
    }
}

const LogIn = ()=>{
	const {user,setUser} = useContext(AuthContext);
	const navigate = useNavigate()
	const processLogIn = ()=>{
		logIn('rutatangpersonal@gmail.com','AAAAtest')
		.then(user=>{
				console.log('suc')
				setUser(user);
				localStorage.setItem('user',user);
			}).catch(error=>{
				console.log('error',error)
			})
	}
	useEffect(()=>{
		if (user){
			navigate('/');
		}
	})
	return (
		<div>
			<h1 onClick={()=>{processLogIn()}}>LoginIn</h1>
		</div>
	)
}


export default LogIn;
