import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { /*useEffect,*/ useState } from "react";

const Navbar = () => {

  const [hidden, setHidden] = useState(false);
  const {scrollY} = useScroll();

  /*useEffect(() =>{
    scrollY.onChange(() => {
      if(scrollY.get() > 0){
        setHidden(true);
      }else{
        setHidden(false);
      }
    }, [scrollY]);
  })*/
  useMotionValueEvent(scrollY, "change", (latest) =>{
    
    const previous = scrollY.getPrevious();

    if(latest > previous && latest > 150){
      setHidden(true);
    }else{
      setHidden(false);
    }
  })
  
  return (
   <>
      <motion.nav variants={{visible:{y:0}, hidden:{y:"-100%"},}} animate={hidden ? "hidden" : "visible"} 
        transition={{duration:0.35, ease:"easeInOut"}} className="navbar justify-evenly
        space-x-10 tracking-normal">
        <ul className="flex space-x-10 font-serif">
          <motion.li animate={{background:"var(--action)"}}>
            <a className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text" href="#">
              Home
            </a>
          </motion.li>
          <li className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
            <a href="#">About</a>
          </li>
          <li className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
            <a href="#">Contact</a>
          </li>
        </ul>
      </motion.nav>
    </>
  )
}

export default Navbar;
