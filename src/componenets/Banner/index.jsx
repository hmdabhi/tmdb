import React,{useRef} from 'react';
import SearchBtn from '../baseUi/Button/SearchBtn';
import SearchInput from '../baseUi/Input/SearchInput';

const Banner = () => {
  const serchInputref =  useRef();

  const handekKeyDown = (event)=>{
    if(event.key === 'Enter'){
    handelSearch();
    }

  };
  const handelSearch= ()=>{
    //handel search logic

  };
    return (
        <div className='h-[300px] bg-banner bg-cover'>
        <div className='flex flex-col gap-10 px-10 py-10'>
          <div className='text-white'>
            <h2 className='font-bold text-5xl'>Welcome</h2>
            <h3 className='font-semibold text-[1.5rem] leading-1'>Millions of movies,TV shows and people</h3>

          </div>
          <div className='relative'>
            <SearchInput ref={serchInputref} onKeyDown={handekKeyDown} />
            <div className='absolute top-0 right-0'>
            <SearchBtn onClick={handelSearch}/>
            </div>
          </div>
        </div>
          
        </div>
    );
}

export default Banner;



