import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Wws from "./components/Wws";
import Om from "./components/Om"
import Wts from "./components/Wts"


const App = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50">
     <Navbar />
     <br />
     <main className="w-full flex-1" >
       <div className="w-full" >
         <Banner />
       </div>
       <div className="w-full">
  <Wws />
  <Om />
  <Wts />
</div>
     </main>
    </div>
  );
};

export default App;
