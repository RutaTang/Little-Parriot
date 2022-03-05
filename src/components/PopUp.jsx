const PopUp = (props)=>{
	const text = props.text ?? ""
	const bgColor = props.bgColor ?? '#F53F3F'
	return (
		<div className="z-50 fixed top-5">
			<div className="w-screen flex justify-center">
				<h1 style={{backgroundColor:bgColor}} className="px-5 py-3 rounded-lg opacity-75">{ text }</h1>
			</div>
		</div>
	)
}

export default PopUp;
