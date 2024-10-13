import './Home.css';
import React from 'react'
import { FaGripLines } from "react-icons/fa";



function Home() {
  return (
    <>
      <section className='h-[100vh] bg-[#050505] w-full'>
        <header className='bg-[#2D2D2D] px-2 sticky inset-0 z-10 h-[9vh] flex items-center justify-center'>
          <div className='flex items-center justify-between px-5 py-4 w-full'>

            <div className='flex items-center justify-center text-white'>
              Logo Here!
            </div>

            <div>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="flex items-center justify-center m-1"><FaGripLines size={20} className='text-white' /></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li><a>reel 1</a></li>
                  <li><a>reel 2</a></li>
                </ul>
              </div>

            </div>
          </div>
        </header>

        <main className='h-[91vh]'>
          <div className='flex flex-col items-center justify-center relative h-full'>
            <div className='flex items-start justify-center relative h-[60vh]'>
              <h1 className='text-[#303030] font-bold text-[200px]'>PORTFOLIO</h1>
            </div>
            <div className='flex justify-center h-[70vh] absolute bottom-0'>
              <img src='./Images/yourimage.webp' className=''></img>
            </div>
            <div className='flex justify-around items-center absolute bottom-5 rounded-[35px] border-2 text-white bg-[rgba(255,255,255,0.15)] gap-10 px-6 py-5'>
              <div>Work</div>
              <div>About Me</div>
              <div>Contact</div>
            </div>
          </div>
        </main>
      </section>


      <section className='bg-white w-full p-5 h-[100vh]'>
        <div className='flex items-center justify-around h-full'>
          <div className='flex items-center justify-center w-[25%] text-[#2D2D2D] bg-[#000000] h-[80vh] rounded-[20px]'>
            <div className='text-[#303030] font-bold text-[150px]'>REEL</div>
          </div>
          <div className='flex-col items-center justify-center w-[35%]'>
            <div><h1 className='text-[#303030] font-bold text-[180px]'>HELLO</h1></div>
            <div><p className='onlyPara text-[#303030] text-justify font-semibold text-[20px]'>This is Ashish Thakur, a graphic designer and video editor hailing from the beautiful city of Taj, Agra. Having worked with big brands, youtubers, and creators different fields such as EdTech, Marketing, Consulting, among others, my heart lies where beautiful designs and eye-catching videos do. My passion for creating compelling visual designs and videos that bring stories to life navigates my enthusiasm and pathway to success.</p></div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Home
