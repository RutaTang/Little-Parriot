import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { BiPlayCircle } from "react-icons/bi";
import { useContext, useState } from "react";

import { StateContext } from "../contexts/StateContext";

const Progress = (props) => {
  const totalDuration = props.totalDuration || "01:00";
  const totalDurationNumber = totalDuration.split(":").map((item) =>
    parseInt(item)
  ).reduce((a, b) => a * 60 + b);
  const currentProgress = props.currentProgress || "00:50";
  const currentProgressNumber = currentProgress.split(":").map((item) =>
    parseInt(item)
  ).reduce((a, b) => a * 60 + b);
  console.log(currentProgressNumber, totalDurationNumber);
  return (
    <div className={`w-full relative ${props.className}`}>
      <div className="w-full h-[40%] bg-gray-200 rounded-xl absolute"></div>
      <div
        style={{
          width: `${
            Math.round(100 * currentProgressNumber / totalDurationNumber)
          }%`,
        }}
        className="h-[40%] bg-orange-400 rounded-xl absolute"
      >
      </div>
      <div className="w-full flex justify-between absolute top-[60%]">
        <p>{currentProgress}/{totalDuration}</p>
        <div>
          <BsFillPlayFill className="text-2xl text-gray-500" />
        </div>
      </div>
    </div>
  );
};

const Play = () => {
  const { playFullScreen, setPlayFullScreen } = useContext(StateContext);
  return (
    <div>
      {playFullScreen
        ? (
          <div className="w-[100vw] h-[100vh] bg-black bg-opacity-50 fixed top-0 left-0">
            <div className="md:w-[80vw] md:h-[90vh] w-full h-full bg-white overflow-scroll absolute md:top-[5vh] md:left-[10vw] p-10 shadow shadow-gray-300 md:rounded-lg rounded-none">
              <div className="w-full flex justify-end items-center">
                <AiOutlineFullscreenExit
                  onClick={() => {
                    setPlayFullScreen(false);
                  }}
                  className="text-2xl text-gray-500"
                />
              </div>
              <div className="w-full h-[50vh] flex flex-col md:flex-row justify-between items-center gap-x-5 mt-10">
                <img
                  src="/play-cover.svg"
                  alt=""
                  className="w-1/2 md:w-[30%] h-full"
                />
                <div className="self-start h-full md:mt-0 mt-5">
                  <h1 className="text-3xl font-bold text-center">
                    The Three Little Pigs
                  </h1>
                  <div className="text-center md:mt-14 mt-5 text-gray-500 leading-8 h-[60%] overflow-scroll">
                    <p>and not enough food to feed them.</p>
                    <p>So when they were old enough,</p>
                    <p>
                      she sent them out into the world to seek their fortunes.
                    </p>
                    <p>The first little pig was very lazy.</p>
                    <p>
                      He didn't want to work at all and he built his house out
                      of straw.
                    </p>
                    <p>
                      He didn't want to work at all and he built his house out
                      of straw.
                    </p>
                    <p>
                      He didn't want to work at all and he built his house out
                      of straw.
                    </p>
                    <p>
                      He didn't want to work at all and he built his house out
                      of straw.
                    </p>
                    <p>
                      He didn't want to work at all and he built his house out
                      of straw.
                    </p>
                    <p>
                      He didn't want to work at all and he built his house out
                      of straw.
                    </p>
                  </div>
                </div>
                <div className="md:flex md:flex-col md:block hidden justify-end h-full pb-10 gap-5">
                  <FiShare2 className="text-2xl text-gray-500" />
                  <AiOutlineHeart className="text-2xl text-gray-500" />
                </div>
              </div>
              <Progress className="mt-36 md:mt-10 h-16" />
              <div className="w-full mt-10">
                <h3 className="text-bold text-3xl text-gray-500">Paly List</h3>
                <div className="grid grid-cols-3 w-full mt-5 gap-x-5 gap-y-3 ">
                  <div className="flex justify-between">
                    <p>Wooden House</p>
                    <BiPlayCircle className="md:block hidden text-2xl text-gray-500" />
                  </div>
                  <div className="flex justify-between">
                    <p>Wooden House</p>
                    <BiPlayCircle className="md:block hidden text-2xl text-gray-500" />
                  </div>
                  <div className="flex justify-between">
                    <p>Wooden House</p>
                    <BiPlayCircle className="md:block hidden text-2xl text-gray-500" />
                  </div>
                  <div className="flex justify-between">
                    <p>Wooden House</p>
                    <BiPlayCircle className="md:block hidden text-2xl text-gray-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
        : (
          <div>
            {/*For Desktop*/}
            <div className="hidden md:block fixed bottom-20 md:right-5 md:left-auto left-[5vw] right-[5vw] w-[90vw] md:w-[20vw] bg-white shadow shadow-gray-300 p-5 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-bold text-gray-500 text-lg w-[60%] overflow-hidden">
                  Three Little Pigss
                </span>
                <AiOutlineFullscreen
                  onClick={() => {
                    setPlayFullScreen(true);
                  }}
                  className="text-2xl text-gray-500 mr-0 ml-auto"
                />
              </div>
              <Progress className="mt-3 h-5" />
            </div>
            {/*For mobile*/}
            <div className="md:hidden fixed bottom-24 right-5 p-3 rounded-full bg-white shadow shadow-gray-400 bg-opacity-60">
              <AiOutlineFullscreen
                onClick={() => {
                  setPlayFullScreen(true);
                }}
                className="text-2xl text-gray-500 mr-0 ml-auto"
              />
            </div>
          </div>
        )}
    </div>
  );
};

export default Play;
