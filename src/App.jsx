import React, { useState, useEffect, useRef } from 'react'
import './App.css'

function App () {
  const buttonThemenRef = useRef(null)
  const [theme, setTheme] = useState(false)

  const handleToggleTheme = () => {
    document.documentElement.classList.toggle('dark')
    setTheme(!theme)
  }
  useEffect(() => {
    buttonThemenRef.current.addEventListener('click', handleToggleTheme)
    return () => {
      buttonThemenRef.current.removeEventListener('click', handleToggleTheme)
    }
  }
  , [theme])

  return (
    <div className='App pt-16 pb-16 mx-5 '>

      <div className='flex justify-center m-auto mb-3'>
        <button ref={buttonThemenRef} className='rounded-full w-16 h-16 bg-slate-300 text-3xl dark:bg-slate-800'>
          {theme ? '🌞' : '🌙'}
        </button>
      </div>

      <div className='flex justify-center flex-col m-auto mb-16 text-center text-lg dark:text-slate-200'>
        <p className='font-bold mb-1'>Built by <a href='https://allmylinks.com/frankuxui' className='underline dark:text-white'>Frank Esteban</a></p>
        <p>Contact me on the different platforms and social networks</p>
        <div className='flex items-center justify-center space-x-2 mt-4 flex-wrap'>
          <a href='https://www.linkedin.com/in/frankuxui/' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <circle cx='4.983' cy='5.009' r='2.188' fill='currentColor' />
              <path d='M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://www.figma.com/@frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M15.332 8.668a3.333 3.333 0 0 0 0-6.663H8.668a3.333 3.333 0 0 0 0 6.663 3.333 3.333 0 0 0 0 6.665 3.333 3.333 0 0 0 0 6.664A3.334 3.334 0 0 0 12 18.664V8.668h3.332z' fill='currentColor' />
              <circle cx='15.332' cy='12' r='3.332' />
            </svg>
          </a>
          <a href='https://dribbble.com/frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M20.66 6.98a9.932 9.932 0 0 0-3.641-3.64C15.486 2.447 13.813 2 12 2s-3.486.447-5.02 1.34c-1.533.893-2.747 2.107-3.64 3.64S2 10.187 2 12s.446 3.487 1.34 5.02a9.924 9.924 0 0 0 3.641 3.64C8.514 21.553 10.187 22 12 22s3.486-.447 5.02-1.34a9.932 9.932 0 0 0 3.641-3.64C21.554 15.487 22 13.813 22 12s-.446-3.487-1.34-5.02zM12 3.66c2 0 3.772.64 5.32 1.919-.92 1.174-2.286 2.14-4.1 2.9-1.002-1.813-2.088-3.327-3.261-4.54A7.715 7.715 0 0 1 12 3.66zM5.51 6.8a8.116 8.116 0 0 1 2.711-2.22c1.212 1.201 2.325 2.7 3.34 4.5-2 .6-4.114.9-6.341.9-.573 0-1.006-.013-1.3-.04A8.549 8.549 0 0 1 5.51 6.8zM3.66 12c0-.054.003-.12.01-.2.007-.08.01-.146.01-.2.254.014.641.02 1.161.02 2.666 0 5.146-.367 7.439-1.1.187.373.381.793.58 1.26-1.32.293-2.674 1.006-4.061 2.14S6.4 16.247 5.76 17.5c-1.4-1.587-2.1-3.42-2.1-5.5zM12 20.34c-1.894 0-3.594-.587-5.101-1.759.601-1.187 1.524-2.322 2.771-3.401 1.246-1.08 2.483-1.753 3.71-2.02a29.441 29.441 0 0 1 1.56 6.62 8.166 8.166 0 0 1-2.94.56zm7.08-3.96a8.351 8.351 0 0 1-2.58 2.621c-.24-2.08-.7-4.107-1.379-6.081.932-.066 1.765-.1 2.5-.1.799 0 1.686.034 2.659.1a8.098 8.098 0 0 1-1.2 3.46zm-1.24-5c-1.16 0-2.233.047-3.22.14a27.053 27.053 0 0 0-.68-1.62c2.066-.906 3.532-2.006 4.399-3.3 1.2 1.414 1.854 3.027 1.96 4.84-.812-.04-1.632-.06-2.459-.06z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://codesandbox.io/u/frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M2 6l10.455-6L22.91 6 23 17.95 12.455 24 2 18V6zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272L4.088 8.481zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM5.134 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L5.133 6.6z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://codepen.io/frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M21.838 8.445c0-.001-.001-.001 0 0l-.003-.004-.001-.001v-.001a.809.809 0 0 0-.235-.228l-9.164-6.08a.834.834 0 0 0-.898 0L2.371 8.214A.786.786 0 0 0 2 8.897v6.16a.789.789 0 0 0 .131.448v.001l.002.002.01.015v.002h.001l.001.001.001.001c.063.088.14.16.226.215l9.165 6.082a.787.787 0 0 0 .448.139.784.784 0 0 0 .45-.139l9.165-6.082a.794.794 0 0 0 .371-.685v-6.16a.793.793 0 0 0-.133-.452zm-9.057-4.172 6.953 4.613-3.183 2.112-3.771-2.536V4.273zm-1.592 0v4.189l-3.771 2.536-3.181-2.111 6.952-4.614zm-7.595 6.098 2.395 1.59-2.395 1.611v-3.201zm7.595 9.311-6.96-4.617 3.195-2.15 3.765 2.498v4.269zm.795-5.653-3.128-2.078 3.128-2.105 3.131 2.105-3.131 2.078zm.797 5.653v-4.27l3.766-2.498 3.193 2.15-6.959 4.618zm7.597-6.11-2.396-1.611 2.396-1.59v3.201z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://tailwindcomponents.com/u/frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://github.com/frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://www.instagram.com/frankuxui/' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://dev.to/frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='30' height='30' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M7.73 11.93C7.73 13.65 7.71 13.76 7.5 14C7.31 14.17 7.12 14.23 6.74 14.23L6.23 14.24L6.2 11.97L6.18 9.7H6.7C7.05 9.7 7.3 9.77 7.47 9.91C7.71 10.12 7.73 10.16 7.73 11.93M22 7.5V16.5C22 17.61 21.11 18.5 20 18.5H4C2.89 18.5 2 17.61 2 16.5V7.5C2 6.39 2.89 5.5 4 5.5H20C21.11 5.5 22 6.39 22 7.5M8.93 11.73C8.9 9.89 8.88 9.74 8.64 9.34C8.24 8.66 7.79 8.5 6.28 8.5H5V15.5H6.21C7.54 15.5 8.1 15.33 8.5 14.79C8.91 14.26 9 13.81 8.93 11.73M13.12 8.5H11.64C10.15 8.5 10.14 8.5 9.93 8.78S9.7 9.21 9.7 12V14.96L9.97 15.23C10.22 15.5 10.28 15.5 11.68 15.5H13.12V14.31L12.03 14.27L10.93 14.24V12.6L11.61 12.57L12.27 12.53V11.34H10.88V9.7H13.12V8.5M19 8.56C19 8.5 18.7 8.5 18.34 8.5L17.66 8.56L17.07 10.91C16.69 12.39 16.45 13.18 16.4 13.04C16.32 12.77 15.26 8.6 15.26 8.55C15.26 8.5 14.95 8.5 14.58 8.5H13.89L14.3 10.05C14.5 10.92 14.89 12.33 15.11 13.2C15.45 14.55 15.57 14.85 15.86 15.14C16.06 15.36 16.31 15.5 16.47 15.5C16.8 15.5 17.23 15.16 17.37 14.77C17.5 14.5 19 8.69 19 8.56Z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://twitter.com/frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z' fill='currentColor' />
            </svg>
          </a>
        </div>
      </div>

      {/** container cards */}
      <div className='box-border m-auto max-w-[75rem] 3xl:max-w-[105rem] columns-1xs sm:columns-2xs md:columns-2 lg:columns-3 xl:columns-4 2xl:columns-4 3xl:columns-5'>

        {/** card */}
        <div className='break-inside relative flex items-center justify-between overflow-hidden rounded-xl mb-4 bg-white'>
          <img src='https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='Image' />
          <div className='absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-between text-white bg-[#4d00bd87]'>
            <a href='#' className='no-underline inline-block'>
              <h1 className='text-3xl font-bold leading-snug'>
                Web Design
                <br />
                Trends
              </h1>
            </a>
            <span>16 January 2017</span>
          </div>
        </div>

        {/** card */}
        <div className='break-inside relative flex flex-col justify-between overflow-hidden rounded-xl mb-4 text-sm bg-white dark:bg-slate-800 dark:text-slate-50'>
          <div className='relative flex flex-col justify-between text-white bg-black min-h-[10rem]'>
            <img src='https://images.pexels.com/photos/1742370/pexels-photo-1742370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='Imagen' />
            <div className='absolute top-0 p-6'>
              <span className='bg-[#00ff3e] px-3 py-1 rounded-md text-sm font-bold text-black'>NEWS</span>
            </div>
          </div>
          <div className='p-4 space-y-4'>
            <div className='flex flex-col space-y-2'>
              <h2 className='text-2xl font-bold'>News</h2>
              <p>16 January 2017</p>
            </div>
            <p>Lorem ipsum dolor sit amt amet de consectetet, consectetur 😋 🤪 😬 adipiscing elit, sed do eiusmod.</p>
            <div className='pt-4'>
              <div className='flex items-center space-x-4'>
                <img className='flex-none w-11 h-11 rounded-full object-cover' src='https://randomuser.me/api/portraits/women/44.jpg' alt='avatar' />
                <div className='flex-auto'>
                  <a href='#' className='no-underline text-base font-bold block text-blue-600 dark:text-white'>Bessie Cooper</a>
                  <span className='text-slate-500 dark:text-slate-400'>Web designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** card */}
        <div className='break-inside flex flex-col justify-between rounded-xl mb-4 text-sm overflow-hidden bg-white dark:bg-slate-800 dark:text-slate-50'>
          <div className='p-4'>
            <div className='flex items-center space-x-4'>
              <img className='flex-none w-12 h-12 rounded-full object-cover' src='https://randomuser.me/api/portraits/men/44.jpg' alt='avatar' />
              <div className='flex-auto'>
                <a href='#' className='no-underline text-base font-bold block text-blue-600 dark:text-white'>Tom</a>
                <span className='text-slate-500 dark:text-slate-400'>Photography</span>
              </div>
              <button className='flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:bg-slate-700'>
                <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                </svg>
              </button>
            </div>
          </div>
          <div className='flex flex-col justify-between space-y-1 text-white'>
            <div className='flex space-x-1'>
              <a href='#' className='flex-1'>
                <img src='https://images.pexels.com/photos/1227497/pexels-photo-1227497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' className='object-cover flex-1 w-full h-full' alt='Imagen' />
              </a>
              <a href='#' className='flex-1'>
                <img src='https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' className='object-cover flex-1 w-full h-full' alt='Imagen' />
              </a>
            </div>
            <div className='flex space-x-1'>
              <a href='#' className='flex-1'>
                <img src='https://images.pexels.com/photos/106144/rubber-duck-bath-duck-toys-costume-106144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' className='object-cover flex-1 w-full h-full' alt='Imagen' />
              </a>
              <a href='#' className='flex-1'>
                <img src='https://images.pexels.com/photos/1174932/pexels-photo-1174932.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' className='object-cover flex-1 w-full h-full' alt='Imagen' />
              </a>
              <a href='#' className='flex-1'>
                <img src='https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' className='object-cover flex-1 w-full h-full' alt='Imagen' />
              </a>
            </div>
          </div>
          <div className='flex justify-between p-4 bg-slate-100 dark:bg-slate-700'>
            <div className='flex items-center space-x-2'>
              <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M13.73,15L9.83,21.76C10.53,21.91 11.25,22 12,22C14.4,22 16.6,21.15 18.32,19.75L14.66,13.4M2.46,15C3.38,17.92 5.61,20.26 8.45,21.34L12.12,15M8.54,12L4.64,5.25C3,7 2,9.39 2,12C2,12.68 2.07,13.35 2.2,14H9.69M21.8,10H14.31L14.6,10.5L19.36,18.75C21,16.97 22,14.6 22,12C22,11.31 21.93,10.64 21.8,10M21.54,9C20.62,6.07 18.39,3.74 15.55,2.66L11.88,9M9.4,10.5L14.17,2.24C13.47,2.09 12.75,2 12,2C9.6,2 7.4,2.84 5.68,4.25L9.34,10.6L9.4,10.5Z' fill='currentColor' />
              </svg>
              <span className='font-medium'>23</span>
            </div>
            <button className='inline-flex justify-center items-center rounded-md py-1 px-4 font-medium tracking-wide transition-all bg-slate-800 text-white hover:bg-slate-900 dark:bg-slate-50 dark:text-black'>Visit</button>
          </div>
          <div className='p-4 space-y-4'>
            <div className='flex flex-col space-y-1'>
              <p>Photographic rolls</p>
              <h2 className='text-lg font-bold'>Salou, Tarragona</h2>
            </div>
            <p>Minim dolor in amet nulla laboris enim dolore consculpa eiusmod proident sed excepteur.</p>
          </div>
        </div>

        {/** card */}
        <div className='break-inside flex flex-col justify-between rounded-xl mb-4 text-sm overflow-hidden bg-white dark:bg-slate-800 dark:text-slate-50'>
          <div className='p-4'>
            <div className='flex items-center space-x-4'>
              <img className='flex-none w-12 h-12 rounded-full object-cover' src='https://randomuser.me/api/portraits/women/2.jpg' alt='avatar' />
              <div className='flex-auto'>
                <a href='#' className='no-underline text-base font-bold block text-blue-600 dark:text-white'>Marina</a>
                <span className='text-slate-500 dark:text-slate-400'>Graphic editor</span>
              </div>
              <button className='flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:bg-slate-700'>
                <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                </svg>
              </button>
            </div>
          </div>
          <div className='flex flex-col justify-between space-y-1 text-white'>
            <div className='flex space-x-1'>
              <a href='#' className='flex-1'>
                <img src='https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='object-cover w-full h-full' alt='Imagen' />
              </a>
              <a href='#' className='flex-1'>
                <img src='https://images.pexels.com/photos/1289669/pexels-photo-1289669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='object-cover w-full h-full' alt='Imagen' />
              </a>
            </div>
            <div className='flex space-x-1'>
              <a href='#' className='flex-1'>
                <img src='https://images.pexels.com/photos/1206967/pexels-photo-1206967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='object-cover w-full h-full' alt='Imagen' />
              </a>
              <a href='#' className='flex-1'>
                <img src='https://images.pexels.com/photos/1309102/pexels-photo-1309102.jpeg?cs=srgb&dl=pexels-steve-johnson-1309102.jpg&fm=jpg' className='object-cover w-full h-full' alt='Imagen' />
              </a>
            </div>
          </div>
          <div className='flex justify-between p-4'>
            <div className='flex items-center space-x-2'>
              <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M20,4H16.83L15,2H9L7.17,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,18H4V6H8.05L9.88,4H14.12L15.95,6H20V18M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15Z' fill='currentColor' />
              </svg>
              <span className='text-base font-medium'>18 k</span>
            </div>
            <button className='inline-flex justify-center items-center rounded-md py-2 px-4 font-medium tracking-wide text-xs uppercase transition-all border-2 border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black'>Visit gallery</button>
          </div>
        </div>

        {/** card */}
        <div className='break-inside flex flex-col justify-between rounded-xl mb-4 text-sm overflow-hidden bg-white dark:bg-slate-800 dark:text-slate-50'>
          <div className='flex flex-col justify-between space-y-1 text-white'>
            <div className='flex space-x-1'>
              <div className='flex-1 relative'>
                <div className='absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#000000] to-[#00000000]'>
                  <div className='flex items-center flex-row justify-between'>
                    <div className='mr-auto'>
                      <h3 className='text-lg font-medium'>Card overlay caption</h3>
                      <p>Alternative caption</p>
                    </div>
                    <button className='flex items-center justify-center hover:bg-[#ffffff27] rounded-full p-2 transition-all'>
                      <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                      </svg>
                    </button>
                  </div>
                </div>
                <img src='https://images.pexels.com/photos/1289669/pexels-photo-1289669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='object-cover w-full h-full' alt='Imagen' />
              </div>
            </div>
            <div className='flex space-x-1'>
              <a href='#' className='flex-1'>
                <img src='https://images.pexels.com/photos/1206967/pexels-photo-1206967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='object-cover w-full h-full' alt='Imagen' />
              </a>
              <a href='#' className='flex-1'>
                <img src='https://images.pexels.com/photos/1309102/pexels-photo-1309102.jpeg?cs=srgb&dl=pexels-steve-johnson-1309102.jpg&fm=jpg' className='object-cover w-full h-full' alt='Imagen' />
              </a>
            </div>
          </div>
          <div className='flex justify-between items-center p-4'>
            <dl className='text-sm font-medium flex items-center'>
              <dt className='sr-only'>Reviews</dt>
              <dd className='text-indigo-600 flex items-center dark:text-white'>
                <svg width='26' height='26' fill='none' aria-hidden='true' className='mr-1 stroke-current dark:stroke-indigo-500'>
                  <path d='m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
                <span>4.89 <span className='text-slate-400 font-normal'>(128)</span></span>
              </dd>
              <dt className='sr-only'>Location</dt>
            </dl>
            <button className='inline-flex justify-center items-center rounded-md py-2 px-4 font-medium tracking-wide text-xs uppercase transition-all border-2 border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black'>Buy now</button>
          </div>
        </div>

        {/** card */}
        <div className='break-inside flex flex-col justify-between rounded-xl mb-4 overflow-hidden bg-white dark:bg-slate-800 dark:text-slate-50'>
          <div className='flex flex-row justify-between space-x-1 text-white'>
            <div className='flex-1 relative group'>
              <div className='absolute top-0 left-0 w-full h-full transition-all opacity-0 group-hover:opacity-100 bg-[#000000b0]' />
              <div className='flex items-center justify-center absolute left-0 top-0 w-full h-full z-10'>
                <button className='flex items-center p-3 rounded-full transition-all opacity-0 -translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 text-white bg-[#ffffff27] hover:bg-white hover:text-black'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                    <path fill='currentColor' d='M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z' />
                  </svg>
                </button>
              </div>
              <img src='https://images.pexels.com/photos/288100/pexels-photo-288100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='object-cover w-full h-full' alt='Imagen' />
            </div>
            <div className='flex flex-1 flex-col space-y-1'>
              <div className='flex-1 relative group'>
                <div className='absolute top-0 left-0 w-full h-full transition-all opacity-0 group-hover:opacity-100 bg-[#000000b0]' />
                <div className='flex items-center justify-center absolute left-0 top-0 w-full h-full z-10'>
                  <button className='flex items-center p-3 rounded-full transition-all opacity-0 -translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 text-white bg-[#ffffff27] hover:bg-white hover:text-black'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                      <path fill='currentColor' d='M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z' />
                    </svg>
                  </button>
                </div>
                <img src='https://images.pexels.com/photos/2014745/pexels-photo-2014745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='object-cover w-full h-full' alt='Imagen' />
              </div>
              <div className='flex-1 relative group'>
                <div className='absolute top-0 left-0 w-full h-full transition-all opacity-0 group-hover:opacity-100 bg-[#000000b0]' />
                <div className='flex items-center justify-center absolute left-0 top-0 w-full h-full z-10'>
                  <button className='flex items-center p-3 rounded-full transition-all opacity-0 -translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 text-white bg-[#ffffff27] hover:bg-white hover:text-black'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                      <path fill='currentColor' d='M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z' />
                    </svg>
                  </button>
                </div>
                <img src='https://images.pexels.com/photos/3012723/pexels-photo-3012723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='object-cover w-full h-full' alt='Imagen' />
              </div>
            </div>
          </div>
          <div className='flex justify-between p-4'>
            <div className='flex items-center space-x-2'>
              <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2C17.5,2 22,6 22,11A6,6 0 0,1 16,17H14.2C13.9,17 13.7,17.2 13.7,17.5C13.7,17.6 13.8,17.7 13.8,17.8C14.2,18.3 14.4,18.9 14.4,19.5C14.5,20.9 13.4,22 12,22M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C12.3,20 12.5,19.8 12.5,19.5C12.5,19.3 12.4,19.2 12.4,19.1C12,18.6 11.8,18.1 11.8,17.5C11.8,16.1 12.9,15 14.3,15H16A4,4 0 0,0 20,11C20,7.1 16.4,4 12,4M6.5,10C7.3,10 8,10.7 8,11.5C8,12.3 7.3,13 6.5,13C5.7,13 5,12.3 5,11.5C5,10.7 5.7,10 6.5,10M9.5,6C10.3,6 11,6.7 11,7.5C11,8.3 10.3,9 9.5,9C8.7,9 8,8.3 8,7.5C8,6.7 8.7,6 9.5,6M14.5,6C15.3,6 16,6.7 16,7.5C16,8.3 15.3,9 14.5,9C13.7,9 13,8.3 13,7.5C13,6.7 13.7,6 14.5,6M17.5,10C18.3,10 19,10.7 19,11.5C19,12.3 18.3,13 17.5,13C16.7,13 16,12.3 16,11.5C16,10.7 16.7,10 17.5,10Z' fill='currentColor' />
              </svg>
              <span className='font-medium'>Paint</span>
            </div>
            <button className='inline-flex justify-center items-center rounded-md py-2 px-4 font-medium tracking-wide text-xs uppercase transition-all border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white  dark:text-blue-400 dark:hover:text-white'>Join for free</button>
          </div>
        </div>

        {/** card */}
        <div className='break-inside flex flex-col justify-between overflow-hidden rounded-xl mb-4 bg-white dark:bg-slate-800 dark:text-slate-50'>
          <div className='relative flex flex-col justify-between text-white bg-green-900 min-h-[14rem] transition-all hover:sepia'>
            <img src='https://images.pexels.com/photos/2698918/pexels-photo-2698918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Imagen' />
            <div className='absolute top-0 left-0 w-full h-full'>
              <div className='flex justify-end h-full flex-col'>
                <div className='p-6 bg-gradient-to-t from-[#000000] to-[#00000000]'>
                  <div className='flex items-center flex-row justify-between'>
                    <div className='mr-auto'>
                      <h3 className='text-4xl font-medium'>
                        <div>Jhon </div>
                        <div>Osteen </div>
                      </h3>
                    </div>
                    <button className='flex items-center justify-center hover:bg-[#ffffff27] rounded-full p-2 transition-all'>
                      <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** card */}
        <div className='break-inside flex flex-col justify-between overflow-hidden rounded-xl mb-4 group bg-white dark:bg-slate-800 dark:text-slate-50'>
          <div className='relative flex flex-col justify-between text-white bg-green-900 min-h-[14rem]'>
            <img src='https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='transition-all group-hover:scale-[1.1]' alt='Imagen' />
            <div className='absolute top-0 left-0 w-full h-full'>
              <div className='flex justify-end h-full flex-col'>
                <div className='p-6 bg-gradient-to-t from-[#000000] to-[#00000000]'>
                  <div className='flex items-center flex-col justify-center'>
                    <div className='text-lg flex items-center justify-center space-x-2'>
                      <span className='w-4 border border-white bg-white' />
                      <span>PARIS</span>
                      <span className='w-4 border border-white bg-white' />
                    </div>
                    <h3 className='text-3xl font-medium'>
                      <div>TOURS FRANCE </div>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** card */}
        <div className='break-inside flex flex-col justify-between overflow-hidden rounded-xl mb-4 text-sm bg-white dark:bg-slate-800 dark:text-slate-50'>
          <div className='relative flex flex-col justify-between text-white bg-green-900 min-h-[14rem]'>
            <img src='https://images.pexels.com/photos/1988681/pexels-photo-1988681.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='Imagen' />
            <div className='absolute top-0 left-0 w-full h-full'>
              <div className='flex justify-between h-full flex-col'>
                <div className='flex space-x-2 p-6'>
                  <span className='bg-[#00ff3e] px-3 py-1 rounded-md text-sm font-bold text-black'>FASHION</span>
                  <span className='bg-[#d4ff00] px-3 py-1 rounded-md text-sm font-bold text-black'>TRENDS</span>
                </div>
                <div className='p-6 bg-gradient-to-t from-[#000000] to-[#00000000]'>
                  <div className='flex items-center flex-row justify-between'>
                    <div className='mr-auto'>
                      <h3 className='text-lg font-medium'>Card overlay caption</h3>
                      <p>Alternative caption</p>
                    </div>
                    <button className='flex items-center justify-center hover:bg-[#ffffff27] rounded-full p-2 transition-all'>
                      <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='p-4 space-y-4'>
            <div className='flex flex-col space-y-2'>
              <h2 className='text-xl font-bold'>Fashion today</h2>
              <p>September 22</p>
            </div>
            <p>Minim dolor in amet nulla laboris enim dolore consequat proident fugia ❤ ❤ ❤ dolore.</p>
            <div className='pt-4'>
              <div className='flex items-center space-x-4'>
                <img className='flex-none w-12 h-12 rounded-full object-cover' src='https://randomuser.me/api/portraits/women/45.jpg' alt='avatar' />
                <div className='flex-auto'>
                  <a href='#' className='no-underline text-base font-bold block dark:text-white'>
                    Enmma
                  </a>
                  <span className='text-slate-500 dark:text-slate-400'>
                    Photography
                    <img src='https://twemoji.maxcdn.com/v/13.0.1/72x72/1f4f7.png' className='w-5 inline-block ml-2' />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** card */}
        <div className='break-inside flex flex-col justify-between overflow-hidden rounded-xl mb-4 text-sm bg-white'>
          <div className='relative flex flex-col justify-between text-white bg-green-900 min-h-[14rem]'>
            <img src='https://images.pexels.com/photos/544268/pexels-photo-544268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Imagen' />
            <div className='absolute top-0 left-0 w-full h-full'>
              <div className='flex justify-between h-full flex-col'>
                <div className='flex space-x-2 p-6'>
                  <span className='bg-[#c8ff00] px-3 py-1 rounded-md text-sm font-bold text-black'>FASHION</span>
                  <span className='bg-[#00ffc3] px-3 py-1 rounded-md text-sm font-bold text-black'>TRENDS</span>
                </div>
                <div className='p-6 bg-gradient-to-t from-[#000000] to-[#00000000]'>
                  <div className='flex items-center flex-row justify-between'>
                    <div className='mr-auto'>
                      <h3 className='text-xl font-medium'>Card overlay caption</h3>
                      <p>Alternative caption</p>
                    </div>
                    <button className='flex items-center justify-center hover:bg-[#ffffff27] rounded-full p-2 transition-all'>
                      <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** card */}
        <div className='break-inside relative flex flex-col p-6 justify-between rounded-xl mb-4 overflow-hidden bg-purple-600 text-white text-center text-lg'>
          <blockquote>
            <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere.</p>
            <footer>
              <small>
                Someone famous in
                <cite title='Source Title'>Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>

        {/** card */}
        <div className='break-inside flex flex-col justify-between overflow-hidden rounded-xl mb-4 text-sm bg-white dark:bg-slate-800 dark:text-slate-50'>
          <div className='relative flex flex-col justify-between text-white bg-green-900 min-h-[14rem]'>
            <img src='https://images.pexels.com/photos/1424981/pexels-photo-1424981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='Imagen' />
            <div className='absolute top-0 left-0 bg-pink-600 rounded-br-xl p-4'>
              <div className='flex flex-col items-center text-center'>
                <span className='font-bold text-2xl'>22</span>
                <span>SEP</span>
                <span>2022</span>
              </div>
            </div>
          </div>
          <div className='p-4 space-y-2'>
            <div className='flex flex-col'>
              <h2 className='text-xl font-bold'>New trends 🔥</h2>
            </div>
            <p>Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod proident sed excepteur.</p>
          </div>
        </div>

        {/** card */}
        <div className='break-inside flex flex-col justify-between rounded-xl mb-4 text-sm overflow-hidden bg-white dark:bg-slate-800 dark:text-slate-50'>
          <div className='p-5 space-y-4'>
            <div className='flex flex-col'>
              <h2 className='text-xl font-bold'>Exclusive</h2>
              <p>Published on october 16, 2021</p>
            </div>
          </div>
          <div className='relative flex flex-col justify-between text-white min-h-[14rem]'>
            <img src='https://images.pexels.com/photos/6470/black-and-white-creative-desk-pen.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='Imagen' />
            <div className='absolute top-0 p-6'>
              <span className='bg-[#00bfff] px-3 py-1 rounded-md text-sm font-bold text-white'>NEWS</span>
            </div>
          </div>
          <div className='p-4 space-y-4'>
            <div className='flex items-center space-x-4'>
              <img className='flex-none w-12 h-12 rounded-full object-cover' src='https://randomuser.me/api/portraits/men/45.jpg' alt='avatar' />
              <div className='flex-auto'>
                <a href='#' className='no-underline font-bold block dark:text-white'>Darrell Steward</a>
                <span className='text-slate-500 dark:text-slate-400'>Marketing Manager</span>
              </div>
            </div>
          </div>
        </div>

        {/** card */}
        <div className='break-inside flex flex-col justify-between rounded-xl mb-4 text-sm bg-white dark:bg-slate-800 dark:text-slate-50'>
          <div className='flex justify-between flex-row  items-center p-4 text-sm'>
            <h2 className='text-base font-bold'>Header</h2>
            <button className='flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 '>
              <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
              </svg>
            </button>
          </div>
          <div className='p-4 space-y-4'>
            <div className='flex items-center space-x-4'>
              <img className='flex-none w-12 h-12 rounded-full object-cover' src='https://randomuser.me/api/portraits/men/46.jpg' alt='avatar' />
              <div className='flex-auto'>
                <a href='#' className='text-base font-bold block dark:text-white'>Ralph Edwards</a>
                <span className='text-slate-500 dark:text-slate-400'>Dog Trainer</span>
              </div>
            </div>
            <div className='space-y-1'>
              <h4 className='text-base font-medium'>News</h4>
              <p>Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod.</p>
            </div>
          </div>
          <div className='flex p-4 flex-row items-center justify-between'>
            <div className='flex space-x-1'>
              <span className='px-3 py-1 rounded-full text-xs font-medium bg-slate-900 text-white dark:bg-white dark:text-black'>FASHION</span>
              <span className='px-3 py-1 rounded-full text-xs font-medium bg-slate-900 text-white dark:bg-white dark:text-black'>TRENDS</span>
            </div>
            <span className='text-sm'>April 23</span>
          </div>
        </div>

        {/** card */}
        <div className='break-inside flex flex-col justify-between rounded-xl mb-4 text-sm overflow-hidden bg-white dark:bg-slate-800 dark:text-slate-50'>
          <div className='flex justify-between items-center flex-col space-y-4'>
            <div className='flex flex-col items-center text-center p-6 space-y-2'>
              <img className='flex-none w-24 h-24 rounded-full object-cover' src='https://randomuser.me/api/portraits/women/47.jpg' alt='avatar' />
              <div>
                <h5 className='text-lg font-medium'>Gladys Fernandez</h5>
                <p>Marketing Coordinator</p>
              </div>
            </div>
            <div className='flex w-full text-center'>
              <a href='#' className='font-medium p-4 w-full transition-all hover:bg-slate-50 dark:hover:bg-slate-700'>
                FOLLOW
              </a>
            </div>
          </div>
        </div>

        {/** card */}
        <div className='break-inside flex flex-col justify-between rounded-xl mb-4 text-sm overflow-hidden bg-white dark:bg-slate-800 dark:text-slate-50'>
          <div className='min-h-[8rem] bg-blue-700'>
            <img src='https://images.pexels.com/photos/3757144/pexels-photo-3757144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-full h-[12rem] object-cover' />
          </div>
          <div className='flex justify-between items-center flex-col space-y-4'>
            <div className='flex flex-col items-center text-center space-y-2 -mt-10'>
              <img className='flex-none w-24 h-24 rounded-full object-cover shadow-xl' src='https://randomuser.me/api/portraits/men/49.jpg' alt='avatar' />
              <div>
                <h5 className='text-lg font-medium'>Marloon Buendia</h5>
                <p>Social assistant</p>
              </div>
            </div>
            <div className='flex w-full text-center'>
              <a href='#' className='font-medium p-4 w-full transition-all hover:bg-slate-50 dark:hover:bg-slate-700'>
                FOLLOW
              </a>
            </div>
          </div>
        </div>

        {/** card */}
        <div className='break-inside relative flex items-center justify-between overflow-hidden rounded-xl mb-4 text-sm'>
          <img src='https://images.pexels.com/photos/1906167/pexels-photo-1906167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-full object-cover min-h-[22rem]' alt='Image' />
          <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between text-white bg-[#500e57be]'>
            <div className='p-6 space-y-6'>
              <h1 className='text-4xl font-extrabold leading-snug text-white'>
                Best photo
                <br />
                package
              </h1>
              <button className='py-2 px-6 font-bold rounded-full bg-white text-black'>DONWLOAD</button>
            </div>
            <div className='p-6 bg-gradient-to-t from-[#000000b6] to-[#0000]'>16 January 2017</div>
          </div>
        </div>

        {/** card */}
        <div className='break-inside flex flex-col justify-between overflow-hidden rounded-xl mb-4 text-white bg-[#201422]'>
          <div className='p-6 space-y-3'>
            <h1 className='text-4xl font-extrabold leading-snug text-transparent bg-clip-text bg-gradient-to-tr from-[#EC6F66] to-[#F3A183]'>
              Buy best photo
              <br />
              package
            </h1>
            <button className='py-2 px-6 font-bold rounded-full text-black bg-gradient-to-tr from-[#EC6F66] to-[#F3A183] hover:shadow-2xl'>DONWLOAD</button>
          </div>
          <div className='flex justify-start items-center flex-row p-6 space-x-3'>
            <button className='flex items-center space-x-3 transition-all py-2 px-6 font-bold rounded-full text-[#ffcbc8] hover:bg-[#ffffff15]'>
              <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M5,9V21H1V9H5M9,21A2,2 0 0,1 7,19V9C7,8.45 7.22,7.95 7.59,7.59L14.17,1L15.23,2.06C15.5,2.33 15.67,2.7 15.67,3.11L15.64,3.43L14.69,8H21C22.11,8 23,8.9 23,10V12C23,12.26 22.95,12.5 22.86,12.73L19.84,19.78C19.54,20.5 18.83,21 18,21H9M9,19H18.03L21,12V10H12.21L13.34,4.68L9,9.03V19Z' fill='currentColor' />
              </svg>
              <span>147</span>
            </button>
            <button className='flex items-center space-x-3 transition-all py-2 px-6 font-bold rounded-full text-[#ffcbc8] hover:bg-[#ffffff15]'>
              <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M19,15V3H23V15H19M15,3A2,2 0 0,1 17,5V15C17,15.55 16.78,16.05 16.41,16.41L9.83,23L8.77,21.94C8.5,21.67 8.33,21.3 8.33,20.88L8.36,20.57L9.31,16H3C1.89,16 1,15.1 1,14V12C1,11.74 1.05,11.5 1.14,11.27L4.16,4.22C4.46,3.5 5.17,3 6,3H15M15,5H5.97L3,12V14H11.78L10.65,19.32L15,14.97V5Z' fill='currentColor' />
              </svg>
              <span>14</span>
            </button>
          </div>
        </div>

        {/** card */}
        <div className='break-inside relative min-h-[30rem] flex flex-col justify-between rounded-xl mb-4 overflow-hidden bg-white dark:bg-slate-800 dark:text-slate-50'>
          <img src='https://uploads.codesandbox.io/uploads/user/82fa41fe-2514-4525-afb4-b7eef7e3afc6/lagC-img-1.png' className='absolute object-cover w-wull' />
          <div className='absolute top-0 left-0 p-8 flex flex-col space-y-1'>
            <h2 className='text-2xl font-extrabold'>Buy Now</h2>
            <span className='text-lg font-bold'>€ 135.00</span>
          </div>
          <button className='absolute bottom-10 left-8 rounded-full p-3 transition-all text-black hover:bg-[#0000000a] dark:text-white dark:hover:bg-[#fff1]'>
            <svg width='24' height='24' viewBox='0 0 22 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M6 1.23792C3.239 1.23792 1 3.45391 1 6.18791C1 8.39491 1.875 13.6329 10.488 18.9279C10.6423 19.0218 10.8194 19.0714 11 19.0714C11.1806 19.0714 11.3577 19.0218 11.512 18.9279C20.125 13.6329 21 8.39491 21 6.18791C21 3.45391 18.761 1.23792 16 1.23792C13.239 1.23792 11 4.23792 11 4.23792C11 4.23792 8.761 1.23792 6 1.23792Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
            </svg>
          </button>
        </div>

        {/** card */}
        <div className='break-inside flex flex-col justify-between overflow-hidden rounded-xl mb-4 bg-white dark:bg-slate-800 dark:text-slate-50'>
          <div className='relative flex flex-col justify-between text-white bg-green-900 min-h-[14rem]'>
            <img src='https://images.pexels.com/photos/4424567/pexels-photo-4424567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='Imagen' className='w-full h-[25rem] object-cover' />
            <div className='absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#000000] to-[#00000000]'>
              <div className='flex items-center flex-row justify-between'>
                <div className='mr-auto'>
                  <span>Artist</span>
                  <h3 className='font-medium text-xl'>Cameron Williamson</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='p-6 flex  justify-between items-center'>
            <div className='flex flex-row items-center space-x-2'>
              <svg width='24' height='24' viewBox='0 0 22 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M6 1.23792C3.239 1.23792 1 3.45391 1 6.18791C1 8.39491 1.875 13.6329 10.488 18.9279C10.6423 19.0218 10.8194 19.0714 11 19.0714C11.1806 19.0714 11.3577 19.0218 11.512 18.9279C20.125 13.6329 21 8.39491 21 6.18791C21 3.45391 18.761 1.23792 16 1.23792C13.239 1.23792 11 4.23792 11 4.23792C11 4.23792 8.761 1.23792 6 1.23792Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
              </svg>
              <span className='text-xl font-bold'>35k</span>
            </div>
            <button className='inline-flex justify-center items-center rounded-md py-2 px-4 font-medium tracking-wide text-sm transition-all bg-blue-500 text-white hover:bg-blue-600'>Button</button>
          </div>
        </div>

        {/** card */}
        <div className='break-inside flex flex-col justify-between overflow-hidden rounded-xl mb-4 text-sm bg-white dark:bg-slate-800 dark:text-slate-50'>
          <div className='relative flex flex-col justify-between text-white bg-green-900 min-h-[14rem]'>
            <img src='https://images.pexels.com/photos/3584283/pexels-photo-3584283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='Imagen' />
            <div className='absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#000000] to-[#00000000]'>
              <div className='flex items-center flex-row justify-between'>
                <button className='inline-flex justify-center items-center rounded-full py-2 px-4 font-medium tracking-wide text-sm transition-all bg-[#00b45d] text-white hover:bg-[#00944d]'>EXCLUSIVE</button>
                <button className='inline-flex justify-center items-center rounded-full space-x-2 py-2 px-4 font-medium tracking-wide transition-all bg-white text-black'>
                  <svg width='18' height='18' viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M17.1206 22.0917C16.7435 22.0894 16.3746 21.9811 16.0561 21.7792L11.3295 18.7812L6.94478 21.5644C6.58457 21.794 6.16337 21.9095 5.73641 21.8955C5.30945 21.8816 4.89667 21.7389 4.55221 21.4863C4.19609 21.2294 3.92553 20.8712 3.77575 20.4584C3.62596 20.0456 3.60387 19.5973 3.71236 19.1718L4.99166 14.1718L0.72408 10.6269C0.414555 10.3655 0.189833 10.0179 0.0785303 9.6283C-0.0327721 9.23874 -0.0256185 8.82487 0.0990802 8.43939C0.221194 8.05796 0.454908 7.72192 0.770011 7.47472C1.08512 7.22751 1.46712 7.08049 1.86666 7.05268L7.41353 6.70111L9.48385 1.4765C9.62929 1.10544 9.8832 0.786828 10.2125 0.562243C10.5417 0.337659 10.931 0.217529 11.3295 0.217529C11.7281 0.217529 12.1174 0.337659 12.4466 0.562243C12.7759 0.786828 13.0298 1.10544 13.1753 1.4765L15.2456 6.70111L20.7924 7.05268C21.192 7.08049 21.574 7.22751 21.8891 7.47472C22.2042 7.72192 22.4379 8.05796 22.56 8.43939C22.6847 8.82487 22.6919 9.23874 22.5806 9.6283C22.4693 10.0179 22.2445 10.3655 21.935 10.6269L17.6674 14.1718L19.0444 19.5722C19.1465 19.9649 19.1274 20.3793 18.9897 20.761C18.8521 21.1427 18.6022 21.4738 18.2729 21.7109C17.9393 21.9576 17.5355 22.0911 17.1206 22.0917ZM11.3295 16.3788C11.7029 16.3764 12.0691 16.4815 12.3842 16.6816L16.5639 19.3281L15.353 14.5527C15.2593 14.1815 15.2719 13.7915 15.3893 13.4271C15.5067 13.0627 15.7243 12.7387 16.017 12.4921L19.8061 9.33783L14.8745 9.02533C14.4984 8.99848 14.1376 8.866 13.8336 8.64314C13.5295 8.42027 13.2945 8.11608 13.1557 7.76557L11.3295 3.17572L9.50338 7.76557C9.36457 8.11608 9.12961 8.42027 8.82555 8.64314C8.52148 8.866 8.16066 8.99848 7.78463 9.02533L2.85299 9.33783L6.64205 12.4921C6.93484 12.7387 7.15237 13.0627 7.26979 13.4271C7.38721 13.7915 7.3998 14.1815 7.30611 14.5527L6.09517 19.3281L10.2749 16.6816C10.59 16.4815 10.9562 16.3764 11.3295 16.3788Z' fill='currentColor' /></svg>
                  <span>8.5</span>
                </button>
              </div>
            </div>
          </div>
          <div className='p-6 flex flex-col justify-between'>
            <div className='flex flex-col items-start space-y-1'>
              <span>Barcelona, Spain</span>
              <h2 className='text-2xl font-bold'>Hotel, Cromwell International</h2>
            </div>
            <div className='flex justify-between items-center flex-row'>
              <span className='text-xl font-bold'>€365.99</span>
              <button className='p-4 transition-all rounded-full hover:bg-slate-100 dark:hover:bg-slate-700'>
                <svg width='22' height='22' viewBox='0 0 22 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M6 1.23792C3.239 1.23792 1 3.45391 1 6.18791C1 8.39491 1.875 13.6329 10.488 18.9279C10.6423 19.0218 10.8194 19.0714 11 19.0714C11.1806 19.0714 11.3577 19.0218 11.512 18.9279C20.125 13.6329 21 8.39491 21 6.18791C21 3.45391 18.761 1.23792 16 1.23792C13.239 1.23792 11 4.23792 11 4.23792C11 4.23792 8.761 1.23792 6 1.23792Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/** card */}
        <div className='break-inside flex flex-col justify-between rounded-xl mb-4 overflow-hidden bg-white dark:bg-slate-800 dark:text-slate-50'>
          <div className='min-h-[8rem] w-full bg-gradient-to-tl from-[#a200ff] to-[#8000ff]' />
          <div className='flex justify-between items-center flex-col space-y-4'>
            <div className='flex flex-col items-center text-center space-y-2 -mt-10'>
              <img className='flex-none w-24 h-24 rounded-full object-cover ring-4 ring-white dark:ring-slate-800' src='https://randomuser.me/api/portraits/men/51.jpg' alt='avatar' />
              <div>
                <h5 className='text-lg font-medium'>Gazpar Martinez</h5>
                <p>Physics teacher</p>
              </div>
            </div>
            <div className='flex justify-evenly items-center flex-row w-full pr-6 pl-6 pb-6'>
              <button className='p-2 rounded-full transition-all hover:bg-slate-100 dark:hover:bg-slate-700'>
                <svg width='24' height='24' viewBox='0 0 24 24'>
                  <path fill='currentColor' d='M9.04,21.54C10,21.83 10.97,22 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2A10,10 0 0,0 2,12C2,16.25 4.67,19.9 8.44,21.34C8.35,20.56 8.26,19.27 8.44,18.38L9.59,13.44C9.59,13.44 9.3,12.86 9.3,11.94C9.3,10.56 10.16,9.53 11.14,9.53C12,9.53 12.4,10.16 12.4,10.97C12.4,11.83 11.83,13.06 11.54,14.24C11.37,15.22 12.06,16.08 13.06,16.08C14.84,16.08 16.22,14.18 16.22,11.5C16.22,9.1 14.5,7.46 12.03,7.46C9.21,7.46 7.55,9.56 7.55,11.77C7.55,12.63 7.83,13.5 8.29,14.07C8.38,14.13 8.38,14.21 8.35,14.36L8.06,15.45C8.06,15.62 7.95,15.68 7.78,15.56C6.5,15 5.76,13.18 5.76,11.71C5.76,8.55 8,5.68 12.32,5.68C15.76,5.68 18.44,8.15 18.44,11.43C18.44,14.87 16.31,17.63 13.26,17.63C12.29,17.63 11.34,17.11 11,16.5L10.33,18.87C10.1,19.73 9.47,20.88 9.04,21.57V21.54Z' />
                </svg>
              </button>
              <button className='p-2 rounded-full transition-all hover:bg-slate-100 dark:hover:bg-slate-700'>
                <svg width='24' height='24' viewBox='0 0 24 24'>
                  <path fill='currentColor' d='M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z' />
                </svg>
              </button>
              <button className='p-2 rounded-full transition-all hover:bg-slate-100 dark:hover:bg-slate-700'>
                <svg width='24' height='24' viewBox='0 0 24 24'>
                  <path fill='currentColor' d='M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z' />
                </svg>
              </button>
              <button className='p-2 rounded-full transition-all hover:bg-slate-100 dark:hover:bg-slate-700'>
                <svg width='24' height='24' viewBox='0 0 24 24'>
                  <path fill='currentColor' d='M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z' />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/** card */}
        <div className='break-inside flex flex-col justify-between rounded-xl mb-4 text-sm overflow-hidden bg-white dark:bg-slate-800 dark:text-slate-50'>
          <div className='p-4 space-y-2'>
            <h2 className='text-2xl font-bold'>Vector pack</h2>
            <p>Minim dolor in amet nulla laboris enim dolore consequat proident fugiat hola morsiculpa eiusmod 🎭🎨.</p>
          </div>
          <img src='https://images.pexels.com/photos/9669040/pexels-photo-9669040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
          <div className='flex justify-between p-4 bg-slate-100 dark:bg-slate-700'>
            <div className='flex items-center space-x-2'>
              <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M2,4H4V2H10V4A10,10 0 0,1 20,14H22V20H20V22H18V20H16V14H18A8,8 0 0,0 10,6V8H4V6H2V4M18,16V18H20V16H18M6,4V6H8V4H6Z' fill='currentColor' />
              </svg>
              <span className='font-medium'>23k</span>
            </div>
            <button className='inline-flex justify-center items-center rounded-full py-2 px-6 font-medium tracking-wide transition-all bg-slate-800 text-white hover:bg-slate-900 dark:bg-slate-50 dark:text-black'>Buy now</button>
          </div>
          <div className='p-4 space-x-4'>
            <span className='text-xl font-bold line-through text-red-600'>€18.99</span>
            <span className='text-2xl font-bold'>€10.99</span>
          </div>
        </div>

        {/** card */}
        <div className='break-inside p-4 flex flex-col justify-between rounded-xl mb-4 text-sm bg-white dark:bg-slate-800 dark:text-slate-50'>
          <div className='space-y-4'>
            <div className='flex items-center space-x-4'>
              <img className='flex-none w-12 h-12 rounded-full object-cover' src='https://randomuser.me/api/portraits/women/55.jpg' alt='avatar' />
              <div className='flex-auto'>
                <a href='#' className='text-lg font-bold block dark:text-white'>Angelina Mconoor</a>
                <span className='text-slate-500 dark:text-slate-400'>Dog Trainer</span>
              </div>
            </div>
            <div className='space-y-2'>
              <h4 className='text-2xl font-extrabold leading-snug'>Web Design templates Selection</h4>
              <p>Minim dolor in amet nulla laboris enim dolore conequat proide.</p>
            </div>
          </div>
        </div>

        {/** card */}
        <div className='break-inside p-6 flex flex-col justify-between rounded-xl mb-4 bg-black text-white'>
          <div className='space-y-4'>
            <div className='flex items-center flex-col justify-center text-center space-y-4'>
              <img className='flex-none w-20 h-20 rounded-full ring-4 ring-[#81d200] border-4 border-black object-cover' src='https://randomuser.me/api/portraits/women/55.jpg' alt='avatar' />
              <div className='text-center'>
                <a href='#' className='text-lg font-bold block'>Monica De Armas</a>
                <span className='text-slate-100'>Dog Trainer 🐶</span>
              </div>
            </div>
            <div className='space-y-4 text-center'>
              <h4 className='text-3xl font-extrabold leading-snug text-transparent bg-clip-text bg-gradient-to-tr from-[#81d200] to-[#24d3ff]'>Web Design templates Selection</h4>
              <p>Minim dolor in amet nulla laboris enim dolore consequat proident.</p>
              <button className='py-2 px-4 font-bold rounded-full uppercase text-black bg-gradient-to-tr from-[#81d200] to-[#24ffd7] hover:shadow-2xl'>VIEW PROFILE</button>
            </div>
          </div>
        </div>

        {/** card */}
        <div className='break-inside flex flex-col justify-between overflow-hidden rounded-xl mb-4 group bg-white text-white'>
          <div className='relative flex flex-col justify-between text-white bg-green-900 min-h-[14rem]'>
            <img src='https://images.pexels.com/photos/917594/pexels-photo-917594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Imagen' />
            <div className='absolute top-0 left-0 w-full h-full'>
              <div className='flex justify-between h-full flex-col'>
                <div className='flex justify-end space-x-2 p-6 bg-gradient-to-t from-[#00000000] to-[#000000]'>
                  <button className='flex items-center justify-center text-white rounded-full p-2 transition-all group-hover:bg-white group-hover:text-black'>
                    <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z' fill='currentColor' />
                    </svg>
                  </button>
                  <button className='flex items-center justify-center text-white rounded-full p-2 transition-all group-hover:bg-white group-hover:text-black'>
                    <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55M16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z' fill='currentColor' />
                    </svg>
                  </button>
                </div>
                <div className='p-6 bg-gradient-to-t from-[#000000] to-[#00000000]'>
                  <div className='flex items-center flex-row justify-between'>
                    <div className='flex items-center space-x-4'>
                      <img className='flex-none w-10 h-10 rounded-full object-cover' src='https://randomuser.me/api/portraits/men/35.jpg' alt='avatar' />
                      <div className='flex-auto'>
                        <a href='#' className='no-underline font-bold block'>
                          Frank Esteban
                        </a>
                      </div>
                    </div>
                    <button className='flex items-center justify-center text-white rounded-full p-2 transition-all group-hover:bg-white group-hover:text-black'>
                      <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 15L17.55 9.54L16.13 8.13L13 11.25V2H11V11.25L7.88 8.13L6.46 9.55L12 15Z' fill='currentColor' />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** card */}
        <div className='break-inside p-6 flex flex-col justify-between rounded-xl mb-4 text-sm bg-white dark:bg-slate-800 dark:text-slate-50'>
          <div className='space-y-4'>
            <div className='flex justify-between flex-row items-center space-x-4'>
              <div className='flex-auto flex flex-row space-x-4'>
                <img className='flex-none w-11 h-11 rounded-full object-cover' src='https://randomuser.me/api/portraits/men/33.jpg' alt='avatar' />
                <div className='flex flex-col'>
                  <a href='#' className='text-base font-bold block dark:text-white'>Lorenzo Jimenez</a>
                  <a href='#' className='font-medium text-sm underline text-green-500 dark:text-slate-300'>Publication</a>
                </div>
              </div>
              <button className='flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700'>
                <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                </svg>
              </button>
            </div>
            <div className='space-y-4'>
              <h4 className='text-2xl font-extrabold leading-snug'>We must protect the environment</h4>
              <span className='text-slate-500 dark:text-slate-400'>September 23, 2021</span>
              <p>Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod.</p>
              <div className='flex flex-row space-x-1'>
                <span className='px-2 text-sm py-1 rounded-md bg-green-600 text-white'>Environment</span>
                <span className='px-2 text-sm py-1 rounded-md bg-green-600 text-white'>Biology</span>
                <span className='px-2 text-sm py-1 rounded-md bg-green-600 text-white'>Science</span>
              </div>
            </div>
            <div className='flex flex-row justify-between'>
              <a href='#' className='flex items-center font-medium space-x-1 group'>
                <span className='p-3 rounded-full group-hover:bg-slate-100 dark:group-hover:bg-slate-700'>
                  <svg viewBox='0 0 24 24' width='20' height='20' aria-hidden='true'>
                    <g>
                      <path fill='currentColor' d='M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z' />
                    </g>
                  </svg>
                </span>
                <span>43</span>
              </a>
              <a href='#' className='flex items-center font-medium space-x-1 group'>
                <span className='p-3 rounded-full group-hover:bg-slate-100 dark:group-hover:bg-slate-700'>
                  <svg viewBox='0 0 24 24' width='20' height='20' aria-hidden='true'>
                    <g>
                      <path fill='currentColor' d='M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z' />
                      <path fill='currentColor' d='M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z' />
                    </g>
                  </svg>
                </span>
                <span>82</span>
              </a>
              <a href='#' className='flex items-center font-medium space-x-1 group'>
                <span className='p-3 rounded-full group-hover:bg-slate-100 dark:group-hover:bg-slate-700'>
                  <svg viewBox='0 0 24 24' width='20' height='20' aria-hidden='true'>
                    <g>
                      <path fill='currentColor' d='M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z' />
                    </g>
                  </svg>
                </span>
                <span>169</span>
              </a>
            </div>
          </div>
        </div>

        {/** card */}
        <div className='break-inside p-6 flex flex-col justify-between rounded-xl mb-4 text-sm bg-white dark:bg-slate-800 dark:text-slate-50'>
          <div className='flex justify-between'>
            <div className='flex items-center space-x-1'>
              <svg viewBox='0 0 24 24' width='26' height='26'>
                <path fill='currentColor' d='M4.59,6.89C5.29,6.18 6,5.54 6.3,5.67C6.8,5.87 6.3,6.7 6,7.19C5.75,7.61 3.14,11.08 3.14,13.5C3.14,14.78 3.62,15.84 4.5,16.5C5.23,17.04 6.22,17.21 7.12,16.94C8.19,16.63 9.07,15.54 10.18,14.17C11.39,12.68 13,10.73 14.26,10.73C15.89,10.73 15.91,11.74 16,12.5C12.24,13.16 10.64,16.19 10.64,17.89C10.64,19.59 12.08,21 13.85,21C15.5,21 18.14,19.65 18.54,14.88H21V12.38H18.53C18.38,10.73 17.44,8.18 14.5,8.18C12.25,8.18 10.32,10.09 9.56,11C9,11.75 7.5,13.5 7.27,13.74C7,14.04 6.59,14.58 6.16,14.58C5.71,14.58 5.44,13.75 5.8,12.66C6.15,11.57 7.2,9.8 7.65,9.14C8.43,8 8.95,7.22 8.95,5.86C8.95,3.69 7.31,3 6.44,3C5.12,3 3.97,4 3.72,4.25C3.36,4.61 3.06,4.91 2.84,5.18L4.59,6.89M13.88,18.55C13.57,18.55 13.14,18.29 13.14,17.83C13.14,17.23 13.87,15.63 16,15.07C15.71,17.76 14.58,18.55 13.88,18.55Z' />
              </svg>
              <div className='flex-auto'>
                <a href='#' className='text-xl font-bold block dark:text-white'>My draft</a>
              </div>
            </div>
            <div className='flex items-center space-x-1 text-slate-500 dark:text-slate-400'>
              <svg viewBox='0 0 24 24' width='18' height='18'>
                <path fill='currentColor' d='M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M17 13.9L16.3 15.2L11 12.3V7H12.5V11.4L17 13.9Z' />
              </svg>
              <span className='uppercase text-sm font-medium'>3 min ago</span>
            </div>
          </div>
          <div className='py-6 space-y-3'>
            <h4 className='text-xl font-extrabold leading-snug'>Web Design templates Selection</h4>
            <img src='https://images.pexels.com/photos/1158783/pexels-photo-1158783.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' className='rounded-xl h-[8rem] w-full object-cover' />
            <p className='uppercase text-sm text-slate-500 font-medium dark:text-slate-400'>Introduction</p>
            <p>Minim dolor in amet nulla laboris enim dolore consequat...</p>
          </div>
          <div className='flex justify-between'>
            <div className='flex items-center space-x-4'>
              <a href='#' className='font-medium text-sm uppercase block dark:text-white'>Read more</a>
            </div>
            <button className='flex items-center justify-center rounded-full p-3 transition-all hover:bg-slate-200 dark:hover:bg-slate-700'>
              <svg viewBox='0 0 24 24' width='22' height='22'>
                <path fill='currentColor' d='M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z' />
              </svg>
            </button>
          </div>
        </div>

        {/** card */}
        <div className='break-inside p-4 flex flex-col justify-between rounded-xl mb-4 text-sm bg-white dark:bg-slate-800 dark:text-slate-50 group'>
          <div className='flex justify-between'>
            <div className='flex items-center space-x-2'>
              <svg viewBox='0 0 24 24' width='28' height='28'>
                <path fill='currentColor' d='M4.59,6.89C5.29,6.18 6,5.54 6.3,5.67C6.8,5.87 6.3,6.7 6,7.19C5.75,7.61 3.14,11.08 3.14,13.5C3.14,14.78 3.62,15.84 4.5,16.5C5.23,17.04 6.22,17.21 7.12,16.94C8.19,16.63 9.07,15.54 10.18,14.17C11.39,12.68 13,10.73 14.26,10.73C15.89,10.73 15.91,11.74 16,12.5C12.24,13.16 10.64,16.19 10.64,17.89C10.64,19.59 12.08,21 13.85,21C15.5,21 18.14,19.65 18.54,14.88H21V12.38H18.53C18.38,10.73 17.44,8.18 14.5,8.18C12.25,8.18 10.32,10.09 9.56,11C9,11.75 7.5,13.5 7.27,13.74C7,14.04 6.59,14.58 6.16,14.58C5.71,14.58 5.44,13.75 5.8,12.66C6.15,11.57 7.2,9.8 7.65,9.14C8.43,8 8.95,7.22 8.95,5.86C8.95,3.69 7.31,3 6.44,3C5.12,3 3.97,4 3.72,4.25C3.36,4.61 3.06,4.91 2.84,5.18L4.59,6.89M13.88,18.55C13.57,18.55 13.14,18.29 13.14,17.83C13.14,17.23 13.87,15.63 16,15.07C15.71,17.76 14.58,18.55 13.88,18.55Z' />
              </svg>
              <div className='flex-auto'>
                <a href='#' className='text-xl font-bold block dark:text-white'>Paint</a>
              </div>
            </div>
            <div className='flex items-center space-x-1 text-slate-500 dark:text-slate-400'>
              <svg viewBox='0 0 24 24' width='18' height='18'>
                <path fill='currentColor' d='M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M17 13.9L16.3 15.2L11 12.3V7H12.5V11.4L17 13.9Z' />
              </svg>
              <span className='uppercase font-medium'>12 min ago</span>
            </div>
          </div>
          <div className='py-6 space-y-3'>
            <div className='relative rounded-xl overflow-hidden'>
              <img src='https://images.pexels.com/photos/12499066/pexels-photo-12499066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='h-[14rem] w-full object-cover' />
              <div className='absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#000000] to-[#00000000]'>
                <div className='flex items-center flex-row justify-between'>
                  <div className='flex items-center space-x-4'>
                    <img className='flex-none w-8 h-8 rounded-full object-cover' src='https://randomuser.me/api/portraits/men/35.jpg' alt='avatar' />
                    <div className='flex-auto'>
                      <a href='#' className='no-underline text-sm font-medium block text-white'>
                        Williams
                      </a>
                    </div>
                  </div>
                  <button className='flex items-center justify-center text-white rounded-full p-2 transition-all group-hover:bg-white group-hover:text-black'>
                    <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z' fill='currentColor' />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <p className='uppercase text-sm text-slate-500 font-medium dark:text-slate-400'>Introduction</p>
            <p>Minim dolor in amet nulla laboris enim dolore consequat.</p>
          </div>
          <div className='flex justify-between'>
            <div className='flex items-center space-x-4'>
              <a href='#' className='font-medium text-sm uppercase block dark:text-white'>Read more</a>
            </div>
            <button className='flex items-center justify-center rounded-full p-2 transition-all hover:bg-slate-200 dark:hover:bg-slate-700'>
              <svg viewBox='0 0 24 24' width='20' height='20'>
                <path fill='currentColor' d='M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z' />
              </svg>
            </button>
          </div>
        </div>

        {/** card */}
        <div className='break-inside p-4 flex flex-col justify-between rounded-xl mb-4 text-sm bg-white dark:bg-slate-800 dark:text-slate-50'>
          <div className='space-y-4'>
            <div className='flex justify-between flex-row items-center space-x-4'>
              <div className='flex-auto flex flex-row space-x-4'>
                <img className='flex-none w-12 h-12 rounded-full object-cover' src='https://randomuser.me/api/portraits/women/33.jpg' alt='avatar' />
                <div className='flex flex-col'>
                  <a href='#' className='text-base font-bold block dark:text-white'>Emma Johnson </a>
                  <span>Electronic technician</span>
                </div>
              </div>
            </div>
            <div className='py-4 space-y-4'>
              <h4 className='text-lg font-bold leading-snug'>The care of animals and our planet only depends on you</h4>
              <div className='grid grid-cols-2 gap-2'>
                <img src='https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='object-cover rounded-lg' alt='Image' />
                <img src='https://images.pexels.com/photos/133459/pexels-photo-133459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='object-cover rounded-lg' alt='Image' />
              </div>
              <p>Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod.</p>
            </div>
          </div>
        </div>

        {/** card */}
        <a href='#' className='break-inside flex flex-col justify-between rounded-xl mb-4 text-sm text-black dark:text-white'>
          <div className='space-y-4'>
            <div className='flex items-center space-x-4'>
              <img src='https://images.pexels.com/photos/315987/pexels-photo-315987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='object-cover rounded-lg' alt='Image' />
            </div>
            <div className='space-y-2'>
              <h4 className='text-2xl font-extrabold leading-snug'>Web Design templates Selection</h4>
              <p>Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod.</p>
            </div>
          </div>
        </a>

        {/** card */}
        <a href='#' className='break-inside flex flex-col justify-between rounded-xl mb-4 text-black dark:text-white group'>
          <div className='space-y-4'>
            <div className='relative'>
              <img src='https://images.pexels.com/photos/5733747/pexels-photo-5733747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='object-cover rounded-lg saturate-100' alt='Image' />
              <div className='p-6 absolute top-0 left-0 w-full flex justify-end'>
                <button className='flex items-center justify-center text-white rounded-full p-2 transition-all group-hover:bg-white group-hover:text-black'>
                  <svg width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z' fill='currentColor' />
                  </svg>
                </button>
              </div>
            </div>
            <div className='flex flex-col text-sm'>
              <div className='flex justify-between font-medium mb-2'>
                <span>Opel Astra</span>
                <span className='line-through'>19.490 €</span>
              </div>
              <div className='flex justify-between items-center font-bold'>
                <span>GS-LINE 1.2T 130CV 5P</span>
                <span className='text-blue-600 dark:text-blue-400'>19.490 €</span>
              </div>
              <div className='flex justify-between items-center text-slate-500'>
                <span>2020 · 40.418 km · 130CV · Gasolina · Manual</span>
              </div>
              <div className='flex text-xl font-bold'>
                <span>230 € /mes</span>
              </div>
            </div>
          </div>
        </a>

        {/** card */}
        <a href='#' className='break-inside flex flex-col justify-between rounded-xl mb-4 text-black dark:text-white group'>
          <div className='flex flex-col'>
            <div className='relative'>
              <img src='https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='object-cover rounded-lg saturate-100' alt='Image' />
              <div className='p-4 absolute top-0 left-0 w-full flex justify-between items-center'>
                <span className='px-3 py-1 text-xs                               rounded-full bg-[#0e0101] text-white'>Reservado</span>
                <button className='flex items-center justify-center text-slate-500 rounded-full p-2 transition-all group-hover:bg-slate-100 group-hover:text-black'>
                  <svg width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z' fill='currentColor' />
                  </svg>
                </button>
              </div>
            </div>
            <div className='px-3 -mt-5 z-10 relative'>
              <div className='p-4 text-sm flex flex-col rounded-lg hover:shadow-2xl transition-all bg-white dark:bg-slate-800'>
                <div className='flex justify-between font-medium mb-2'>
                  <span>Audi A3</span>
                  <span className='line-through'>24.490 €</span>
                </div>
                <div className='flex justify-between font-bold'>
                  <span>GS-LINE 1.2T 130CV..</span>
                  <span className='text-blue-600 dark:text-blue-400'>19.490 €</span>
                </div>
                <div className='flex justify-between text-slate-500'>
                  <span>2020 · 40.418 km Gasolina..</span>
                </div>
                <div className='flex text-lg font-bold mt-3'>
                  <span>230 € /mes</span>
                </div>
              </div>
            </div>
          </div>
        </a>

        {/** card */}
        <a href='#' className='break-inside flex flex-col justify-between rounded-xl mb-4 text-black dark:text-white group'>
          <div className='space-y-4'>
            <div className='relative'>
              <img src='https://images.pexels.com/photos/6540939/pexels-photo-6540939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='object-cover rounded-lg saturate-100' alt='Image' />
              <button className='absolute right-0 top-4 flex items-center justify-center text-black px-4 py-3 bg-white'>
                <svg viewBox='0 0 24 24' width='20' height='20' aria-hidden='true'>
                  <g>
                    <path fill='currentColor' d='M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z' />
                  </g>
                </svg>
              </button>
              <div className='absolute bottom-4 left-0 px-2 py-2 uppercase text-sm font-medium bg-white text-black'>
                Sneakerlove
              </div>
              <button className='absolute p-3 bg-[#ffffffcd] top-[49%] opacity-0 left-1/2 -translate-x-1/2 transition-all hover:bg-white dark:text-black group-hover:opacity-100'>
                <svg width='26' height='26' viewBox='0 0 18 19' fill='none' xmlns='http://www.w3.org/2000/ svg'>
                  <path d='M17 17.5L13.2223 13.7156L17 17.5ZM15.3158 8.65789C15.3158 10.5563 14.5617 12.3769 13.2193 13.7193C11.8769 15.0617 10.0563 15.8158 8.15789 15.8158C6.2595 15.8158 4.43886 15.0617 3.0965 13.7193C1.75413 12.3769 1 10.5563 1 8.65789C1 6.7595 1.75413 4.93886 3.0965 3.5965C4.43886 2.25413 6.2595 1.5 8.15789 1.5C10.0563 1.5 11.8769 2.25413 13.2193 3.5965C14.5617 4.93886 15.3158 6.7595 15.3158 8.65789V8.65789Z' className='stroke-black dark:stroke-black' strokeWidth='2' strokeLinecap='round' />
                </svg>
              </button>
            </div>
            <div className='flex flex-col text-sm'>
              <div className='flex justify-between font-medium mb-2'>
                <span>Nike Sportswear</span>
              </div>
              <div className='flex justify-between items-center font-bold'>
                <span>BLAZER 77 VNTG UNISEX - Zapatillas - white/black sail total orange...</span>
              </div>
              <div className='flex justify-between items-center text-slate-500'>
                <span>2020 · 40.418 km · 130CV · Gasolina · Manual</span>
              </div>
              <div className='flex text-xl font-bold'>
                <span>94,99 €</span>
              </div>
            </div>
          </div>
        </a>

        {/** card */}
        <div className='break-inside rounded-xl mb-4 text-sm p-6 bg-white dark:bg-slate-800 dark:text-white'>
          <div className='flex justify-between items-center'>
            <div className='flex flex-col space-y-1'>
              <h5 className='font-bold text-2xl'>Nike Air Max</h5>
              <p className='text-slate-400'>Running shoes</p>
            </div>
            <span className='flex justify-center items-center w-16 h-16 rounded-full shadow-xl dark:bg-slate-700'>
              <svg width='40' height='15' viewBox='0 0 40 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M40 0.5L10.7364 12.9585C8.30975 13.9851 6.27141 14.5 4.62306 14.5C2.75638 14.5 1.40137 13.8467 0.561361 12.5386C0.0330233 11.6987 -0.121978 10.6338 0.0946904 9.34228C0.311359 8.05077 0.88803 6.67593 1.82137 5.21277C2.59971 4.02958 3.87472 2.47476 5.64973 0.546661C5.04767 1.49432 4.60618 2.53485 4.34306 3.62629C3.87639 5.61772 4.29639 7.07922 5.60307 8.01244C6.22474 8.44739 7.07974 8.66569 8.16975 8.66569C9.03976 8.66569 10.0198 8.52571 11.1098 8.24574L40 0.5Z' fill='currentColor' />
              </svg>
            </span>
          </div>
          <div className='flex justify-center items-center'>
            <div className='w-32 h-32 rounded-full relative flex items-center justify-center bg-gradient-to-tr from-[#00F5A0] to-[#00D9F5]'>
              <img src='/img/nike.png' />
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <h5 className='font-bold text-xl'>$95.99</h5>
            <span className='flex justify-center items-center w-12 h-12 rounded-2xl bg-black text-white dark:bg-white dark:text-black'>
              <svg width='20' height='20' viewBox='0 0 22 21' xmlns='http://www.w3.org/2000/svg'>
                <path d='M6 1.23792C3.239 1.23792 1 3.45391 1 6.18791C1 8.39491 1.875 13.6329 10.488 18.9279C10.6423 19.0218 10.8194 19.0714 11 19.0714C11.1806 19.0714 11.3577 19.0218 11.512 18.9279C20.125 13.6329 21 8.39491 21 6.18791C21 3.45391 18.761 1.23792 16 1.23792C13.239 1.23792 11 4.23792 11 4.23792C11 4.23792 8.761 1.23792 6 1.23792Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
              </svg>
            </span>
          </div>
        </div>

        {/** card */}
        <div className='break-inside p-6 flex flex-col justify-between rounded-xl mb-4 bg-[#fdc448] text-black'>
          <div className='space-y-4'>
            <div className='flex flex-col justify-center text-center space-y-4'>
              <h1 className='text-3xl font-extrabold'>FUTURE</h1>
              <div className='flex items-center justify-center space-x-3'>
                <span className='flex-1 border border-black bg-black' />
                <span className='uppercase font-bold'>The</span>
                <span className='flex-1 border border-black bg-black' />
              </div>
            </div>
            <div className='space-y-4 text-center'>
              <h4 className='text-2xl font-extrabold leading-snug'>Web Design templates Selection</h4>
              <div className='flex flex-col items-center text-center space-y-2'>
                <div className='relative'>
                  <img className='flex-none w-20 h-20 rounded-full object-cover border-4 border-[#fdc448] ring-4 ring-black' src='https://randomuser.me/api/portraits/men/65.jpg' alt='avatar' />
                  <span className='absolute rounded-full p-1 bottom-[-8px] right-[-2px] bg-black text-[#fdc448]'>
                    <svg width='16' height='16' viewBox='0 0 24 24'>
                      <path fill='currentColor' d='M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z' />
                    </svg>
                  </span>
                </div>
                <div>
                  <h5 className='text-lg font-medium mt-2'>Aron Ramsey</h5>
                  <p>Communication</p>
                </div>
              </div>
              <button className='rounded-full w-full py-1 font-medium transition-all border-2 group border-black bg-transparent hover:bg-black hover:text-white '>
                Go to the future
              </button>
            </div>
          </div>
        </div>

        {/** card */}
        <a href='#' className='break-inside flex flex-col justify-between rounded-xl mb-4 text-black dark:text-white group'>
          <div className='space-y-4'>
            <div className='relative'>
              <img src='https://images.pexels.com/photos/1161547/pexels-photo-1161547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='object-cover rounded-lg saturate-100' alt='Image' />
              <div className='p-6 absolute top-0 left-0 w-full flex justify-end'>
                <button className='flex items-center justify-center text-white rounded-full p-2 transition-all group-hover:bg-white group-hover:text-black'>
                  <svg width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z' fill='currentColor' />
                  </svg>
                </button>
              </div>
            </div>
            <div className='flex flex-col text-sm'>
              <div className='flex justify-between flex-row items-center space-x-4'>
                <div className='flex-auto flex flex-row space-x-4'>
                  <img className='flex-none w-10 h-10 rounded-full object-cover' src='https://randomuser.me/api/portraits/women/33.jpg' alt='avatar' />
                  <div className='flex flex-col'>
                    <span>Magical Graphics</span>
                    <a href='#' className='text-sm font-bold block dark:text-white'>Phill Garner</a>
                  </div>
                </div>
                <button className='flex items-center justify-center'>
                  <svg viewBox='0 0 24 24' width='20' height='20' aria-hidden='true'>
                    <g>
                      <path fill='currentColor' d='M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z' />
                    </g>
                  </svg>
                  19
                </button>
                <button className='flex items-center justify-center'>
                  <svg viewBox='0 0 24 24' width='20' height='20' aria-hidden='true'>
                    <g>
                      <path fill='currentColor' d='M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z' />
                    </g>
                  </svg>
                  19
                </button>
              </div>
            </div>
          </div>
        </a>

        {/** card */}
        <div className='break-inside flex flex-col justify-between overflow-hidden rounded-xl mb-4 text-sm bg-white dark:bg-slate-800 dark:text-slate-50'>
          <div className='p-6 flex justify-between'>
            <div className='flex items-center space-x-2'>
              <svg viewBox='0 0 24 24' width='28' height='28'>
                <path fill='currentColor' d='M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2C17.5,2 22,6 22,11A6,6 0 0,1 16,17H14.2C13.9,17 13.7,17.2 13.7,17.5C13.7,17.6 13.8,17.7 13.8,17.8C14.2,18.3 14.4,18.9 14.4,19.5C14.5,20.9 13.4,22 12,22M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C12.3,20 12.5,19.8 12.5,19.5C12.5,19.3 12.4,19.2 12.4,19.1C12,18.6 11.8,18.1 11.8,17.5C11.8,16.1 12.9,15 14.3,15H16A4,4 0 0,0 20,11C20,7.1 16.4,4 12,4M6.5,10C7.3,10 8,10.7 8,11.5C8,12.3 7.3,13 6.5,13C5.7,13 5,12.3 5,11.5C5,10.7 5.7,10 6.5,10M9.5,6C10.3,6 11,6.7 11,7.5C11,8.3 10.3,9 9.5,9C8.7,9 8,8.3 8,7.5C8,6.7 8.7,6 9.5,6M14.5,6C15.3,6 16,6.7 16,7.5C16,8.3 15.3,9 14.5,9C13.7,9 13,8.3 13,7.5C13,6.7 13.7,6 14.5,6M17.5,10C18.3,10 19,10.7 19,11.5C19,12.3 18.3,13 17.5,13C16.7,13 16,12.3 16,11.5C16,10.7 16.7,10 17.5,10Z' />
              </svg>
              <div className='flex-auto'>
                <a href='#' className='text-xl font-bold block dark:text-white'>Inspirations</a>
              </div>
            </div>
          </div>
          <div className='relative flex flex-col justify-between text-white bg-green-900 min-h-[14rem]'>
            <img src='https://images.pexels.com/photos/13007364/pexels-photo-13007364.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Imagen' className='object-cover w-full h-[20rem]' />
            <div className='absolute bottom-0 left-0 w-full p-6 bg-[#000000a8]'>
              <div className='flex items-center flex-row justify-between'>
                <div className='flex flex-col mr-auto'>
                  <span>Artist</span>
                  <a href='https://www.pexels.com/es-es/@anna-panchenko-212558913/' className='font-medium text-xl'>Anna Panchenko</a>
                </div>
              </div>
            </div>
          </div>
          <div className='p-6 flex flex-col justify-between space-y-6'>
            <div className='space-y-2'>
              <p className='text-slate-500 dark:text-slate-400'>Introduction</p>
              <p>This impressive paella is a perfect party dish and a fun meal to cook together with your guests..</p>
            </div>
            <div className='flex flex-row items-center justify-between space-x-2'>
              <a href='#' className='inline-flex justify-center items-center rounded-md font-medium text-base underline'>Views</a>
              <div className='col-start-2 row-start-1 row-end-3'>
                <dt className='sr-only'>Users</dt>
                <dd className='flex justify-start -space-x-1.5'>
                  <a href='#' className='inline-block -m-1'>
                    <img
                      className='w-9 h-9 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-800'
                      src='https://randomuser.me/api/portraits/women/46.jpg'
                      alt='avatar'
                    />
                  </a>
                  <a href='#' className='inline-block -m-1'>
                    <img
                      className='w-9 h-9 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-800'
                      src='https://randomuser.me/api/portraits/men/45.jpg'
                      alt='avatar'
                    />
                  </a>
                  <a href='#' className='inline-block -m-1'>
                    <img
                      className='w-9 h-9 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-800'
                      src='https://randomuser.me/api/portraits/women/47.jpg'
                      alt='avatar'
                    />
                  </a>
                  <a href='#' className='inline-block -m-1'>
                    <img
                      className='w-9 h-9 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-800'
                      src='https://randomuser.me/api/portraits/men/48.jpg'
                      alt='avatar'
                    />
                  </a>
                </dd>
              </div>
            </div>
          </div>
        </div>

        {/** card */}
        <div className='break-inside relative overflow-hidden flex flex-col justify-between group rounded-[10rem] mb-4 bg-white text-black'>
          <div className='absolute z-10 bottom-0 left-0 w-full p-16 bg-gradient-to-t from-[#c000e2] to-[#00000000] text-white'>
            <div className='flex items-center flex-row justify-between'>
              <div className='mr-auto'>
                <span>Artist</span>
                <h3 className='font-medium text-xl'>Cameron Williamson</h3>
              </div>
              <button className='flex items-center justify-center text-white rounded-full p-2 transition-all group-hover:bg-white group-hover:text-black'>
                <svg width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z' fill='currentColor' />
                </svg>
              </button>
            </div>
          </div>
          <img src='https://images.pexels.com/photos/1164674/pexels-photo-1164674.jpeg' className='w-[30rem] h-[35rem] object-cover w-wull' />
        </div>

        {/** card */}
        <div className='break-inside relative overflow-hidden flex flex-col justify-between group rounded-[7rem] mb-4 bg-white text-black transition-all duration-1000 hover:sepia'>
          <div className='absolute z-10 bottom-0 left-0 w-full p-12 bg-gradient-to-t from-[#ffffff] to-[#00000000] text-black'>
            <div className='flex items-center flex-row justify-between'>
              <div className='mr-auto space-y-2'>
                <span className='text-sm py-1 px-3 rounded-lg text-white bg-black'>Artist</span>
                <h3 className='font-bold text-2xl'>Oriana Tabares</h3>
              </div>
              <button className='flex items-center justify-center opacity-0 scale-[3] rounded-full blur-md p-2 transition-all duration-1000 group-hover:bg-white group-hover:text-black group-hover:scale-[1] group-hover:opacity-100 group-hover:blur-0'>
                <svg width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z' fill='currentColor' />
                </svg>
              </button>
            </div>
          </div>
          <img src='https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?cs=srgb&dl=pexels-emily-garland-1499327.jpg&fm=jpg' className='w-[30rem] h-[35rem] transition-all object-cover w-wull group-hover:scale-[1.2] group-hover:rotate-1' />
        </div>

        {/** card */}
        <div className='break-inside flex flex-col justify-between rounded-xl mb-4 text-sm bg-white dark:bg-slate-800 dark:text-slate-50'>
          <div className='space-y-4'>
            <div className='p-4 flex justify-between flex-row items-center space-x-4'>
              <div className='flex-auto flex flex-row space-x-4'>
                <img className='flex-none w-12 h-12 rounded-full object-cover' src='https://randomuser.me/api/portraits/men/27.jpg' alt='avatar' />
                <div className='flex flex-col'>
                  <a href='#' className='text-base font-bold block dark:text-white'>Robert Jones</a>
                  <span className='text-slate-500 dark:text-slate-400'>January 22, 2021</span>
                </div>
              </div>
              <button className='flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700'>
                <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                </svg>
              </button>
            </div>
            <div className='px-4 py-0 space-y-4'>
              <p> Lorem ipsum dolor sit amet adipiscing elit sed do eiusmodelit 😨🥴🦊 eiusmodelit sed do eiusmod <a href='#' className='font-medium text-blue-600 dark:text-slate-100'>#ui</a> <a href='#' className='font-medium text-blue-600 dark:text-slate-100'>#uxui</a> <a href='#' className='font-medium text-blue-600 dark:text-slate-100'>#userinterface</a> <a href='#' className='font-medium text-blue-600 dark:text-slate-100'>#webdeveloper</a> <a href='#' className='font-medium text-blue-600 dark:text-slate-100'>#card</a> </p>
            </div>
            <div className='p-4 bg-pink-600 text-white text-3xl font-medium leading-snug'>
              This impressive paella is a perfect party dish
            </div>
            <div className='p-4 flex flex-row justify-between'>
              <a href='#' className='flex items-center font-medium space-x-1 group'>
                <span className='p-3 rounded-full group-hover:bg-slate-100 dark:group-hover:bg-slate-700'>
                  <svg viewBox='0 0 24 24' width='20' height='20' aria-hidden='true'>
                    <g>
                      <path fill='currentColor' d='M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z' />
                    </g>
                  </svg>
                </span>
                <span>43</span>
              </a>
              <a href='#' className='flex items-center font-medium space-x-1 group'>
                <span className='p-3 rounded-full group-hover:bg-slate-100 dark:group-hover:bg-slate-700'>
                  <svg viewBox='0 0 24 24' width='20' height='20' aria-hidden='true'>
                    <g>
                      <path fill='currentColor' d='M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z' />
                      <path fill='currentColor' d='M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z' />
                    </g>
                  </svg>
                </span>
                <span>82</span>
              </a>
              <a href='#' className='flex items-center font-medium space-x-1 group'>
                <span className='p-3 rounded-full group-hover:bg-slate-100 dark:group-hover:bg-slate-700'>
                  <svg viewBox='0 0 24 24' width='20' height='20' aria-hidden='true'>
                    <g>
                      <path fill='currentColor' d='M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z' />
                    </g>
                  </svg>
                </span>
                <span>169</span>
              </a>
            </div>
          </div>
        </div>

        {/** card */}
        <div className='break-inside flex flex-col justify-between rounded-xl mb-4 bg-white dark:bg-slate-800 dark:text-slate-50'>
          <div className='space-y-4'>
            <div className='p-4 flex justify-between flex-row items-center space-x-4'>
              <div className='flex-auto flex flex-row space-x-4'>
                <img className='flex-none w-10 h-10 rounded-full object-cover' src='https://randomuser.me/api/portraits/women/21.jpg' alt='avatar' />
                <div className='flex flex-col'>
                  <a href='#' className='text-base font-bold block dark:text-white'>Alina Vargas</a>
                  <span className='text-sm text-slate-500 dark:text-slate-400'>September 05, 2022</span>
                </div>
              </div>
              <button className='flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700'>
                <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                </svg>
              </button>
            </div>
            <div className='p-4 bg-gradient-to-l from-[#1c00bd] to-[#be08c4] text-white text-2xl font-medium leading-snug'>
              Minim dolor in amet nulla laboris enim dolore consculpa eiusmod proident...
            </div>
            <div className='px-4'>
              <div className='flex justify-between items-center'>
                <a className='inline-flex items-center' href='#'>
                  <span className='-m-1 rounded-full border-2 border-white dark:border-slate-800'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 16 16' fill='none'>
                      <path fill='url(#a)' d='M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Z' />
                      <path fill='#fff' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725.1.163.132.36.089.546-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666ZM3.6 7h.8a.6.6 0 0 1 .6.6v3.8a.6.6 0 0 1-.6.6h-.8a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6Z' />
                      <defs>
                        <linearGradient id='a' x1='8' x2='8' y2='16' gradientUnits='userSpaceOnUse'>
                          <stop stopColor='#18AFFF' />
                          <stop offset='1' stopColor='#0062DF' />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className='-m-1 rounded-full border-2 border-white dark:border-slate-800'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 16 16' fill='none'>
                      <path fill='url(#b)' d='M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Z' />
                      <path fill='#fff' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41Z' />
                      <defs>
                        <linearGradient id='b' x1='8' x2='8' y2='16' gradientUnits='userSpaceOnUse'>
                          <stop stopColor='#FF6680' />
                          <stop offset='1' stopColor='#E61739' />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className='-m-1 rounded-full border-2 border-white dark:border-slate-800'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 16 16' fill='none'>
                      <path fill='url(#aa)' d='M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8' />
                      <path fill='url(#bb)' d='M3 8.008C3 10.023 4.006 14 8 14c3.993 0 5-3.977 5-5.992C13 7.849 11.39 7 8 7c-3.39 0-5 .849-5 1.008Z' />
                      <path fill='url(#cc)' d='M4.541 12.5c.804.995 1.907 1.5 3.469 1.5 1.563 0 2.655-.505 3.459-1.5-.551-.588-1.599-1.5-3.459-1.5s-2.917.912-3.469 1.5Z' />
                      <path fill='#2A3755' d='M6.213 4.144c.263.188.502.455.41.788-.071.254-.194.369-.422.37-.78.012-1.708.256-2.506.613-.065.029-.197.088-.332.085-.124-.003-.251-.058-.327-.237-.067-.157-.073-.388.276-.598.545-.33 1.257-.48 1.909-.604-.41-.303-.85-.56-1.315-.768-.427-.194-.38-.457-.323-.6.127-.317.609-.196 1.078.026a9 9 0 0 1 1.552.925Zm3.577 0a8.955 8.955 0 0 1 1.55-.925c.47-.222.95-.343 1.078-.026.057.143.104.406-.323.6a7.028 7.028 0 0 0-1.313.768c.65.123 1.363.274 1.907.604.349.21.342.44.276.598-.077.18-.203.234-.327.237-.135.003-.267-.056-.332-.085-.797-.357-1.725-.6-2.504-.612-.228-.002-.351-.117-.422-.37-.091-.333.147-.6.41-.788v-.001Z' />
                      <defs>
                        <linearGradient id='aa' x1='8' x2='8' y1='1.64' y2='16' gradientUnits='userSpaceOnUse'>
                          <stop stopColor='#FEEA70' />
                          <stop offset='1' stopColor='#F69B30' />
                        </linearGradient>
                        <linearGradient id='bb' x1='8' x2='8' y1='7' y2='14' gradientUnits='userSpaceOnUse'>
                          <stop stopColor='#472315' />
                          <stop offset='1' stopColor='#8B3A0E' />
                        </linearGradient>
                        <linearGradient id='cc' x1='8.005' x2='8.005' y1='11' y2='13.457' gradientUnits='userSpaceOnUse'>
                          <stop stopColor='#FC607C' />
                          <stop offset='1' stopColor='#D91F3A' />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className='font-bold ml-3'>237</span>
                </a>
                <a className='ml-auto' href='#'>23 comments</a>
              </div>
            </div>
            <div className='p-4 flex flex-row justify-start items-center space-x-2'>
              <img className='flex-none w-10 h-10 rounded-full object-cover' src='https://randomuser.me/api/portraits/men/27.jpg' alt='avatar' />
              <div className='relative w-full'>
                <input type='text' className='rounded-full pl-5 pr-[7rem] py-3 bg-slate-100 w-full h-10 dark:bg-slate-700 dark:text-white' placeholder='Write a comment' />
                <div className='absolute right-3 top-1/2 -translate-y-1/2 flex items-center'>
                  <button className='flex items-center justify-center p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600'>
                    <svg width='20' height='20' viewBox='0 0 24 24'>
                      <path d='M20,4H16.83L15,2H9L7.17,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,18H4V6H8.05L9.88,4H14.12L15.95,6H20V18M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15Z' fill='currentColor' />
                    </svg>
                  </button>
                  <button className='flex items-center justify-center p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600'>
                    <svg width='20' height='20' viewBox='0 0 24 24'>
                      <path d='M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M13,9.94L14.06,11L15.12,9.94L16.18,11L17.24,9.94L15.12,7.82L13,9.94M8.88,9.94L9.94,11L11,9.94L8.88,7.82L6.76,9.94L7.82,11L8.88,9.94M12,17.5C14.33,17.5 16.31,16.04 17.11,14H6.89C7.69,16.04 9.67,17.5 12,17.5Z' fill='currentColor' />
                    </svg>
                  </button>
                  <button className='flex items-center justify-center p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600'>
                    <svg width='20' height='20' viewBox='0 0 24 24'>
                      <path d='M5.5,2C3.56,2 2,3.56 2,5.5V18.5C2,20.44 3.56,22 5.5,22H16L22,16V5.5C22,3.56 20.44,2 18.5,2H5.5M5.75,4H18.25A1.75,1.75 0 0,1 20,5.75V15H18.5C16.56,15 15,16.56 15,18.5V20H5.75A1.75,1.75 0 0,1 4,18.25V5.75A1.75,1.75 0 0,1 5.75,4M14.44,6.77C14.28,6.77 14.12,6.79 13.97,6.83C13.03,7.09 12.5,8.05 12.74,9C12.79,9.15 12.86,9.3 12.95,9.44L16.18,8.56C16.18,8.39 16.16,8.22 16.12,8.05C15.91,7.3 15.22,6.77 14.44,6.77M8.17,8.5C8,8.5 7.85,8.5 7.7,8.55C6.77,8.81 6.22,9.77 6.47,10.7C6.5,10.86 6.59,11 6.68,11.16L9.91,10.28C9.91,10.11 9.89,9.94 9.85,9.78C9.64,9 8.95,8.5 8.17,8.5M16.72,11.26L7.59,13.77C8.91,15.3 11,15.94 12.95,15.41C14.9,14.87 16.36,13.25 16.72,11.26Z' fill='currentColor' />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** card */}
        <div className='break-inside flex flex-col justify-between rounded-xl mb-4 text-sm bg-white dark:bg-slate-800 dark:text-slate-50'>
          <div className='space-y-4'>
            <div className='pt-6 pr-6 pl-6 pb-4 flex justify-between flex-row items-center space-x-4 border-b dark:border-b-slate-700'>
              <h1 className='text-2xl font-bold'>Web trends</h1>
              <button className='flex items-center justify-center rounded-full p-2 transition-all hover:bg-slate-200 dark:hover:bg-slate-700'>
                <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M20.71,7.04C20.37,7.38 20.04,7.71 20.03,8.04C20,8.36 20.34,8.69 20.66,9C21.14,9.5 21.61,9.95 21.59,10.44C21.57,10.93 21.06,11.44 20.55,11.94L16.42,16.08L15,14.66L19.25,10.42L18.29,9.46L16.87,10.87L13.12,7.12L16.96,3.29C17.35,2.9 18,2.9 18.37,3.29L20.71,5.63C21.1,6 21.1,6.65 20.71,7.04M3,17.25L12.56,7.68L16.31,11.43L6.75,21H3V17.25Z' fill='currentColor' />
                </svg>
              </button>
            </div>
            <div className='pt-4 pr-6 pl-6 pb-0 space-y-2'>
              <h1 className='text-xl font-medium'>News</h1>
              <p>14 May 2014</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmodelit <a href='#' className='font-medium text-blue-600 dark:text-slate-100'>#ui</a> <a href='#' className='font-medium text-blue-600 dark:text-slate-100'>#uxui</a> <a href='#' className='font-medium text-blue-600 dark:text-slate-100'>#userinterface</a> <a href='#' className='font-medium text-blue-600 dark:text-slate-100'>#webdeveloper</a> <a href='#' className='font-medium text-blue-600 dark:text-slate-100'>#card</a> </p>
            </div>
            <div className='pr-6 pl-6'>
              <div className='rounded-xl overflow-hidden'>
                <img src='https://images.pexels.com/photos/2888489/pexels-photo-2888489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Imagen' />
              </div>
            </div>
            <div className='p-4 flex flex-row justify-evenly'>
              <a href='#' className='flex items-center font-medium space-x-1 group'>
                <span className='p-3 rounded-full group-hover:bg-slate-100 dark:group-hover:bg-slate-700'>
                  <svg viewBox='0 0 24 24' width='20' height='20' aria-hidden='true'>
                    <g>
                      <path fill='currentColor' d='M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z' />
                    </g>
                  </svg>
                </span>
                <span>43</span>
              </a>
              <a href='#' className='flex items-center font-medium space-x-1 group'>
                <span className='p-3 rounded-full group-hover:bg-slate-100 dark:group-hover:bg-slate-700'>
                  <svg viewBox='0 0 24 24' width='20' height='20' aria-hidden='true'>
                    <g>
                      <path fill='currentColor' d='M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z' />
                      <path fill='currentColor' d='M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z' />
                    </g>
                  </svg>
                </span>
                <span>82</span>
              </a>
              <a href='#' className='flex items-center font-medium space-x-1 group'>
                <span className='p-3 rounded-full group-hover:bg-slate-100 dark:group-hover:bg-slate-700'>
                  <svg viewBox='0 0 24 24' width='20' height='20' aria-hidden='true'>
                    <g>
                      <path fill='currentColor' d='M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z' />
                    </g>
                  </svg>
                </span>
                <span>169</span>
              </a>
            </div>
          </div>
        </div>

        {/** card */}
        <div className='break-inside flex flex-col justify-between rounded-xl mb-4 text-sm overflow-hidden bg-white dark:bg-slate-800 dark:text-slate-50'>
          <div className='p-4 bg-yellow-50 dark:bg-slate-700'>
            <div className='flex justify-between items-center flex-col space-y-4'>
              <div className='flex flex-col items-center text-center space-y-2'>
                <img className='flex-none w-24 h-24 rounded-full object-cover' src='https://randomuser.me/api/portraits/men/62.jpg' alt='avatar' />
                <div>
                  <h5 className='text-lg font-medium'>Timothy Collins</h5>
                  <p>Regional Legal Manager</p>
                  <p>Communication</p>
                </div>
              </div>
              <div className='flex justify-between items-center flex-row w-full'>
                <button className='p-2 rounded-full transition-all hover:bg-yellow-200 dark:hover:bg-slate-600'>
                  <svg width='24' height='24' viewBox='0 0 24 24'>
                    <path fill='currentColor' d='M9.04,21.54C10,21.83 10.97,22 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2A10,10 0 0,0 2,12C2,16.25 4.67,19.9 8.44,21.34C8.35,20.56 8.26,19.27 8.44,18.38L9.59,13.44C9.59,13.44 9.3,12.86 9.3,11.94C9.3,10.56 10.16,9.53 11.14,9.53C12,9.53 12.4,10.16 12.4,10.97C12.4,11.83 11.83,13.06 11.54,14.24C11.37,15.22 12.06,16.08 13.06,16.08C14.84,16.08 16.22,14.18 16.22,11.5C16.22,9.1 14.5,7.46 12.03,7.46C9.21,7.46 7.55,9.56 7.55,11.77C7.55,12.63 7.83,13.5 8.29,14.07C8.38,14.13 8.38,14.21 8.35,14.36L8.06,15.45C8.06,15.62 7.95,15.68 7.78,15.56C6.5,15 5.76,13.18 5.76,11.71C5.76,8.55 8,5.68 12.32,5.68C15.76,5.68 18.44,8.15 18.44,11.43C18.44,14.87 16.31,17.63 13.26,17.63C12.29,17.63 11.34,17.11 11,16.5L10.33,18.87C10.1,19.73 9.47,20.88 9.04,21.57V21.54Z' />
                  </svg>
                </button>
                <button className='p-2 rounded-full transition-all hover:bg-yellow-200 dark:hover:bg-slate-600'>
                  <svg width='24' height='24' viewBox='0 0 24 24'>
                    <path fill='currentColor' d='M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z' />
                  </svg>
                </button>
                <button className='p-2 rounded-full transition-all hover:bg-yellow-200 dark:hover:bg-slate-600'>
                  <svg width='24' height='24' viewBox='0 0 24 24'>
                    <path fill='currentColor' d='M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z' />
                  </svg>
                </button>
                <button className='p-2 rounded-full transition-all hover:bg-yellow-200 dark:hover:bg-slate-600'>
                  <svg width='24' height='24' viewBox='0 0 24 24'>
                    <path fill='currentColor' d='M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z' />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className='pr-4 pl-4 pt-4 flex flex-col items-center text-center'>
            <span className='p-4 rounded-full mb-3 bg-yellow-50 dark:bg-slate-700 dark:text-slate-50'>
              <svg xmlns='http://www.w3.org/2000/svg' width='26' height='26'>
                <path fill='currentColor' d='M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z' />
                <path fill='currentColor' d='M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z' />
              </svg>
            </span>
            <h5 className='font-medium'>United States</h5>
            <p>Kansas</p>
            <p>Martymouth</p>
          </div>
          <div className='p-4'>
            <button className='rounded-lg w-full py-2 font-medium transition-all bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600'>Follow</button>
          </div>
        </div>

        {/** card */}
        <div className='break-inside p-6 flex flex-col justify-between rounded-xl mb-4 space-y-5 overflow-hidden bg-[#00cba0]'>
          <h1 className='text-2xl font-extrabold leading-snug'>The future in card designs</h1>
          <div className='flex space-x-1'>
            <span className='px-3 py-1 rounded-full uppercase text-sm font-bold bg-black text-white'>future</span>
            <span className='px-3 py-1 rounded-full uppercase text-sm font-bold bg-black text-white'>sience</span>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          <div className='flex items-center justify-between'>
            <button className='flex items-center justify-center relative rounded-full w-full py-2 font-medium transition-all border-2 group border-black bg-transparent hover:bg-black hover:text-white '>
              Get experience
              <span className='absolute right-2 rounded-full p-1 bg-black text-white group-hover:bg-white group-hover:text-black'>
                <svg width='20' height='20' viewBox='0 0 24 24'>
                  <path fill='currentColor' d='M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z' />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/** card */}
        <div className='break-inside p-6 flex flex-col justify-between rounded-2xl mb-4 text-sm bg-white text-black dark:bg-slate-800 dark:text-white'>
          <div className='relative sepia'>
            <div className='absolute top-0 left-0 w-full h-full p-4 flex items-start justify-between'>
              <button className='flex items-center justify-center p-2 rounded-full bg-white text-black'>
                <svg width='24' height='24' viewBox='0 0 24 24'>
                  <path fill='currentColor' d='M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z' />
                </svg>
              </button>
              <button className='flex items-center justify-center p-2 rounded-full bg-white text-black'>
                <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                </svg>
              </button>
            </div>
            <img src='https://images.pexels.com/photos/811838/pexels-photo-811838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Imagen' className='rounded-xl w-full h-[12rem] object-cover' />
          </div>
          <div className='pt-4 space-y-3'>
            <div className='flex justify-between items-start'>
              <div className='flex flex-col'>
                <h1 className='text-base font-bold'>We are a rock band</h1>
                <p>15 songs</p>
              </div>
              <button className='flex items-center justify-center p-2 rounded-full bg-pink-100 text-pink-500 dark:bg-slate-700 dark:text-pink-400'>
                <svg width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z' fill='currentColor' />
                </svg>
              </button>
            </div>
            <h2 className='text-base font-bold'>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmodelit sed.. </p>
          </div>
        </div>

        {/** card */}
        <div className='break-inside p-4 flex flex-col space-y-3 justify-between rounded-2xl mb-4 bg-white text-black dark:bg-slate-800 dark:text-white'>
          <div className='flex items-center space-x-4'>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
              <path fill='currentColor' d='M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z' />
              <path fill='currentColor' d='M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z' />
            </svg>
            <div className='flex-auto'>
              <div className='no-underline font-medium block'>Calendario</div>
            </div>
            <button className='flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700'>
              <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
              </svg>
            </button>
          </div>
          <div className='flex flex-col space-y-2'>
            <div className='flex justify-between items-center'>
              <button className='flex items-center justify-center rounded-full p-2 transition-all hover:bg-slate-50 dark:hover:bg-slate-700'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center py-1 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700'>
                <span>Agosto 2022</span>
              </button>
              <button className='flex items-center justify-center rounded-full p-2 transition-all hover:bg-slate-50 dark:hover:bg-slate-700'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' fill='currentColor' />
                </svg>
              </button>
            </div>
            <div className='grid grid-cols-7 place-items-center bg-blue-600 rounded-lg py-2 px-3 text-sm text-white dark:text-slate400'>
              <span>Lun</span>
              <span>Mar</span>
              <span>Mie</span>
              <span>Jue</span>
              <span>Vie</span>
              <span>Sab</span>
              <span>Dom</span>
            </div>
            <div className='grid grid-cols-7 place-items-center w-full text-slate-600 dark:text-slate-400'>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full pointer-events-none' />
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>1</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>2</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>3</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>4</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>5</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>6</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>7</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>8</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>9</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>10</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>11</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>12</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>13</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>14</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>15</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>16</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>17</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>18</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>19</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>20</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>21</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>22</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>23</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>24</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>25</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>26</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>27</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>28</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>29</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>30</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>31</span>
            </div>
          </div>
        </div>

        {/** card */}
        <div className='break-inside p-4 flex flex-col space-y-3 justify-between rounded-2xl mb-4 bg-white text-black dark:bg-slate-800 dark:text-white'>
          <div className='flex items-center justify-between space-x-4'>
            <button className='flex justify-center items-center py-1 px-3 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-700'>
              <span>Marzo 2022</span>
            </button>
            <div className='flex justify-between items-center'>
              <button className='flex items-center justify-center rounded-full p-2 transition-all hover:bg-slate-50 dark:hover:bg-slate-700'>
                <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex items-center justify-center rounded-full p-2 transition-all hover:bg-slate-50 dark:hover:bg-slate-700'>
                <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' fill='currentColor' />
                </svg>
              </button>
            </div>
          </div>
          <div className='flex flex-col space-y-2'>
            <div className='grid grid-cols-7 place-items-center items-center font-medium dark:text-slate400'>
              <span>L</span>
              <span>M</span>
              <span>M</span>
              <span>J</span>
              <span>V</span>
              <span>S</span>
              <span className='text-red-500'>D</span>
            </div>
            <div className='grid grid-cols-7 place-items-center w-full text-slate-600 dark:text-slate-400'>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>1</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>2</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>3</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>4</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>5</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>6</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white text-red-500'>7</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>8</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>9</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-purple-600 dark:hover:text-white'>10</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full bg-purple-600 text-white hover:bg-purple-600 dark:hover:bg-purple-600 dark:hover:text-white'>11</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>12</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>13</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white text-red-500'>14</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>15</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>16</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>17</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>18</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>19</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>20</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white text-red-500'>21</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>22</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>23</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>24</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>25</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>26</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>27</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white text-red-500'>28</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>29</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>30</span>
              <span className='flex items-center justify-center w-9 h-9 cursor-pointer text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white'>31</span>
            </div>
          </div>
        </div>

        {/** card */}
        <div className='break-inside p-6 flex flex-col justify-between rounded-2xl mb-4 space-y-8 bg-white text-black dark:bg-slate-800 dark:text-white'>
          <div className='flex justify-end'>
            <button className='flex items-center justify-center rounded-full p-2 transition-all hover:bg-slate-200 dark:hover:bg-slate-700'>
              <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
              </svg>
            </button>
          </div>
          <div className='flex flex-col items-center text-center space-y-2'>
            <img className='flex-none w-40 h-40 rounded-full object-cover' src='https://images.pexels.com/photos/1762578/pexels-photo-1762578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='album cover' />
            <div>
              <h5 className='text-2xl font-medium'>Sunshine - Mix</h5>
              <p>Lookee Stefane</p>
            </div>
          </div>
          <div className='flex items-center justify-between space-x-4'>
            <span className='font-medium'>03:34</span>
            <div className='relative rounded-full overflo-hidden flex-1 h-1 bg-slate-200 dark:bg-slate-600'>
              <div className='absolute rounded-full left-0 w-1/2 h-full bg-purple-500' />
            </div>
            <span className='font-medium'>08:14</span>
          </div>
          <div className='flex justify-between items-center'>
            <button className='flex justify-center items-center rounded-full p-2 transition-all hover:bg-slate-100 dark:hover:bg-slate-700'>
              <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z' fill='currentColor' />
              </svg>
            </button>
            <button className='flex justify-center items-center rounded-full p-2 transition-all hover:bg-slate-100 dark:hover:bg-slate-700'>
              <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z' fill='currentColor' />
              </svg>
            </button>
            <button className='flex justify-center items-center rounded-full p-3 transition-all bg-slate-100 hover:bg-slate-100 dark:bg-slate-700 dark:hover:bg-slate-700'>
              <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M8,5.14V19.14L19,12.14L8,5.14Z' fill='currentColor' />
              </svg>
            </button>
            <button className='flex justify-center items-center rounded-full p-2 transition-all hover:bg-slate-100 dark:hover:bg-slate-700'>
              <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z' fill='currentColor' />
              </svg>
            </button>
            <button className='flex justify-center items-center rounded-full p-2 transition-all hover:bg-slate-100 dark:hover:bg-slate-700'>
              <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z' fill='currentColor' />
              </svg>
            </button>
          </div>
        </div>

        {/** card */}
        <div className='break-inside p-6 flex flex-col overflow-hidden justify-between rounded-2xl mb-4 space-y-8 bg-[#9fd597] text-black'>
          <div className='relative z-10 flex justify-between items-center'>
            <div className='flex space-x-1'>
              <span className='px-4 py-2 rounded-full text-xs bg-black text-white'>Deep house</span>
              <span className='px-4 py-2 rounded-full text-xs bg-black text-white'>House</span>
            </div>
            <button className='flex items-center justify-center rounded-full p-1 transition-all hover:bg-[#abf1a1]'>
              <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
              </svg>
            </button>
          </div>
          <div className='flex flex-col items-center text-center space-y-2'>
            <div className='relative after:absolute after:rounded-full after:-left-[1rem] after:-top-[1rem] after:w-[12rem] after:h-[12rem] after:bg-[#c1ffb8] after:animate-ping'>
              <img className='relative z-10 flex-none w-40 h-40 rounded-full object-cover animate-spin' src='https://images.pexels.com/photos/2746823/pexels-photo-2746823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='album cover' />
            </div>
            <div className='relative z-10'>
              <h5 className='text-3xl font-bold'>Runaway</h5>
              <p>Smalltown Boy , Shane D</p>
            </div>
          </div>
          <div className='flex items-center justify-between space-x-4'>
            <span className='font-medium'>03:18</span>
            <div className='relative rounded-full overflo-hidden flex-1 h-1 bg-[#ffffff]'>
              <div className='absolute rounded-full left-0 w-2/3 h-full bg-[#0a3f19]' />
            </div>
            <span className='font-medium'>04:14</span>
          </div>
          <div className='flex justify-between items-center'>
            <button className='flex justify-center items-center rounded-full p-2 transition-all hover:bg-[#abf1a1]'>
              <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z' fill='currentColor' />
              </svg>
            </button>
            <button className='flex justify-center items-center rounded-full p-2 transition-all hover:bg-[#abf1a1]'>
              <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z' fill='currentColor' />
              </svg>
            </button>
            <button className='flex justify-center items-center rounded-full p-3 transition-all bg-[#abf1a1] hover:bg-[#abf1a1]'>
              <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M8,5.14V19.14L19,12.14L8,5.14Z' fill='currentColor' />
              </svg>
            </button>
            <button className='flex justify-center items-center rounded-full p-2 transition-all hover:bg-[#abf1a1]'>
              <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z' fill='currentColor' />
              </svg>
            </button>
            <button className='flex justify-center items-center rounded-full p-2 transition-all hover:bg-[#abf1a1]'>
              <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z' fill='currentColor' />
              </svg>
            </button>
          </div>
        </div>

        {/** card */}
        <div className='break-inside mb-4 text-sm rounded-xl bg-white dark:bg-slate-800'>
          <div className='p-6 space-y-6'>
            <div className='flex items-center space-x-4'>
              <img src='https://images.pexels.com/photos/1001850/pexels-photo-1001850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='cover' className='flex-none rounded-lg w-24 h-20 bg-slate-100 object-cover' loading='lazy' />
              <div className='min-w-0 flex-auto space-y-1'>
                <p className='text-cyan-500 dark:text-cyan-400 leading-6'>
                  <abbr title='Episode'>Ep.</abbr> 33
                </p>
                <h2 className='text-slate-500 dark:text-slate-400 leading-6 truncate'>
                  Minim dolor in amet nulla laboris enim
                </h2>
                <p className='text-slate-900 dark:text-slate-50 text-base font-bold'>
                  Full Stack Radio
                </p>
              </div>
            </div>
            <div className='space-y-2'>
              <div className='relative'>
                <div className='bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden'>
                  <div className='bg-purple-500 dark:bg-purple-400 w-[35%] h-2' role='progressbar' ariaLabel='music progress' ariaValuenow='1456' ariaValuemin='0' aria-valuemax='4550' />
                </div>
                <div className='ring-purple-500 dark:ring-purple-400 ring-2 absolute left-[35%] top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center bg-white rounded-full shadow'>
                  <div className='w-1.5 h-1.5 bg-purple-500 dark:bg-purple-400 rounded-full ring-1 ring-inset ring-slate-900/5' />
                </div>
              </div>
              <div className='flex justify-between text-sm leading-6 font-medium tabular-nums'>
                <div className='text-cyan-500 dark:text-slate-100'>24:16</div>
                <div className='text-slate-500 dark:text-slate-400'>75:50</div>
              </div>
            </div>
          </div>
          <div className='bg-slate-50 text-slate-500 dark:bg-slate-700 dark:text-slate-200 rounded-b-xl flex items-center'>
            <div className='flex-auto flex items-center justify-evenly'>
              <button type='button' ariaLabel='Add to favorites' className='rounded-full p-2 hover:bg-slate-200 dark:hover:bg-slate-600'>
                <svg width='24' height='24'>
                  <path d='M7 6.931C7 5.865 7.853 5 8.905 5h6.19C16.147 5 17 5.865 17 6.931V19l-5-4-5 4V6.931Z' fill='currentColor' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </button>
              <button type='button' className='rounded-full p-2 hover:bg-slate-200 dark:hover:bg-slate-600' ariaLabel='Previous'>
                <svg width='24' height='24' fill='none'>
                  <path d='m10 12 8-6v12l-8-6Z' fill='currentColor' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                  <path d='M6 6v12' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </button>
              <button type='button' ariaLabel='Rewind 10 seconds' className='rounded-full p-2 hover:bg-slate-200 dark:hover:bg-slate-600'>
                <svg width='24' height='24' fill='none'>
                  <path d='M6.492 16.95c2.861 2.733 7.5 2.733 10.362 0 2.861-2.734 2.861-7.166 0-9.9-2.862-2.733-7.501-2.733-10.362 0A7.096 7.096 0 0 0 5.5 8.226' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                  <path d='M5 5v3.111c0 .491.398.889.889.889H9' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </button>
            </div>
            <button type='button' className='bg-white text-slate-900 dark:bg-slate-600 dark:text-slate-200 flex-none -my-2 mx-auto w-16 h-16 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center' ariaLabel='Pause'>
              <svg width='30' height='32' fill='currentColor'>
                <rect x='6' y='4' width='4' height='24' rx='2' />
                <rect x='20' y='4' width='4' height='24' rx='2' />
              </svg>
            </button>
            <div className='flex-auto flex items-center justify-evenly'>
              <button type='button' ariaLabel='Skip 10 seconds' className='rounded-full p-2 hover:bg-slate-200 dark:hover:bg-slate-600'>
                <svg width='24' height='24' fill='none'>
                  <path d='M17.509 16.95c-2.862 2.733-7.501 2.733-10.363 0-2.861-2.734-2.861-7.166 0-9.9 2.862-2.733 7.501-2.733 10.363 0 .38.365.711.759.991 1.176' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                  <path d='M19 5v3.111c0 .491-.398.889-.889.889H15' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </button>
              <button type='button' className='rounded-full p-2 hover:bg-slate-200 dark:hover:bg-slate-600' ariaLabel='Next'>
                <svg width='24' height='24' fill='none'>
                  <path d='M14 12 6 6v12l8-6Z' fill='currentColor' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                  <path d='M18 6v12' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </button>
              <button type='button' className='rounded-lg text-xs leading-6 font-semibold px-2 ring-2 ring-inset ring-slate-500 text-slate-500 dark:text-slate-100 dark:ring-0 dark:bg-slate-500'>
                1x
              </button>
            </div>
          </div>
        </div>

        {/** card */}
        <div className='break-inside p-4 flex flex-col justify-between rounded-2xl mb-4 text-sm space-y-4 bg-white text-black dark:bg-slate-800 dark:text-white'>
          <div className='flex justify-between items-start space-x-1'>
            <h3 className='text-base font-medium'>These are our member suggestions</h3>
            <button className='flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700'>
              <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
              </svg>
            </button>
          </div>
          <p>Minim dolor in amet nulla laboris enim dolore consequat.</p>
          <div className='flex flex-col space-y-4'>
            <div className='flex items-center space-x-3'>
              <img className='flex-none w-12 h-12 rounded-full object-cover' src='https://randomuser.me/api/portraits/men/24.jpg' alt='avatar' />
              <div className='flex-auto'>
                <a href='#' className='no-underline text-sm font-bold block text-blue-600 dark:text-white'>Wade Warren</a>
                <span className='text-sm text-slate-500 dark:text-slate-400'>Dog Trainer</span>
              </div>
              <button className='flex items-center justify-center rounded-md text-sm py-1 px-3 transition-all bg-purple-500 text-white hover:bg-purple-600 '>
                Follow
              </button>
            </div>
            <div className='flex items-center space-x-3'>
              <img className='flex-none w-12 h-12 rounded-full object-cover' src='https://randomuser.me/api/portraits/men/25.jpg' alt='avatar' />
              <div className='flex-auto'>
                <a href='#' className='no-underline text-sm font-bold block text-blue-600 dark:text-white'>Robert Fox</a>
                <span className='text-sm text-slate-500 dark:text-slate-400'>President of Sales</span>
              </div>
              <button className='flex items-center justify-center rounded-md text-sm py-1 px-3 transition-all bg-purple-500 text-white hover:bg-purple-600 '>
                Follow
              </button>
            </div>
            <div className='flex items-center space-x-3'>
              <img className='flex-none w-12 h-12 rounded-full object-cover' src='https://randomuser.me/api/portraits/women/25.jpg' alt='avatar' />
              <div className='flex-auto'>
                <a href='#' className='no-underline text-sm font-bold block text-blue-600 dark:text-white'>Jane Cooper</a>
                <span className='text-sm text-slate-500 dark:text-slate-400'>Nursing Assistant</span>
              </div>
              <button className='flex items-center justify-center rounded-md text-sm py-1 px-3 transition-all bg-purple-500 text-white hover:bg-purple-600 '>
                Follow
              </button>
            </div>
            <div className='flex items-center space-x-3'>
              <img className='flex-none w-12 h-12 rounded-full object-cover' src='https://randomuser.me/api/portraits/women/26.jpg' alt='avatar' />
              <div className='flex-auto'>
                <a href='#' className='no-underline text-sm font-bold block text-blue-600 dark:text-white'>Carmen Ospina</a>
                <span className='text-sm text-slate-500 dark:text-slate-400'>Software Tester</span>
              </div>
              <button className='flex items-center justify-center rounded-md text-sm py-1 px-3 transition-all bg-purple-500 text-white hover:bg-purple-600 '>
                Follow
              </button>
            </div>
            <div className='flex items-center space-x-3'>
              <img className='flex-none w-12 h-12 rounded-full object-cover' src='https://randomuser.me/api/portraits/women/27.jpg' alt='avatar' />
              <div className='flex-auto'>
                <a href='#' className='no-underline text-sm font-bold block text-blue-600 dark:text-white'>Dianne Russell</a>
                <span className='text-sm text-slate-500 dark:text-slate-400'>Web Designer</span>
              </div>
              <button className='flex items-center justify-center rounded-md text-sm py-1 px-3 transition-all bg-purple-500 text-white hover:bg-purple-600 '>
                Follow
              </button>
            </div>
          </div>
        </div>

        {/** card */}
        <div className='divide-y divide-slate-400/20 mb-4 rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-900 shadow-xl shadow-black/5 dark:bg-slate-800 dark:text-white'>
          <div className='flex items-center p-4'>
            <img src='https://randomuser.me/api/portraits/men/33.jpg' alt='avatar' className='h-12 w-12 flex-none rounded-full' />
            <div className='ml-4 flex-auto'>
              <div className='font-medium'>Leonard Krasner</div>
              <div className='text-slate-700 dark:text-slate-400'>@leonardkrasner</div>
            </div>
            <div className='pointer-events-auto cursor-pointer ml-4 flex-none rounded-md py-[0.3125rem] px-2 font-medium text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50 dark:text-white dark:ring-slate-700 dark:hover:bg-slate-700'>
              View
            </div>
          </div>
          <div className='flex items-center p-4'>
            <img src='https://randomuser.me/api/portraits/men/34.jpg' alt='avatar' className='h-12 w-12 flex-none rounded-full' />
            <div className='ml-4 flex-auto'>
              <div className='font-medium'>Floyd Miles</div>
              <div className='text-slate-700 dark:text-slate-400'>@floydmiles</div>
            </div>
            <div className='pointer-events-auto cursor-pointer ml-4 flex-none rounded-md py-[0.3125rem] px-2 font-medium text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50 dark:text-white dark:ring-slate-700 dark:hover:bg-slate-700'>
              View
            </div>
          </div>
          <div className='flex items-center p-4'>
            <img src='https://randomuser.me/api/portraits/women/25.jpg' alt='avatar' className='h-12 w-12 flex-none rounded-full' />
            <div className='ml-4 flex-auto'>
              <div className='font-medium'>Emily Selman</div>
              <div className='text-slate-700 dark:text-slate-400'>@emilyselman</div>
            </div>
            <div className='pointer-events-auto cursor-pointer ml-4 flex-none rounded-md py-[0.3125rem] px-2 font-medium text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50 dark:text-white dark:ring-slate-700 dark:hover:bg-slate-700'>
              View
            </div>
          </div>
          <div className='p-4'>
            <div className='pointer-events-auto cursor-pointer rounded-md py-2 px-4 text-center font-medium shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50 dark:text-white dark:hover:bg-slate-700'>
              View all users
            </div>
          </div>
        </div>

        {/** card */}
        <div className='break-inside p-4 flex flex-col justify-between rounded-2xl mb-4 space-y-8 bg-white text-black dark:bg-slate-800 dark:text-white'>
          <div className='flex justify-between items-start'>
            <div className='flex items-center justify-start space-x-2'>
              <svg width='24' height='22' viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M19 4H15V1C15 0.734784 14.8946 0.48043 14.7071 0.292893C14.5196 0.105357 14.2652 0 14 0H6C5.73478 0 5.48043 0.105357 5.29289 0.292893C5.10536 0.48043 5 0.734784 5 1V8H1C0.734784 8 0.48043 8.10536 0.292893 8.29289C0.105357 8.48043 0 8.73478 0 9V17C0 17.2652 0.105357 17.5196 0.292893 17.7071C0.48043 17.8946 0.734784 18 1 18H19C19.2652 18 19.5196 17.8946 19.7071 17.7071C19.8946 17.5196 20 17.2652 20 17V5C20 4.73478 19.8946 4.48043 19.7071 4.29289C19.5196 4.10536 19.2652 4 19 4ZM4 16H2V14H4V16ZM4 12H2V10H4V12ZM9 16H7V14H9V16ZM9 12H7V10H9V12ZM9 8H7V6H9V8ZM9 4H7V2H9V4ZM13 16H11V14H13V16ZM13 12H11V10H13V12ZM13 8H11V6H13V8ZM13 4H11V2H13V4ZM18 16H16V14H18V16ZM18 12H16V10H18V12ZM18 8H16V6H18V8Z' fill='currentColor' />
              </svg>
              <h3 className='text-xl font-medium'>Freelancers</h3>
            </div>
            <button className='flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700'>
              <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
              </svg>
            </button>
          </div>
          <div className='flex flex-col'>
            <div className='flex justify-between items-center mb-2'>
              <h5 className='uppercase text-sm font-medium'>Search now</h5>
              <button className='flex items-center justify-center rounded-lg w-10 h-10 transition-all hover:bg-slate-200 dark:hover:bg-slate-700'>
                <svg width='16' height='10' viewBox='0 0 16 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M3 4H13V6H3V4ZM0 0H16V2H0V0ZM6 8H10V10H6V8Z' fill='currentColor' />
                </svg>
              </button>
            </div>
            <div className='relative'>
              <span className='absolute left-4 top-1/2 -translate-y-1/2'>
                <svg width='18' height='19' viewBox='0 0 18 19' fill='none' xmlns='http://www.w3.org/2000/ svg'>
                  <path d='M17 17.5L13.2223 13.7156L17 17.5ZM15.3158 8.65789C15.3158 10.5563 14.5617 12.3769 13.2193 13.7193C11.8769 15.0617 10.0563 15.8158 8.15789 15.8158C6.2595 15.8158 4.43886 15.0617 3.0965 13.7193C1.75413 12.3769 1 10.5563 1 8.65789C1 6.7595 1.75413 4.93886 3.0965 3.5965C4.43886 2.25413 6.2595 1.5 8.15789 1.5C10.0563 1.5 11.8769 2.25413 13.2193 3.5965C14.5617 4.93886 15.3158 6.7595 15.3158 8.65789V8.65789Z' className='stroke-black dark:stroke-white' strokeWidth='2' strokeLinecap='round' />
                </svg>
              </span>
              <input type='text' className='rounded-full pl-12 pr-3 py-3 bg-slate-100 w-full h-12 dark:bg-slate-700 dark:text-white' placeholder='Search freelancers' />
            </div>
          </div>
          <div className='flex flex-col space-y-4'>
            <div className='flex items-center space-x-3'>
              <img className='flex-none w-11 h-11 rounded-full object-cover' src='https://randomuser.me/api/portraits/men/24.jpg' alt='avatar' />
              <div className='flex-auto'>
                <a href='#' className='no-underline text-sm font-bold block text-blue-600 dark:text-white'>Wade Warren</a>
                <span className='text-sm text-slate-500 dark:text-slate-400'>Dog Trainer</span>
              </div>
              <button className='flex items-center justify-center rounded-md text-sm py-1 px-3 transition-all bg-white text-black border-2 border-black hover:bg-black hover:text-white dark:bg-slate-800 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black'>
                Contact
              </button>
            </div>
            <div className='flex items-center space-x-3'>
              <img className='flex-none w-11 h-11 rounded-full object-cover' src='https://randomuser.me/api/portraits/men/25.jpg' alt='avatar' />
              <div className='flex-auto'>
                <a href='#' className='no-underline text-sm font-bold block text-blue-600 dark:text-white'>Robert Fox</a>
                <span className='text-sm text-slate-500 dark:text-slate-400'>President of Sales</span>
              </div>
              <button className='flex items-center justify-center rounded-md text-sm py-1 px-3 transition-all bg-white text-black border-2 border-black hover:bg-black hover:text-white dark:bg-slate-800 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black'>
                Contact
              </button>
            </div>
            <div className='flex items-center space-x-3'>
              <img className='flex-none w-11 h-11 rounded-full object-cover' src='https://randomuser.me/api/portraits/women/25.jpg' alt='avatar' />
              <div className='flex-auto'>
                <a href='#' className='no-underline text-sm font-bold block text-blue-600 dark:text-white'>Jane Cooper</a>
                <span className='text-sm text-slate-500 dark:text-slate-400'>Nursing Assistant</span>
              </div>
              <button className='flex items-center justify-center rounded-md text-sm py-1 px-3 transition-all bg-white text-black border-2 border-black hover:bg-black hover:text-white dark:bg-slate-800 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black'>
                Contact
              </button>
            </div>
            <div className='flex items-center space-x-3'>
              <img className='flex-none w-11 h-11 rounded-full object-cover' src='https://randomuser.me/api/portraits/women/26.jpg' alt='avatar' />
              <div className='flex-auto'>
                <a href='#' className='no-underline text-sm font-bold block text-blue-600 dark:text-white'>Carmen Ospina</a>
                <span className='text-sm text-slate-500 dark:text-slate-400'>Software Tester</span>
              </div>
              <button className='flex items-center justify-center rounded-md text-sm py-1 px-3 transition-all bg-white text-black border-2 border-black hover:bg-black hover:text-white dark:bg-slate-800 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black'>
                Contact
              </button>
            </div>
            <div className='flex items-center space-x-3'>
              <img className='flex-none w-11 h-11 rounded-full object-cover' src='https://randomuser.me/api/portraits/women/27.jpg' alt='avatar' />
              <div className='flex-auto'>
                <a href='#' className='no-underline text-sm font-bold block text-blue-600 dark:text-white'>Dianne Russell</a>
                <span className='text-sm text-slate-500 dark:text-slate-400'>Web Designer</span>
              </div>
              <button className='flex items-center justify-center rounded-md text-sm py-1 px-3 transition-all bg-white text-black border-2 border-black hover:bg-black hover:text-white dark:bg-slate-800 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black'>
                Contact
              </button>
            </div>
          </div>
        </div>

        {/** card */}
        <div className='break-inside flex flex-col justify-between overflow-hidden rounded-xl mb-4 bg-black text-white'>
          <div className='relative flex flex-col justify-between text-white bg-green-900 min-h-[14rem]'>
            <img src='https://images.pexels.com/photos/2387877/pexels-photo-2387877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Imagen' />
            <div className='absolute top-0 left-0 w-full h-full'>
              <div className='flex justify-between h-full flex-col'>
                <div className='p-6 bg-gradient-to-t from-[#00000000] to-[#000000]'>
                  <div className='flex items-start flex-row justify-between'>
                    <div className='mr-auto'>
                      <h3 className='text-2xl font-bold'>Good night Frank</h3>
                      <p>15 december, 2021</p>
                    </div>
                    <button className='flex items-center justify-center hover:bg-[#ffffff27] rounded-full p-2 transition-all'>
                      <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='p-6 space-y-4'>
            <div className='flex flex-col space-y-2'>
              <h2 className='text-3xl font-bold'>
                Programming
                <br />
                your dream
              </h2>
            </div>
            <div className='flex-col pt-4 space-y-3'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start space-x-2'>
                  <span className='flex items-center justify-center rounded-full w-11 h-11 bg-gradient-to-tr from-[#d9ff00] to-[#3cff00]'>
                    <svg width='20' height='18' viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M10 0C11.2333 0 12.2222 1.00125 12.2222 2.25C12.2222 3.49875 11.2333 4.5 10 4.5C8.76667 4.5 7.77778 3.49875 7.77778 2.25C7.77778 1.00125 8.77778 0 10 0ZM20 13.5V11.25C17.5111 11.25 15.3778 10.17 13.7778 8.235L12.2889 6.435C12.0822 6.18128 11.8225 5.97706 11.5286 5.83701C11.2347 5.69697 10.9137 5.62456 10.5889 5.625H9.44444C8.76667 5.625 8.14444 5.9175 7.72222 6.435L6.23333 8.235C4.62222 10.17 2.48889 11.25 0 11.25V13.5C3.07778 13.5 5.76667 12.1838 7.77778 9.84375V12.375L3.46667 14.1187C2.72222 14.4225 2.22222 15.1875 2.22222 15.9862C2.22222 17.1 3.11111 18 4.21111 18H6.66667V17.4375C6.66667 16.6916 6.95932 15.9762 7.48026 15.4488C8.00119 14.9213 8.70773 14.625 9.44444 14.625H12.7778C13.0889 14.625 13.3333 14.8725 13.3333 15.1875C13.3333 15.5025 13.0889 15.75 12.7778 15.75H9.44444C8.52222 15.75 7.77778 16.5037 7.77778 17.4375V18H15.7889C16.8889 18 17.7778 17.1 17.7778 15.9862C17.7778 15.1875 17.2778 14.4225 16.5333 14.1187L12.2222 12.375V9.84375C14.2333 12.1838 16.9222 13.5 20 13.5Z' fill='black' />
                    </svg>
                  </span>
                  <h5 className='font-medium'>Meditation</h5>
                </div>
                <span className='font-medium'>10.00 PM</span>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start space-x-2'>
                  <span className='flex items-center justify-center rounded-full w-11 h-11 bg-gradient-to-tr from-[#00fffb] to-[#00ff62]'>
                    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M18 7.056V0.5H16V2.5H4V0.5H2V7.057C0.81 7.75 0 9.026 0 10.5V14.5C0 14.7652 0.105357 15.0196 0.292893 15.2071C0.48043 15.3946 0.734784 15.5 1 15.5H2V19.5H4V15.5H16V19.5H18V15.5H19C19.2652 15.5 19.5196 15.3946 19.7071 15.2071C19.8946 15.0196 20 14.7652 20 14.5V10.5C20 9.026 19.189 7.75 18 7.056ZM9 6.5H4V4.5H9V6.5ZM16 6.5H11V4.5H16V6.5Z' fill='black' />
                    </svg>
                  </span>
                  <h5 className='font-medium'>Bedtime</h5>
                </div>
                <span className='font-medium'>11.00 PM </span>
              </div>
            </div>
          </div>
        </div>

        {/** card */}
        <div className='break-inside overflow-hidden relative rounded-2xl mb-4 text-white saturate-0 group'>
          <img src='https://images.pexels.com/photos/13159253/pexels-photo-13159253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Running' className='w-full h-[30rem] object-cover transition-all group-hover:scale-[1.02]' />
          <div className='absolute top-0 left-0 w-full h-full transition-all bg-[#0000004a] group-hover:bg-[#0000001f]' />
          <div className='absolute left-0 w-full bottom-0  z-10 flex flex-col items-start p-6 space-y-4'>
            <h1 className='uppercase font-bold'>
              <span className='text-4xl'>runnig</span>
              <br />
              <span className='text-3xl'>music</span>
            </h1>
            <button className='inline-flex items-center justify-center px-4 py-2 text-sm space-x-3 uppercase font-bold rounded-full bg-white text-black'>
              <span>Play now</span>
              <svg width='24' height='24' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M14 26.25C10.7511 26.25 7.63526 24.9594 5.33794 22.6621C3.04062 20.3647 1.75 17.2489 1.75 14C1.75 10.7511 3.04062 7.63526 5.33794 5.33794C7.63526 3.04062 10.7511 1.75 14 1.75C17.2489 1.75 20.3647 3.04062 22.6621 5.33794C24.9594 7.63526 26.25 10.7511 26.25 14C26.25 17.2489 24.9594 20.3647 22.6621 22.6621C20.3647 24.9594 17.2489 26.25 14 26.25ZM14 28C17.713 28 21.274 26.525 23.8995 23.8995C26.525 21.274 28 17.713 28 14C28 10.287 26.525 6.72601 23.8995 4.10051C21.274 1.475 17.713 0 14 0C10.287 0 6.72601 1.475 4.10051 4.10051C1.475 6.72601 0 10.287 0 14C0 17.713 1.475 21.274 4.10051 23.8995C6.72601 26.525 10.287 28 14 28Z' fill='black' />
                <path d='M10.9742 8.84625C11.1174 8.77255 11.278 8.73976 11.4386 8.7515C11.5992 8.76323 11.7534 8.81903 11.8842 8.91275L18.0093 13.2878C18.1227 13.3687 18.2151 13.4756 18.2789 13.5994C18.3427 13.7233 18.376 13.8607 18.376 14C18.376 14.1393 18.3427 14.2767 18.2789 14.4006C18.2151 14.5244 18.1227 14.6313 18.0093 14.7122L11.8842 19.0872C11.7534 19.1809 11.5993 19.2366 11.4388 19.2484C11.2783 19.2601 11.1177 19.2274 10.9747 19.1538C10.8316 19.0801 10.7116 18.9685 10.6278 18.8311C10.5441 18.6937 10.4999 18.5359 10.5 18.375V9.625C10.4998 9.46414 10.544 9.30635 10.6277 9.16897C10.7113 9.03158 10.8313 8.91992 10.9742 8.84625Z' fill='black' />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App

//
// {/** card */}
// <div className='break-inside rounded-xl mb-4 p-6 bg-white dark:bg-slate-800 dark:text-white'>card</div>
//
