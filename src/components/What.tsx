import anke from '../assets/AnkeHappy.png';
import altoo from "../assets/AaltoCool.png";
import { animworld } from '../data/data';

function What() {

  return(
    <>
      <div className="text-center py-20">
        <h1 className="font-bold text-5xl" style={{color:"#ff0e5b"}}>What is ANIME WORLD?</h1>
        <div className="flex justify-center items-center mt-10">
            <div className="max-w-sm rounded-lg shadow-2xl mr-10">
                <img src={anke} className="w-full rounded-lg transform -scale-x-100" alt="AnkeHappy Image" />
            </div>
            <p style={{color:"#ff0e5b"}} className="max-w-md">
               {animworld.description} 
            </p>
            <div className="max-w-sm rounded-lg shadow-2xl ml-10">
                <img src={altoo} className="w-full rounded-lg" alt="AaltoCool Image" />
            </div>
        </div>
    </div>
    </>
  )
}

export default What
