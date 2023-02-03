import React from "react";
import { Header } from "./Components/Header";
import { Section } from "./Components/Section";
import { Section1 } from "./Components/Section1";
import { Section2 } from "./Components/Section2";
import { Section3 } from "./Components/Section3";
import { Section4 } from "./Components/Section4";
// import { Cucak } from "./Components/section5";
// import { Routes, Route } from "react-router-dom";
// import { Nav } from './Components/section5/nav';

// import { Ims } from "./Components/section5/Imags";
import { Text } from "./Components/section6/Text";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Logos} from "./Components/Section7/logos"
import { Form } from './Components/section8/form';


function App() {


  return (<div className="App">

    <Header />
    <Section />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
     
     {/* <Routes>
    <Route path="/*" element={<Cucak/>}/>
    <Route path="/Imag" element={<Nav/>}/>
   </Routes>  
   
    <Ims /> */}
    <Text/>
    <Logos/>
    <Form/>
  </div>
  );
}

export default App;
