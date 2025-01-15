import React, {useEffect} from 'react'
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import useResponsiveHook from './utils/useResponsiveHook/useResponsiveHook';


function App() {
   
   const {isMobile , isTablet , isDesktop} = useResponsiveHook();
   console.log(isMobile , isTablet , isDesktop);
  return (
    <>
        <div>App</div>
        
       
    </>
  )
}

const domNode = document.getElementById("root");
render(<App />, domNode);

export default App