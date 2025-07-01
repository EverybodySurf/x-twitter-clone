import LeftSidebar from "@/components/LeftSidebar";
import MainComponent from "@/components/MainComponent";
import { BsSearch } from "react-icons/bs";
import { arrayBuffer } from "stream/consumers";


const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-background">
      <div className="max-w-[80vw] w-full h-full flex relative">
        {/* left sidebar for navigation/header */}
        <LeftSidebar />
        {/* Main */}
        <MainComponent />
        {/*<section>right section</section> */}
        <section className="w-full sticky top-2 overflow-scroll flex flex-col items-stretch h-screen px-6">
          {/*search */}
          <div>
            <div className="relative w-full h-full group">
              <input
                id="searchBox" 
                type="text" 
                placeholder="Search" 
                className="outline-none focus:ring-primary focus:ring bg-neutral-800/90 border-none 
                w-full h-full rounded-full py-4 pl-14 pr-4"
              />
              <label 
                htmlFor="searchBox"
                className="absolute top-0 left-0 h-full flex items-center justify-center p-4 text-gray-500 
                peer-focus:text-primary"
              >
                <BsSearch className="w-5 h-5"/>
              </label>
            </div>
          </div>
          {/* trending section */}
          <div className="flex flex-col rounded-xl bg-neutral-800 my-4">
            <h3 className="font-bold text-xl my-4 px-4">What's happening</h3>
            <div>
              {Array.from({ length:5 }).map((_, i) => (
                <div 
                  key={i}
                  className="hover:bg-white/10 p-4 last:rounded-b-xl transition-duration-200"
                >
                  <div className="font-bold text-lg">#trending{i + 1}</div>
                  <div className="text-xs text-neutral-400">35.4k</div>
                </div>
              ))}
            </div>
          </div>
          {/* Who to follow section */}
          <div className="flex flex-col rounded-xl bg-neutral-800 my-4">
            <h3 className="font-bold text-xl my-4 px-4">Who to follow</h3>
            <div>
              {Array.from({ length:5 }).map((_, i) => (
                <div 
                  key={i}
                  className="hover:bg-white/10 p-4 flex justify-between items-centerlast:rounded-b-xl transition-duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-neutral-600 rounded-full flex-none"></div>
                    <div className="flex flex-col">
                      <div className="font-bold text-white">Other User</div>
                      <div className="text-gray-500 text-xs">
                        @theuser1233
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <button className="rounded-full px-6 py-2 bg-white text-neutral-850">
                      Follow
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div> 
          {/* show more section */}
          <div className="flex flex-col rounded-xl bg-neutral-800 my-4">
            <h3 className="font-bold text-xl my-4 px-4">Show more</h3>
            <div>
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i}>

                </div>
              ))}
            </div>
          </div>
          
        </section>
      </div>
    </div>
  );
};

export default Home;
