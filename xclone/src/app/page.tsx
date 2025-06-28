import LeftSidebar from "@/components/LeftSidebar";
import { BsDot } from "react-icons/bs";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-background">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* left sidebar for navigation/header */}
        <LeftSidebar />
        <main className="ml-[275px] mx-2 flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] 
        border-gray-600">
          <h1 className="text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0">
            Home
          </h1>
          <div className="flex items-stretch space-x-2 py-4 px-4 border-t-[0.5px] border-b-[0.5px] border-gray-600 relative">
            <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
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
              <div key={i} className="border-b-[0.5px] border-gray-600 p-4 flex space-x-4">
                <div>
                  <div className="w-10 h-10 bg-slate-200 rounded-full" />
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-1">
                    <div className="font-bold">SurfHub</div>
                    <div>@surfhub</div>
                    <div>
                      <BsDot/>
                    </div>
                    <div>1 hour ago</div>
                  </div>
                  <div className="text-white text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptatibus culpa nemo exercitationem temporibus dolor repudiandae rem, ad facilis? Perspiciatis ducimus enim et quisquam? Quisquam pariatur distinctio ad officiis esse. Porro dolores impedit sunt fugiat et voluptatibus, aliquid pariatur quod eius fugit vitae, hic nostrum ea eos recusandae reiciendis ipsum explicabo ipsam atque rem, magni aliquam! Recusandae veritatis sapiente ad at eligendi
                  </div>
                  <div className="bg-slate-400 aspect-square w-full h-96 rounded-xl"></div>
                  <div className="flex items-center space-x-2 w-full">
                    <div>C</div>
                    <div>R</div>
                    <div>L</div>
                    <div>S</div>
                    <div>SH</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
        
        {/*<section>right section</section> */}
      </div>
    </div>
  );
};

export default Home;
