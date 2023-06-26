import './App.scss';
import React  from "react";
import Navbar from './navbar/Navbar';
import HomePage from './homepage/HomePage';
import Library from './library/Library';
import LoginPage from './loginpage/LoginPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

const App = () =>{
  return (
    <div className='MainContainer'>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>  
          <Route path='/Library' element={<Library/>}/>
          <Route path='/LoginPage' element={<LoginPage/>}/>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;

// const ShowMusic = ({backendData}) => {
//   return ( 
//     <div>
//       {backendData.map((data, index) => {
//         return (
//           <div>
//             {data}
//           </div>
//         )
//       })}
      
//     </div>
//   )
// }