import './Home.css';
import React, { useEffect, useState } from 'react';
import { FaGripLines } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

function Home() {


  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 3000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

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


      <Helmet>
        <title>Home Page - My App</title>
        <meta name="keywords" content="portfolio, ashish" />
      </Helmet>


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

      <section>
        <div className='content relative bg-[#060606] overflow-hidden'>
          <div className='flex justify-center'><img src='./Images/logo.png' width={500} className='absolute opacity-20 top-[8%] transform transition-transform duration-500 ease-out hover:scale-105 animate-spin-3d'></img></div>
          <div className='flex w-full justify-center  pt-[100px]'>
            <div className=' w-[55%] justify-center'>
              <p className='text-[#CDCDCD]   text-[25px] text-justify'>My work features a <b>BOLD</b>, retro style with a modern play on <i>typography</i> and effects, focusing on aesthetics while maintaining a brand touch.</p>
            </div>
          </div>
          <div className='text-[#CDCDCD] w-full flex justify-center pt-[75px] '>
            <div className='flex w-[55%] justify-between '>

              <div className='flex flex-col gap-3'>
                <div className='text-[20px]'><span><b>Software</b></span></div>
                <div>
                  <ul>
                    <li>Adobe Premiere pro</li>
                    <li>Adobe After Effects</li>
                    <li>Adobe photoshop</li>
                    <li>Adobe Illustrator</li>
                    <li>Adobe Lightroom</li>
                    <li>Adobe XD</li>
                    <li>davinci resolve</li>
                    <li>Figma</li>
                  </ul>
                </div>
              </div>
              <div className='flex flex-col gap-3'>
                <div className='text-[20px]'><span><b>Abilities</b></span></div>
                <div>
                  <ul>
                    <li>Creativity</li>
                    <li>Typography</li>
                    <li>Color Therapy</li>
                    <li>Layout Design</li>
                    <li>Attention to Detail</li>
                    <li>Problem Solving</li>
                    <li>Time Management</li>
                    <li>Print Design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='text-[#3E3E3E] w-full flex justify-center pt-[100px] pb-[100px]'>
            <div className='w-[55%] flex justify-center'>
              {/* <video controls autoplay muted loop>
            <source src='vid.mp4' type="video/mp4"></source>
            <p>SHOWREEL</p>
          </video> */}
              <div className="carousel w-full rounded-[20px]">
                <div id="slide1" className="carousel-item relative w-full">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                    className="w-full" />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                  </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                    className="w-full" />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                  </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                    className="w-full" />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                  </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                    className="w-full" />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center bg-black w-[100%]">
        <div className="main-foot flex flex-row justify-between h-[100vh] w-[80%]">
          <ul className="flex flex-col items-center justify-center text-[#8B8B8B]">
            <li className="mt-5">The Browser company of New York</li>
            <li className="mt-5">Mollie</li>
            <li className="mt-5">The Browser company of New York</li>
            <li className="mt-5">Mollie</li>
          </ul>
          <ul className="flex flex-col items-center justify-center text-[#8B8B8B]">
            <li className="mt-5">Perplexity</li>
            <li className="mt-5">Dribble</li>
            <li className="mt-5">Perplexity</li>
            <li className="mt-5">Dribble</li>
          </ul>
          <ul className="flex flex-col items-center justify-center text-[#8B8B8B]">
            <li className="mt-5">_zapier</li>
            <li className="mt-5">Lark</li>
            <li className="mt-5">_zapier</li>
            <li className="mt-5">Lark</li>
          </ul>
          <ul className="flex flex-col items-center justify-center text-[#8B8B8B]">
            <li className="mt-5">Whereby</li>
            <li className="mt-5">Bird</li>
            <li className="mt-5">Whereby</li>
            <li className="mt-5">Bird</li>
          </ul>
        </div>
        <div className="review flex h-[100vh] w-[80%] items-center justify-between">
          <div className="carousel flex-sm loop rounded-box w-[30%] h-[80vh]">
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                className="w-[60]"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                className="w-[60]"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                className="w-[60]"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                className="w-[60]"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                className="w-[60]"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                className="w-[60]"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                className="w-[60]"
                alt="Tailwind CSS Carousel component"
              />
            </div>
          </div>
          <div className="review01 flex-sm flex-col w-[50%] h-[80vh] items-start justify-start">
            <h2 className="text-5xl text-white m-5">
              What Our Customers Have to Say!
            </h2>
            <h1 className="text-3xl text-white m-5">CustomerName</h1>
            <p className="m-5 text-xl text-white">
              On October 8, researchers showed, for the first time, the
              possibility of water desalination without necessarily installing a
              large battery on site or connecting the water desalination system
              to the power grid.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className='w-full h-[100vh]   '>
          <div className=" p-5 w-full bg-[url('/Images/Portfolio1.png')] bg-cover bg-center  bg-no-repeat">
            <div className=' w-full p-10 flex justify-between h-[100vh] '>
              <div className={` text-white font-bold text-4xl w-80 pt-12 p-6 rounded-lg  transition-all duration-700 ease-in-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-40 opacity-0'
                }`}>
                <h1 >Tell me. </h1>
                <h1>work with me</h1>

              </div>

              <div className={`h-[450px] p-10  !bg-[#080808] rounded-[10px] items-center bg-transparent !bg-opacity-40 text-[13px] mr-5 transition-all duration-700 ease-in-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-40 opacity-0'
                }`}  >
                <form action="">
                  <div>
                    <input type="text" placeholder='name' className='w-64  p-3 mt-10 bg-transparent outline-none !bg-[rgb(50,50,51)] !bg-opacity-60 rounded-[10px] items-center text-white' />
                  </div>
                  <div>
                    <input type="email" placeholder='email' className='w-64  p-3 bg-transparent outline-none !bg-[rgb(50,50,51)] !bg-opacity-60 rounded-[10px] mt-7 pl-3 items-center text-white' />
                  </div>
                  <div>
                    <input type="text" placeholder='any msg type here ' className='w-64  p-3 bg-transparent outline-none !bg-[rgb(50,50,51)] !bg-opacity-60 rounded-[10px] mt-7 pl-3 pb-10 text-white ' />
                  </div>
                  <div>
                    <button className='w-64  mb-10 p-3 bg-transparent outline-none !bg-[rgb(50,50,51)] !bg-opacity-60 rounded-[10px] mt-7 pl-3 items-center text-[#F2FFF2]  font-bold'>Submit</button>
                  </div>
                </form>
              </div>

            </div>
        
          </div>

        </div>
      </section>

    </>
  );
}

export default Home;
