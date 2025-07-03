import { useEffect } from "react";

function Home() {

   useEffect(()=>{
    
    const getdata = async() => {
      
      const res = await fetch("http://localhost:3001/")
      const data = await res.json();
      
      console.log(data.var);
      
    }
    getdata()

   },[])

    return ( 
        <div className="w-screen h-[100%] flex justify-center items-center">
          <p className="text-7xl text-blue-500">WELCOME</p>
        </div>
     );
}

export default Home;
