const LogOut = ()=>{
	localStorage.removeItem('user');
	return (
		<div>
			<h1>Log Out</h1>
			<p>You have been signed out</p>
		</div>
	)
}

export default LogOut;
