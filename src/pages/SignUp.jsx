import { Auth } from 'aws-amplify';

async function signUp(email,password) {
    try {
        const { user } = await Auth.signUp({
			username: email,
			password: password,
        });
        console.log('successfully signup');
    } catch (error) {
        console.log('error signing up:', error);
    }
}

async function confirmSignUp(email,code) {
	try {
		await Auth.confirmSignUp(email, code);
		console.log('successfully comfirm your account');
	} catch (error) {
		console.log('error confirming sign up', error);
	}
}

const SignUp = ()=>{
	return (
		<div className='flex flex-row w-screen h-screen items-center'>
			<div className='h-screen basis-1/3 bg-orange-300 flex flex-col justify-center'>
				<div className="h-[80%] w-[80%] flex flex-col justify-around items-center">
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
			<div className='h-screen basis-2/3 flex flex-col items-center justify-center'>
				<div className='w-[80%] h-[80%] flex flex-col justify-around'>
					<h1 className='text-5xl'>Welcome to Little Parrot</h1>
					<div>
						<h3 className='text-3xl mb-14'>SIGN UP</h3>
						<p>Email:</p>
						<input type="text" placeholder="Type your email" className='border rounded-lg outline-gray-400 px-2 py-1 w-full mt-2' />
						<p className='mt-5'>Password:</p>
						<input type="password" placeholder="Type your password" className='border rounded-lg outline-gray-400 px-2 py-1 w-full mt-2'/>
						<div className='flex flex-row items-center mt-5'>
							<input type="checkbox" />
							<p className='ml-2'>I agree with TERMS&CONDITIONS</p>
						</div>
						<div className='mt-10'>
							<button className='bg-orange-300 px-5 py-2 rounded-md'>Sign Up</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignUp;
