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
        <p className='font-bold mb-1'>Built by <a href='#' className='underline dark:text-white'>Frank Esteban</a></p>
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
      <div className='box-border m-auto max-w-[75rem] columns-1xs sm:columns-2xs md:columns-2 lg:columns-3 xl:columns-4'>

        {/** card */}
        <div className='break-inside relative flex items-center justify-between overflow-hidden rounded-xl mb-4 bg-white dark:bg-slate-800 dark:text-slate-50'>
          <img src='https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='avatar' />
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
        <div className='break-inside relative flex flex-col justify-between overflow-hidden rounded-xl mb-4 bg-white dark:bg-slate-800 dark:text-slate-50'>
          <div className='relative flex flex-col justify-between text-white bg-green-900 min-h-[14rem]'>
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
            <p>Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod proident sed excepteur.</p>
            <div className='pt-4'>
              <div className='flex items-center space-x-4'>
                <img className='flex-none w-12 h-12 rounded-full object-cover' src='https://randomuser.me/api/portraits/women/44.jpg' alt='avatar' />
                <div className='flex-auto'>
                  <a href='#' className='no-underline font-bold block text-blue-600 dark:text-white'>Bessie Cooper</a>
                  <span className='text-slate-500 dark:text-slate-400'>Web designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** card */}
        <div className='break-inside flex flex-col justify-between rounded-xl mb-4 overflow-hidden bg-white dark:bg-slate-800 dark:text-slate-50'>
          <div className='p-4'>
            <div className='flex items-center space-x-4'>
              <img className='flex-none w-14 h-14 rounded-full object-cover' src='https://randomuser.me/api/portraits/men/44.jpg' alt='avatar' />
              <div className='flex-auto'>
                <a href='#' className='no-underline font-bold block text-blue-600 dark:text-white'>Tom</a>
                <span className='text-slate-500 dark:text-slate-400'>Photography editor</span>
              </div>
              <button className='flex items-center justify-center hover:bg-slate-200 rounded-full p-1 transition-all'>
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
              <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M13.73,15L9.83,21.76C10.53,21.91 11.25,22 12,22C14.4,22 16.6,21.15 18.32,19.75L14.66,13.4M2.46,15C3.38,17.92 5.61,20.26 8.45,21.34L12.12,15M8.54,12L4.64,5.25C3,7 2,9.39 2,12C2,12.68 2.07,13.35 2.2,14H9.69M21.8,10H14.31L14.6,10.5L19.36,18.75C21,16.97 22,14.6 22,12C22,11.31 21.93,10.64 21.8,10M21.54,9C20.62,6.07 18.39,3.74 15.55,2.66L11.88,9M9.4,10.5L14.17,2.24C13.47,2.09 12.75,2 12,2C9.6,2 7.4,2.84 5.68,4.25L9.34,10.6L9.4,10.5Z' fill='currentColor' />
              </svg>
              <span className='font-medium'>23</span>
            </div>
            <button className='inline-flex justify-center items-center rounded-md py-2 px-4 font-medium tracking-wide text-sm transition-all bg-slate-800 text-white hover:bg-slate-900 dark:bg-slate-50 dark:text-black'>Visit</button>
          </div>
          <div className='p-4 space-y-4'>
            <div className='flex flex-col space-y-2'>
              <p>Photographic rolls</p>
              <h2 className='text-2xl font-bold'>Salou, Tarragona</h2>
            </div>
            <p>Minim dolor in amet nulla laboris enim dolore consculpa eiusmod proident sed excepteur.</p>
          </div>
        </div>

        {/** card */}
        <div className='break-inside flex flex-col justify-between overflow-hidden rounded-xl mb-4 bg-white dark:bg-slate-800 dark:text-slate-50'>
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
                    <button className='flexitems-center justify-center hover:bg-[#ffffff27] rounded-full p-2 transition-all'>
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
              <h2 className='text-2xl font-bold'>Fashion today</h2>
              <p>September 22</p>
            </div>
            <p>Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod proident sed excepteur.</p>
            <div className='pt-4'>
              <div className='flex items-center space-x-4'>
                <img className='flex-none w-12 h-12 rounded-full object-cover' src='https://randomuser.me/api/portraits/women/45.jpg' alt='avatar' />
                <div className='flex-auto'>
                  <a href='#' className='no-underline font-bold block text-blue-600 dark:text-white'>Sharon Martinez</a>
                  <span className='text-slate-500 dark:text-slate-400'>Photography</span>
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
        <div className='break-inside flex flex-col justify-between overflow-hidden rounded-xl mb-4 bg-white dark:bg-slate-800 dark:text-slate-50'>
          <div className='relative flex flex-col justify-between text-white bg-green-900 min-h-[14rem]'>
            <img src='https://images.pexels.com/photos/1424981/pexels-photo-1424981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='Imagen' />
            <div className='absolute top-0 left-0 bg-pink-600 rounded-br-xl p-4'>
              <div className='flex flex-col items-center text-center space-x-2'>
                <span className='font-bold text-2xl'>22</span>
                <span>SEP</span>
                <span>2022</span>
              </div>
            </div>
          </div>
          <div className='p-4 space-y-4'>
            <div className='flex flex-col space-y-2'>
              <h2 className='text-2xl font-bold'>New trends</h2>
            </div>
            <p>Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod proident sed excepteur.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
