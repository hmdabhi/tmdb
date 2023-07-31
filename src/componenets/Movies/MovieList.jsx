import React,{useState,useEffect} from 'react';
import MovieCard from './MovieCard';
import tmdb from '../../api/tmdb';
import { request } from '../../api/request';
import Blur from '../baseUi/blur/blur';

const MovieList = ({fetch}) => {
    const[movies,setMovies]=useState([]);
    useEffect(()=>{
        //fetching action here
       const fetchMovies = async()=>{
        const {data} = await tmdb.get(request[fetch]);
        setMovies(data.results);
       }
       fetchMovies();

    },[fetch])
    
    return (
        <div className='flex pb-5 pl-5 pr-9 overflow-x-auto '>
        
            {movies.map((movie,index)=>{
                return <MovieCard key={index} {...movie}/>
            })}
            <div className='absolute  top-0 right-0 h-full w-12'>
            
                <Blur/>
            </div>
        </div>
    );
}

export default MovieList;
// const Movies =[
//     {
//         title: "the voice",
//         imgURL: 'https://www.themoviedb.org/t/p/w220_and_h330_face/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg',
//         date:'Jul 25,2020'

//     },
//     {
//         title: "the voice",
//         imgURL: 'https://www.themoviedb.org/t/p/w220_and_h330_face/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg',
//         date:'Jul 25,2020'

//     },
//     {
//         title: "the voice",
//         imgURL: 'https://www.themoviedb.org/t/p/w220_and_h330_face/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg',
//         date:'Jul 25,2020'

//     },
//     {
//         title: "the voice",
//         imgURL: 'https://www.themoviedb.org/t/p/w220_and_h330_face/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg',
//         date:'Jul 25,2020'

//     },
//     {
//         title: "the voice",
//         imgURL: 'https://www.themoviedb.org/t/p/w220_and_h330_face/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg',
//         date:'Jul 25,2020'

//     },
//     {
//         title: "the voice",
//         imgURL: 'https://www.themoviedb.org/t/p/w220_and_h330_face/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg',
//         date:'Jul 25,2020'

//     },
//     {
//         title: "the voice",
//         imgURL: 'https://www.themoviedb.org/t/p/w220_and_h330_face/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg',
//         date:'Jul 25,2020'

//     },
//     {
//         title: "the voice",
//         imgURL: 'https://www.themoviedb.org/t/p/w220_and_h330_face/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg',
//         date:'Jul 25,2020'

//     },
//     {
//         title: "the voice",
//         imgURL: 'https://www.themoviedb.org/t/p/w220_and_h330_face/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg',
//         date:'Jul 25,2020'

//     },
//     {
//         title: "the voice",
//         imgURL: 'https://www.themoviedb.org/t/p/w220_and_h330_face/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg',
//         date:'Jul 25,2020'

//     },
//     {
//         title: "the voice",
//         imgURL: 'https://www.themoviedb.org/t/p/w220_and_h330_face/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg',
//         date:'Jul 25,2020'

//     },
//     {
//         title: "the voice",
//         imgURL: 'https://www.themoviedb.org/t/p/w220_and_h330_face/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg',
//         date:'Jul 25,2020'

//     }
// ]

