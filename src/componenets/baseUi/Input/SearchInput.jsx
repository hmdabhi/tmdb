import React,{forwardRef} from 'react';

const SearchInput = forwardRef((props,ref) => {
       return <>
        <input {...props} type="text" ref={ref}  
        className='w-full h-11 rounded-[8rem] outline-none px-5 py-3  placeholder:text-slate-500 text-black/50'
         placeholder='search for movie,tv show or people.........'/>
        </>
})

export default SearchInput;
