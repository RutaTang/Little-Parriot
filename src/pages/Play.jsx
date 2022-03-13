import {AiOutlineFullscreenExit,AiOutlineFullscreen} from 'react-icons/ai'
import {FiShare2} from 'react-icons/fi'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsFillPlayFill} from 'react-icons/bs'
import {BiPlayCircle} from 'react-icons/bi'
import {useState,useContext} from 'react'

import {StateContext} from '../contexts/StateContext'


const Progress = (props) => {
	return (
		<div className={`w-full relative ${props.className}`}>
			<div className='w-full h-[40%] bg-gray-200 rounded-xl absolute'></div>
			<div className='w-[20%] h-[40%] bg-orange-400 rounded-xl absolute'></div>
			<div className='w-full flex justify-between absolute top-[60%]'>
				<p>6:00/12:12</p>
				<div>
					<BsFillPlayFill className='text-2xl text-gray-500'/>
				</div>
			</div>
		</div>
	)
}

const Play = ()=>{
	const {playFullScreen,setPlayFullScreen} = useContext(StateContext)
	return (
		<div>
			{
			playFullScreen ?
				(<div className='w-screen h-screen bg-black bg-opacity-50'>
					<div className='w-[80vw] h-[90vh] bg-white overflow-scroll absolute top-[5vh] left-[10vw] p-10 shadow shadow-gray-300 rounded-lg'>
						<div className='w-full flex justify-end items-center'>
							<AiOutlineFullscreenExit onClick={()=>{setPlayFullScreen(false)}} className='text-2xl text-gray-500'/>
						</div>
						<div className='w-full h-[50%] flex justify-between items-center gap-x-5 mt-10'>
							<img src="/play-cover.svg" alt=""  className='w-[30%] h-full'/>
							<div className='self-start h-full'>
								<h1 className='text-3xl font-bold text-center'>The Three Little Pigs</h1>
								<div className='text-center mt-14 text-gray-500 leading-8 h-[60%] overflow-scroll'>
									<p>and not enough food to feed them. </p>
									<p>So when they were old enough, </p>
									<p>she sent them out into the world to seek their fortunes.</p>
									<p>The first little pig was very lazy. </p>
									<p>He didn't want to work at all and he built his house out of straw.</p>
									<p>He didn't want to work at all and he built his house out of straw.</p>
									<p>He didn't want to work at all and he built his house out of straw.</p>
									<p>He didn't want to work at all and he built his house out of straw.</p>
									<p>He didn't want to work at all and he built his house out of straw.</p>
									<p>He didn't want to work at all and he built his house out of straw.</p>
								</div>
							</div>
							<div className='flex flex-col justify-end h-full pb-10 gap-5'>
								<FiShare2 className='text-2xl text-gray-500'/>
								<AiOutlineHeart className='text-2xl text-gray-500'/>
							</div>
						</div>
						<Progress className="mt-10 h-16" />
						<div className='w-full mt-10'>
							<h3 className='text-bold text-3xl text-gray-500'>Paly List</h3>
							<div className='grid grid-cols-3 w-full mt-5 gap-x-5 gap-y-3 '>
								<div className='flex justify-between'>
									<p>Wooden House</p>
									<BiPlayCircle className='text-2xl text-gray-500'/>
								</div>
								<div className='flex justify-between'>
									<p>Wooden House</p>
									<BiPlayCircle className='text-2xl text-gray-500'/>
								</div>
								<div className='flex justify-between'>
									<p>Wooden House</p>
									<BiPlayCircle className='text-2xl text-gray-500'/>
								</div>
								<div className='flex justify-between'>
									<p>Wooden House</p>
									<BiPlayCircle className='text-2xl text-gray-500'/>
								</div>
							</div>
						</div>
					</div>
				</div>)
				:
				<div className='absolute bottom-5 right-5 w-[20vw] bg-white shadow shadow-gray-300 p-5 rounded-lg'>
					<div className='flex justify-between items-center'>
						<span className='text-bold text-gray-500 text-xl w-[60%] overflow-hidden'>
							Three Little Pigss
						</span>
						<AiOutlineFullscreen onClick={()=>{setPlayFullScreen(true)}} className='text-2xl text-gray-500 mr-0 ml-auto'/>
					</div>
					<Progress className="mt-3 h-10" />
			</div>
			}
		</div>
	)

}

export default Play;
