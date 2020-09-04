import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';


 export default function App() {
   return(
     <div>
       <Header/>
       <NavBar/>       
      <p className="text-center text-red-600 font-semibold">Onismo Mudavanhu demo app running (react and tailwind css) .....</p> 
     </div>
       
   );
 }