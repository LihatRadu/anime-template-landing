import {anime} from '../data/anime';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function AnimeList() {
 const history = useNavigate();

  const [selectedAnime, setSelectedAnime] = useState(null);

  const handleClick = (anime) =>{
    setSelectedAnime(anime);
    history('/details');
  }
  return (
   
    <>
      <h1 className="font-bold text-5xl text-center py-20" style={{color:"#bef98e"}}>Anime List</h1>
      <div className="flex justify-center items center bg-gradient-to-b from-blue-300 to-green-300 bg-clip-content">
        <div className="grid grid-cols-3 gap-4 py-10">
          {anime.map((anime) => (
            <div key={anime.name} className="max-w-sm rounded-lg shadow-2xl bg-white">
              <div className="p-6">
                <img src={anime.cover} alt={anime.name} onClick={() => handleClick(anime)} style={{width:"480px", height:"480px"}}/>
                <h5 className="text-gray-900 text-3xl font-medium mb-2">{anime.name}</h5>
                <p className="text-gray-700 text-base mb-4">{anime.genre}</p>
                <p className="text-gray-700 text-base mb-4">{anime.duration} minutes</p>
                <p className="text-gray-700 text-base mb-4">{anime.description}</p>
              </div>
            </div>
            ))}
        </div>
         <button className='btn hover:btn-outline bg-gradient-to-r from-red-400 to-orange-400 justify-center text-white'>Read More</button>
      </div>
      {selectedAnime && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 max-w-md rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">{selectedAnime.name}</h2>
            <p className="text-gray-700 mb-4">{selectedAnime.description}</p>
            {/* Add more details as needed */}
            <button onClick={() => setSelectedAnime(null)}>Close</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnimeList
