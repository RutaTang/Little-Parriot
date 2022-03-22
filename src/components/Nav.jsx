import { GiParrotHead } from "react-icons/gi";
import {useContext} from 'react';
import { useNavigate } from "react-router-dom";

import {StateContext} from "../contexts/StateContext";

const Nav = (props) => {
  const userName = props.userName ?? "UnName";
  const isMobile = window.innerWidth < 768;
	const {page,setPage} = useContext(StateContext);
	const navigate = useNavigate();
  return (
    <div>
      {!isMobile
        ? (
          <div className="fixed top-0 bg-opacity-60 w-[100vw] flex flex-row justify-between items-center px-10 py-5 bg-white">
            <div>
              <GiParrotHead className="text-5xl text-orange-500" />
            </div>
            <div className="hidden md:flex gap-x-16 items-center">
              <p onClick={()=>{setPage(0)}} className={`cursor-pointer ${page===0 ? "text-3xl text-orange-500 font-bold" : "text-2xl text-gray-500"} ` }>Storage</p>
              <p onClick={()=>{setPage(1)}} className={`cursor-pointer ${page===1 ? "text-3xl text-orange-500 font-bold" : "text-2xl text-gray-500"} ` }>Voice</p>
              <div onClick={()=>{navigate('/logout')}} className="flex items-center cursor-pointer">
                <img className="w-8" src="/profile_tmp.png" alt="" />
                <p className="ml-2 text-lg text-gray-400">{userName}</p>
              </div>
              <div>
                <button className="border border-orange-400 px-3 py-2 text-lg text-orange-400 rounded-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        )
        : (
          <div>
            <div className="fixed top-0 bg-opacity-60 w-[100vw] flex flex-row justify-between items-center px-10 py-5 bg-white">
              <GiParrotHead className="text-5xl text-orange-500" />
              <button className="border border-orange-400 px-2 py-1 text-base text-orange-400 rounded-lg">
                Subscribe
              </button>
            </div>
            <div className="fixed bottom-0 w-[100vw] flex flex-row justify-between items-center px-10 py-5 bg-white">
              <div>
                <p onClick={()=>{setPage(0)}} className={`${ page === 0 ? "text-orange-400 text-2xl" : "text-2xl"}` }>Story</p>
              </div>
              <div onClick={()=>{navigate('/logout')}} className="mb-3">
                <img className="w-10" src="/profile_tmp.png" alt="" />
              </div>
              <div>
                <p onClick={()=>{setPage(1)}} className={`${ page === 1 ? "text-orange-400 text-2xl" : "text-2xl"}` }>Voice</p>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default Nav;
