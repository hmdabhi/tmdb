import React from 'react';
import FontAwesomeIcon from "react-fontawesome";
const Ellipsis = () => {
    return (
        <div className='w-full h-full bg-white/50 rounded-full flex justify-center items-center hover:cursor-pointer'>
         <div className='scale-[0.22] flex gap-[2px] hover:scale-[0.42] hover:text-gray-600'>
            <FontAwesomeIcon name='circle'/>
            <FontAwesomeIcon name='circle'/>
            <FontAwesomeIcon name='circle'/>
         </div>   
        </div>
    );
}

export default Ellipsis;
