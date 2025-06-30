import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { BsChat, BsDot, BsThreeDots } from "react-icons/bs";
import { IoShareOutline, IoStatsChart } from "react-icons/io5";


const MainComponent = () => {
  return (
    <main className="flex w-[60%] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] 
        border-gray-600">
          <div className="flex items-center justify-between px-4 pt-4 border-b-[0.5px] border-gray-600 backdrop-blur bg-black/10 sticky top-0">
            <h1 className="text-md font-bold">
              For you
              <div className="h-1 bg-primary rounded-full mt-4"></div>
            </h1>
           
            
          </div>
          <div className="flex items-stretch space-x-2 py-6 px-4 border-b-[0.5px] border-gray-600">
            <div className="mt-2 w-11 h-11 bg-slate-400 rounded-full flex-none"></div>
            <div className="flex flex-col w-full h-full">
              <input 
                type="text" 
                className="w-full h-full text-2xl placeholder:text-gray-600 bg-transparent border-b-[0.5px] border-gray-600 p-4 outline-none border-none" 
                placeholder="What's happening?"
              />
              <div className="w-full justify-between items-center flex">
                <div></div>
                <div className="w-full max-w-[100px]">
                  <button className="bg-primary rounded-full px-4 py-2 w-full text-lg text-center hover:scale-95 transition 
                  duration-200 font-bold">
                    Tweet
                  </button>
                </div>
              </div>
            </div>

          </div>
          <div className="flex flex-col">
            {Array.from({length:5}).map((_,i)=>(
              <div 
                key={i} 
                className="border-b-[0.5px] border-gray-600 p-2 flex space-x-4"
              >
                <div>
                  <div className="w-10 h-10 bg-slate-400 rounded-full" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center w-full justify-between">
                    <div className="flex items-center space-x-1 w-full">
                      <div className="font-bold">SurfHub</div>
                      <div className="text-gray-500">@surfhub</div>
                      <div className="text-gray-500">
                        <BsDot />
                      </div>
                      <div className="text-gray-500">1 hour ago</div>
                    </div>
                    <div>
                      <BsThreeDots />
                    </div>
                  </div>
                  <div className="text-white text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptatibus culpa nemo exercitationem temporibus dolor repudiandae rem, ad facilis? Perspiciatis ducimus enim et quisquam? Quisquam pariatur distinctio ad officiis esse. Porro dolores impedit sunt fugiat et voluptatibus, aliquid pariatur quod eius fugit vitae, hic nostrum ea eos recusandae reiciendis ipsum explicabo ipsam atque rem, magni aliquam! Recusandae veritatis sapiente ad at eligendi
                  </div>
                  <div className="bg-slate-400 aspect-square w-full h-80 rounded-xl mt-2"></div>
                  <div className="flex items-center justify-start space-x-20 mt-2 w-full">
                    <div className="rounded-full hover:bg-white/10 transition-200 p-2 cursor-pointer">
                      <BsChat/>
                    </div>
                    <div className="rounded-full hover:bg-white/10 transition-200 p-2 cursor-pointer">
                      <AiOutlineRetweet/>
                    </div>
                    <div className="rounded-full hover:bg-white/10 transition-200 p-2 cursor-pointer">
                      <AiOutlineHeart/>
                    </div>
                    <div className="rounded-full hover:bg-white/10 transition-200 p-2 cursor-pointer">
                      <IoStatsChart/>
                    </div>
                    <div className="rounded-full hover:bg-white/10 transition-200 p-2 cursor-pointer">
                      <IoShareOutline/>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
  )
}

export default MainComponent