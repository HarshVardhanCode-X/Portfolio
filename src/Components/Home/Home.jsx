import './Home.css';
import React, { useEffect, useState } from 'react';
import { FaGripLines } from 'react-icons/fa';

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0); 

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position); 

      if (position > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <>
      <section className="w-full">
        <div className="bg-[#000000] w-full ">
          <header className="bg-[#000000] px-2 sticky inset-0 h-[9vh] flex items-center justify-center z-40">
            <div className="flex items-center justify-between px-5 py-4 w-full">
              <div className="flex items-center justify-center text-white">
                <img src="./Images/logoport.png" className="w-[250px]" alt="Logo" />
              </div>
              <div>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="flex items-center justify-center m-1">
                    <FaGripLines size={20} className="text-white" />
                  </div>
                  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a href="#">reel 1</a></li>
                    <li><a href="#">reel 2</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </header>

          <main className="h-[91vh] px-[3vh] pb-[3vh]">
          <div className="w-full bg-[#0D0D0D] h-full rounded-[20px]">
            <div className="flex flex-col items-center justify-center relative h-full ">
              <div className="flex items-start justify-center relative h-[70vh]">
                <h1 className={`text-[250px] font-bold transition duration-1000 ease-in-out transform ${scrolled ? 'text-[#D0F034] translate-x' : 'text-[#303030]'}`} 
                style={{ transform: `translateY(${+scrollPosition * 0.6}px)` }}>
                  PORTFOLIO
                </h1>
              </div>
              <div
                className="flex justify-center h-[85vh] fixed bottom-0 left-0 right-0 !z-0"
                style={{ transform: `translateY(${-scrollPosition * 0.3}px)` }}>
                <img src="./Images/yourimagehalf.png" className="" alt="Your Image" />
              </div>
              <div className="z-40 fixed bottom-4 flex justify-around items-center ">
                <div className="flex space-x-4 backdrop-blur-sm bg-black/30 rounded-full px-4 py-2">
                  <a href="#" className="text-white hover:text-gray-300 px-4 py-2">Home</a>
                  <a href="#" className="text-white hover:text-gray-300 px-4 py-2">About</a>
                  <a href="#" className="text-white hover:text-gray-300 px-4 py-2">Works</a>
                  <a href="#" className="text-white hover:text-gray-300 px-4 py-2">Blogs</a>
                  <a href="#" className="text-white hover:text-gray-300 px-4 py-2">Contact</a>
                </div>
              </div>
            </div>
            </div>
          </main>
        </div>

        <section className="reelSection w-full p-5 h-[100vh] bg-slate-500 relative !z-30">
          <div className="flex items-center justify-around h-full">
            <div className="flex items-center justify-center w-[25%] text-[#2D2D2D] bg-[#000000] h-[80vh] rounded-[20px]">
              <div className="text-[#303030] font-bold text-[150px]">REEL</div>
            </div>
            <div className="flex-col items-center justify-center w-[35%]">
              <div><h1 className="text-[#303030] font-bold text-[180px] transform transition-transform">HELLO</h1></div>
              <div><p className="onlyPara text-[#303030] text-justify font-semibold text-[20px]">This is Ashish Thakur, a graphic designer and video editor hailing from the beautiful city of Taj, Agra. Having worked with big brands, youtubers, and creators different fields such as EdTech, Marketing, Consulting, among others, my heart lies where beautiful designs and eye-catching videos do. My passion for creating compelling visual designs and videos that bring stories to life navigates my enthusiasm and pathway to success.</p></div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Home;
