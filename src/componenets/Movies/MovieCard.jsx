import React from 'react';
import Ellipsis from '../baseUi/Ellipsis/ellipsis';
import Progresscircle from '../baseUi/progress-circle/progresscircle';
const getPosterUrl =(posterpath)=>{
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`;
}

const MovieCard = ({poster_path,name,first_air_date,title,release_date,vote_average}) => {
    return (
        <div className='flex px-5 flex-col  transition-all delay-150 ease-in'>
          <div className='relative'>
          <img src={getPosterUrl(poster_path)} alt={name || title} className="w-[150px] h-[225px] shadow-sm rounded-md" />
          <div className='absolute bottom-[0.1rem] left-2'>
           <Progresscircle percent={vote_average*10}/>
          </div>
          <div className=' w-[1.4rem] h-[1.4rem] absolute top-1 right-[10px]'>
            <Ellipsis/>
          </div>
          </div>
          <div className='flex flex-col flex-wrap pt-5 px-4 w-[150px] '>
            <h1 className='font-bold  overflow-hidden'>{name || title}</h1>
            <p className='font-normal '>{first_air_date || release_date}</p>
          </div> 
        </div>
    );
}

export default MovieCard;
