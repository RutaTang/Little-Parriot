import {createContext,useContext} from 'react'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const AuthContext =  createContext()

const AuthProvider = (props)=>{
    const [user,setUser] = useState(null)
	const _user = localStorage.getItem("user")
	useEffect(()=>{
		if(_user !== null){
			setUser(_user)
		}
	})
	return (
		<AuthContext.Provider value={{user,setUser}}>
			{props.children}
		</AuthContext.Provider>
	)
} 

const AuthProtector = (props)=>{
	const redirectTo = props.redirectTo ?? '/signup'
	const navigate = useNavigate()
	const {user,_} = useContext(AuthContext)
	useEffect(()=>{
		if(!user){
			setTimeout(()=>{navigate(redirectTo)},500)
		}
	})
	return (
		<>
			{
			user ? props.children : <h1>Navigate to {redirectTo} </h1>
			}
		</>
	)
}

const AuthWrapper = (props)=>{
	return (
		<AuthProvider>
			<AuthProtector>
				{props.children}
			</AuthProtector>
		</AuthProvider>
	)
}


export {AuthProvider,AuthProtector,AuthContext, AuthWrapper}
