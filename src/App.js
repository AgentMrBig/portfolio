import React, { useEffect, useState } from "react";

import TopMenu from "./components/page_components/topMenu/topMenu.component";
import TestThree from './components/three/test_three.component';
import './App.scss'



function App() {
  return (
    <div>
      <TopMenu />
      <TestThree />
    </div>
  );
}

export default App;
