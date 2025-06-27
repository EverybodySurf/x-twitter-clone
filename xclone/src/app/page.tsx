import { BiHomeCircle,BiUser } from 'react-icons/bi';
import { HiOutlineHashtag } from 'react-icons/hi';
import { BsBell, BsBookmark, BsTwitter } from 'react-icons/bs';
import { BsEnvelope } from 'react-icons/bs';
import Link from 'next/link';




const NAVIGATION_ITEMS = [
  {
    title:'Twitter',
    icon:BsTwitter
  },
  {
    title:'Home',
    icon:BiHomeCircle
  },
  {
    title:'Explore',
    icon:HiOutlineHashtag
  },
  {
    title:'Notifications',
    icon:BsBell
  },
  {
    title:'Messages',
    icon:BsEnvelope
  },
  {
    title:'Bookmarks',
    icon:BsBookmark
  },
  {
    title:'Profile',
    icon:BiUser
  }
]

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-background">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* left sidebar for navigation/header */}
        <section className="fixed w-[272px] flex flex-col items-stretch h-screen">
          <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
            {NAVIGATION_ITEMS.map((item)=>(
            <Link 
              className='hover:bg-white/10 text-2xl transition duration-200 flex items-center justify-start w-fit space-x-4 
              rounded-3xl py-2 px-6' 
              href={`/${item.title.toLowerCase()}`} 
              key={item.title}
            >
              <div>
                <item.icon/>
              </div>
              {item.title !== "Twitter" &&<div>{item.title}</div>}
            </Link>
            ))}
            <button className="bg-primary rounded-full m-4 p-4 text-2xl text-center hover:scale-95 transition 
            duration-200">
            Tweet
            </button>
          </div>
          <div>at the bottom</div>
        </section>
        {/*}
        <main></main>
        <section></section> */}
      </div>
    </div>
  );
};

export default Home;
