import { useContext, useEffect, useState } from "react";

import Play from "./Play";
import Nav from "../components/Nav";
import { StateContext } from "../contexts/StateContext";

const FAKE_STORY_TAGS = [
  {
    id: 1,
    name: "Hot",
  },
  {
    id: 2,
    name: "Recommand",
  },
  {
    id: 3,
    name: "Fair Tale",
  },
  {
    id: 4,
    name: "Cartoon",
  },
  {
    id: 5,
    name: "Bedtime Story",
  },
  {
    id: 6,
    name: "Comedy",
  },
];

const FAKE_VOICE_IEMS = [
  {
    id: 1,
    name: "Women",
    description: "A soft and kind voice with your sleep",
    url: "/Mom.svg",
    price: "free",
  },
  {
    id: 2,
    name: "Men",
    description: "A magnetic voice follow your day, you will love it",
    url: "/Dad.svg",
    price: "free",
  },
];

const Home = () => {
  const { page, setPage } = useContext(StateContext);
  const { playFullScreen, setPlayFullScreen } = useContext(StateContext);
  const [storyTags, setStoryTags] = useState();
  const [currentTag, setCurrentTag] = useState(0);
  const [currentVoiceId, setCurrentVoiceId] = useState(0);

  useEffect(() => {
    setStoryTags(FAKE_STORY_TAGS);
  }, []);

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
            {storyTags &&
              storyTags.map((tag, idx) => (
                <p
                  key={tag.name + idx}
                  onClick={() => {
                    setCurrentTag(idx);
                  }}
                  className={
                    currentTag === idx
                      ? `px-3 py-1 bg-orange-300 text-white rounded-lg cursor-pointer`
                      : "cursor-pointer"
                  }
                >
                  {tag.name}
                </p>
              ))}
          </div>
          <div className="md:w-4/5 w-full md:grid-cols-3 md:mt-0 mt-10 md:grid md:mx-5 md:gap-x-8 md:gap-y-12">
            {/* Story Card  */}
            <div
              onClick={() => {
                setPlayFullScreen(true);
              }}
              className="bg-white rounded-lg shadow shadow-gray-300 pb-5 w-4/5 mx-auto hover:scale-105 transition ease-in-out duration-230 cursor-pointer"
            >
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
      <div
        className="w-screen h-screen mt-32"
        style={{ display: `${page === 1 ? "block" : "none"}` }}
      >
        <div className="flex flex-wrap md:flex-row flex-col items-center w-[90%] gap-10 mx-auto">
          {FAKE_VOICE_IEMS.map((item, id) => (
            <div
              className={`w-[300px] shadow shadow-gray-200 p-5 rounded-lg transition hover:scale-105 cursor-pointer ${
                currentVoiceId === id ? "border-red-400 border-4" : ""
              }`}
							onClick={() => {setCurrentVoiceId(id)}}
							key={item.name + id}
            >
              <img className="w-[160px] mx-auto" src={item.url} alt="" />
              <h3 className="text-2xl text-black mt-2">{item.name}</h3>
              <p className="text-gray-500">{item.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-red-500">{item.price}</p>
                <button
                  className={`py-1 px-2 text-orange-400 ${
                    currentVoiceId === id
                      ? "bg-orange-400 rounded-xl text-white"
                      : ""
                  }`}
                >
                  {currentVoiceId === id ? "Current Voice" : "Set Default"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
