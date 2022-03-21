import Play from "./Play";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div className="w-screen">
      <Nav />
      <Play />
      {/*Story*/}
      <div className="w-[90%] mx-auto mt-5">
        <h1 className="text-3xl font-bold">Story List</h1>
        <div className="flex w-full">
          <div className="flex flex-col gap-y-5 mt-10 w-1/5">
            <p className="px-3 py-1 bg-orange-300 text-white rounded-lg">
              Hot
            </p>
            <p>Recommand</p>
            <p>Fair Tale</p>
            <p>Cartoon</p>
            <p>Bedtime Story</p>
            <p>Comedy</p>
          </div>
          <div className="w-4/5 grid-cols-3 grid mx-5 gap-x-8 gap-y-12">
						{/* Story Card  */}
            <div className="bg-white rounded-lg shadow shadow-gray-300 pb-5">
              <img className="w-full h-[320px]" style={{objectFit:'fill'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEAxCdKO0OVKfw6ZW4nd3UFov_67vUuUx3AA&usqp=CAU" alt="" />
							<div className="px-3 space-y-2">
								<h1 className="text-xl font-bold mt-2">Three Pigs</h1>
								<p className="text-gray-500">Adventure and play with friends.</p>
								<div className="text-gray-500 flex flex-row justify-between">
									<p>Stories: 10</p>
									<p>Total Time: 100min</p>
								</div>
							</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
