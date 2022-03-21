import { GiParrotHead } from "react-icons/gi";

const Nav = (props) => {
  const userName = props.userName ?? "UnName";
  const isMobile = window.innerWidth < 768;
  return (
    <div className="flex flex-row justify-between items-center px-10 py-5 bg-white">
      <div>
        <GiParrotHead className="text-5xl text-orange-500" />
      </div>
      <div className="flex gap-x-16 items-center">
        <p className="text-3xl text-orange-500 font-bold">Storage</p>
        <p className="text-2xl text-gray-500">Voice</p>
        <div className="flex items-center">
          <img className="w-8" src="/profile_tmp.png" alt="" />
          <p className="ml-2 text-lg text-gray-400">{userName}</p>
        </div>
        <div>
          <button className="text-lg text-gray-500 border border-orange-400 px-3 py-2 text-lg text-orange-400 rounded-lg">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
