import './Home.css';
import React, { useEffect, useState } from 'react';
import { FaGripLines } from 'react-icons/fa';

function Home() {

  useEffect(() => {
    const card = document.querySelector(".hellodiv");
    const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
    const THRESHOLD = 15;
  
    const handleHover = (e) => {
      const { clientX, clientY, currentTarget } = e;
      const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;
  
      const horizontal = (clientX - offsetLeft) / clientWidth;
      const vertical = (clientY - offsetTop) / clientHeight;
      const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
      const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
  
      card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 10)`;
    };
  
    const resetStyles = (e) => {
      card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
    };
  
    if (!motionMatchMedia.matches) {
      card.addEventListener("mousemove", handleHover);
      card.addEventListener("mouseleave", resetStyles);
    }
  
    return () => {
      if (card) {
        card.removeEventListener("mousemove", handleHover);
        card.removeEventListener("mouseleave", resetStyles);
      }
    };
  }, []);


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
                <img src="./Images/logoport.png" className="w-[33vh]" alt="Logo" />
              </div>
              <div>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="flex items-center justify-center m-1">
                    <FaGripLines size={20} className="text-white" />
                  </div>
                  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a href="#">Work</a></li>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">Blog</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </header>

          <main className="h-[91vh] px-[3vh] pb-[3vh]">
            <div className="w-full bg-[#0D0D0D] h-full rounded-[20px]">
              <div className="flex flex-col items-center justify-center relative h-full ">
                <div className="flex items-start justify-center relative h-[70vh]">
                  <h1 className={`text-[34vh] font-bold transition duration-1000 ease-in-out transform ${scrolled ? 'text-[#D0F034] translate-x' : 'text-[#303030]'}`}
                    style={{ transform: `translateY(${+scrollPosition * 0.08}vh)` }}>
                    PORTFOLIO
                  </h1>
                </div>
                <div
                  className="flex justify-center h-[85vh] fixed bottom-0 left-0 right-0 !z-0"
                  style={{ transform: `translateY(${-scrollPosition * 0.04}vh)` }}>
                  <img src="./Images/yourimagehalf.png" className="" alt="Your Image" />
                </div>
                <div className="z-40 fixed bottom-[6vh] flex justify-center items-center rounded-full">
                  <div className="flex space-x-4 backdrop-blur-xl bg-black/35 rounded-full px-[3vh] py-[2vh] ">
                    <a href="#" className="text-white text-[14px] flex items-center hover:text-gray-800 px-5 hover:bg-[#D0F034] rounded-full py-2">Work</a>
                    <a href="#" className="text-white text-[14px] flex items-center hover:text-gray-800 px-5 hover:bg-[#D0F034] rounded-full py-2">About Me</a>
                    <a href="#" className="text-white text-[14px] flex items-center hover:text-gray-800 px-5 hover:bg-[#D0F034] rounded-full py-2">Contact</a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        <section className="reelSection w-full p-5 h-[100vh] bg-[white] relative !z-30">
          <div className="flex items-center justify-around h-full">
            <div className="flex items-center justify-center w-[25%] text-[white] bg-black h-[80vh] rounded-[20px]">
              <div className="text-[#303030] font-bold text-[150px]">


                <div className="carousel rounded-box w-64 flex">
                  <div className="carousel-item w-full">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                      className="w-full"
                      alt="Tailwind CSS Carousel component" />
                  </div>
                  <div className="carousel-item w-full">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                      className="w-full"
                      alt="Tailwind CSS Carousel component" />
                  </div>
                  <div className="carousel-item w-full">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                      className="w-full"
                      alt="Tailwind CSS Carousel component" />
                  </div>
                  <div className="carousel-item w-full">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                      className="w-full"
                      alt="Tailwind CSS Carousel component" />
                  </div>
                  <div className="carousel-item w-full">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                      className="w-full"
                      alt="Tailwind CSS Carousel component" />
                  </div>
                  <div className="carousel-item w-full">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                      className="w-full"
                      alt="Tailwind CSS Carousel component" />
                  </div>
                  <div className="carousel-item w-full">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                      className="w-full"
                      alt="Tailwind CSS Carousel component" />
                  </div>
                </div>


              </div>
            </div>
            <div className="flex-col items-start justify-center w-full md:w-[38%]">


              <div className="hellodiv card bg-cover bg-center rounded-[20px] overflow-hidden w-[100%] relative">
                <div className="content z-[10] relative text-center w-[100%]">
                  <h1 className="helloheading font-bold text-[25vh] w-[100%]">
                    HELLO
                  </h1>
                </div>
              </div>

              <div>
                <p className="onlyPara text-gray-800 text-justify font-semibold text-[1.8vh] md:text-[18px] lg:text-[20px]">
                  This is Ashish Thakur, a graphic designer and video editor hailing from the beautiful city of Taj, Agra. Having worked with big brands, YouTubers, and creators from different fields such as EdTech, Marketing, Consulting, among others, my heart lies where beautiful designs and eye-catching videos do. My passion for creating compelling visual designs and videos that bring stories to life navigates my enthusiasm and pathway to success.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Home;
