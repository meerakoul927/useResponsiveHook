import React, {useEffect} from 'react'
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import useResponsiveHook from './utils/useResponsiveHook/useResponsiveHook';


function App() {
   
    useEffect(()=>{
        const result = useResponsiveHook();
        console.log(result);
    },[window.innerWidth])
   
  return (
    <div>App</div>
  )
}

const domNode = document.getElementById("root");
render(<App />, domNode);

export default App