import LeftSidebar from "@/components/LeftSidebar";
import MainComponent from "@/components/MainComponent";


const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-background">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* left sidebar for navigation/header */}
        <LeftSidebar />
        {/* Main */}
        <MainComponent />
        {/*<section>right section</section> */}
        <section className="fixed flex flex-col space-y-4">
          
        </section>
      </div>
    </div>
  );
};

export default Home;
