
import {createContext,useContext} from 'react'
import {useState, useEffect} from 'react'

const StateContext =  createContext()

const StateProvider = (props)=>{
    const [playFullScreen,setPlayFullScreen] = useState(false)
	return (
		<StateContext.Provider value={{playFullScreen,setPlayFullScreen}}>
			{props.children}
		</StateContext.Provider>
	)
} 

export {StateProvider,StateContext}
