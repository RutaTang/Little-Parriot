import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

import Home from './pages/Home'
import SignUp from './pages/SignUp'

Amplify.configure(awsconfig);

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/signup" element={<SignUp />} />
		</Routes>
	</BrowserRouter>,
	document.getElementById('root')
)
