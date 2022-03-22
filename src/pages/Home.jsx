import { useContext } from "react";

import Play from "./Play";
import Nav from "../components/Nav";
import { StateContext } from "../contexts/StateContext";

const Home = () => {
  const { page, setPage } = useContext(StateContext);
  const { playFullScreen, setPlayFullScreen } = useContext(StateContext);
  return (
    <div className="w-screen pb-40 md:pb-0">
      <Nav />
      <Play />
      {/*Story*/}
      <div
        style={{ display: `${page === 0 ? "block" : "none"}` }}
        className="w-[90%] mx-auto mt-24 md:mt-28"
      >
        <h1 className="text-3xl font-bold w-full text-center md:text-left">
          Story List
        </h1>
        <div className="flex w-full md:flex-row flex-col">
          <div className="flex flex-col gap-y-5 md:mt-10 mt-3 md:w-1/5 w-full text-center md:text-left">
            <p className="px-3 py-1 bg-orange-300 text-white rounded-lg">
              Hot
            </p>
            <p>Recommand</p>
            <p>Fair Tale</p>
            <p>Cartoon</p>
            <p>Bedtime Story</p>
            <p>Comedy</p>
          </div>
          <div className="md:w-4/5 w-full md:grid-cols-3 md:mt-0 mt-10 md:grid md:mx-5 md:gap-x-8 md:gap-y-12">
            {/* Story Card  */}
            <div onClick={()=>{setPlayFullScreen(true)}} className="bg-white rounded-lg shadow shadow-gray-300 pb-5 w-4/5 mx-auto hover:scale-105 transition ease-in-out duration-230 cursor-pointer">
              <img
                className="w-full md:h-[280px] h-[200px]"
                style={{ objectFit: "fill" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEAxCdKO0OVKfw6ZW4nd3UFov_67vUuUx3AA&usqp=CAU"
                alt=""
              />
              <div className="px-3 space-y-2">
                <h1 className="text-xl font-bold mt-2">Three Pigs</h1>
                <p className="text-gray-500">
                  Adventure and play with friends.
                </p>
                <div className="text-gray-500 flex flex-row justify-between">
                  <p>Stories: 10</p>
                  <p>Total Time: 100min</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Voice */}
      <div style={{ display: `${page === 1 ? "block" : "none"}` }}>
        Voice{page}
      </div>
    </div>
  );
};

export default Home;
