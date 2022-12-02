import { useState } from 'react'

function index() {
  const [loading, setLoading] = useState(false)
  async function handleClick() {
    
    setLoading(true)
    const res = await fetch("/api/random");
    const json = await res.json();
    console.log(json);
    setLoading(false)
    return json?.url
  }
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
      <div className="h-screen mx-auto max-w-3xl flex justify-center">
        <div 
        onClick={async () => {
          const url = await handleClick()
          window.open(url, '_blank');
        }}
        className="bg-black p-4 w-full flex justify-center rounded-md m-auto hover:cursor-pointer h-20 ">
          {
        loading == true ? 
        <svg className="animate-spin mx-auto h-5 w-5 text-white m-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25 " cx="12" cy="12" r="10" stroke="white" strokeWidth="4"></circle>
            <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        :
        <p className="text-white text-2xl font-bold uppercase m-auto">
        random vercel.app
      </p>  
    }

         
        </div>
      </div>
    </div>
  );
}

export default index;
