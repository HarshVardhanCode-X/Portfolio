import './Home.css';
import React from 'react'
import { FaGripLines } from "react-icons/fa";



function Home() {
  return (
    <>
      <section className='h-[100vh] bg-[#050505] w-full'>
        <header className='bg-[#2D2D2D] px-2 w-full sticky inset-0 z-10'>
          <div className='flex items-center justify-between px-5 py-4'>

            <div className='flex items-center justify-center text-white'>
              Logo Here!
            </div>

            <div>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="flex items-center justify-center m-1"><FaGripLines size={20} className='text-white'/></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li><a>reel 1</a></li>
                  <li><a>reel 2</a></li>
                </ul>
              </div>

            </div>
          </div>
        </header>

        <main className='h-[90vh]'>
          <div className='flex flex-column justify-center relative h-full'>
            <div className='flex items-center justify-center relative h-[70vh]'>
              <h1 className='text-[#303030] font-bold text-[200px]'>PORTFOLIO</h1>
            </div>
            <div className='flex justify-center h-[70vh] absolute bottom-0'>
              <img src='./Images/yourimage.webp' className=''></img>
            </div>
            <div></div>
          </div>
        </main>




      </section>



    </>
  )
}

export default Home
