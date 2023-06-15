import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@500;700;800&display=swap" rel="stylesheet"/>
    </head>
    
    <div className='h-screen flex items-center justify-center'>
    <div className='flex mobile:flex-col w-max font-hanken rounded-lg bg-white box-content drop-shadow-2xl'>

      <div className='bg-gradient-to-b from-primary-100 to-primary-200 flex-1 text-center rounded-lg box-content p-6 w-max' >
        <h1 className='pb-6 text-gray-300 font-bold'>
          Your Result
        </h1>
        <div className='flex justify-center items-center pb-2'>
          <div className='bg-gradient-to-b from-violetblue-100 to-violetblue-200 rounded-full p-8 h-[120px] w-[120px]'>
            <h2 className='text-white text-5xl font-extrabold'>76</h2>
            <p className='text-gray-400 text-xs'>of 100</p>
          </div>
        </div>
        <h1 className='text-white text-xl pb-2 pt-2'>Great</h1>
        <p className='text-sm text-gray-300'>You scored higher than 65% of <br></br>the people who have taken <br></br> these tests.</p>
      </div>

      <div className='flex-1 box-content p-6 space-y-3'>
        <h1 className='pb-2 font-bold'>Summary</h1>
        <div className='bg-lightred-100 rounded-lg flex justify-between p-2'>
          <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#F55" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"/></svg>
            <h1 className='text-lightred-200 pl-2 text-sm font-bold'>Reaction</h1>
          </div>
          <h1 className='text-sm'>80<span className='text-gray-400'> / 100</span></h1>
        </div>
        <div className='bg-orangeyellow-100 rounded-lg flex justify-between p-2'>
          <div className='flex'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#FFB21E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"/><path stroke="#FFB21E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"/><path stroke="#FFB21E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"/></svg>
            <h1 className='text-orangeyellow-200 pl-2 text-sm font-'>Memory</h1>
          </div>
          <h1 className='text-sm'>92<span className='text-gray-400'> / 100</span></h1>
        </div>

        <div className='bg-greenteal-100 rounded-lg flex justify-between p-2'>
          <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#00BB8F" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"/></svg>
            <h1 className='text-greenteal-200 pl-2 text-sm'>Verbal</h1>
          </div>
          <h1 className='text-sm'>61<span className='text-gray-400'> / 100</span></h1>
        </div>
        <div className='bg-cobaltblue-100 rounded-lg flex justify-between p-2'>
          <div className='flex'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#1125D6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"/><path stroke="#1125D6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"/></svg>
            <h1 className='text-cobaltblue-200 pl-2 text-sm font-bold'>Visual</h1>
          </div>
          <h1 className='text-sm'>72<span className='text-gray-400'> / 100</span></h1>
        </div>
        <div className='flex justify-center items-center pt-4'>
          <button className="bg-sky-950 hover:bg-gradient-to-b from-primary-100 to to-primary-200 rounded-full text-white text-sm w-48 p-2">Continue</button>
        </div>
      </div>

    </div>
    </div>
    </>
  );
}

export default App;
