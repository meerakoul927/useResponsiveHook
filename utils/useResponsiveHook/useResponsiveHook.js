import React , {useState , useEffect} from 'react'

function useResponsiveHook() {
    
    const [screenType , setScreenType] = useState({
        isMobile : false , 
        isDesktop : false,
        isTablet : false
    });
    useEffect(()=>{
          resizeEventHandler();
          Setup();
          cleanUp();
          
    },[]);
    const resizeEventHandler = () =>{
          const isMobile =window.innerWidth <= 768;
          const isTablet = window.innerWidth >= 768 && window.innerWidth < 1200;
          const isDesktop = window.innerWidth >= 1200 && window.innerWidth <= 1800;

          setScreenType({isMobile , isTablet , isDesktop});
    }
    const Setup = () => {
         window.addEventListener('resize' , resizeEventHandler )
    }
    const cleanUp = () => {
        window.addEventListener('resize' , resizeEventHandler )
   }
   
    return screenType;
  
}

export default useResponsiveHook