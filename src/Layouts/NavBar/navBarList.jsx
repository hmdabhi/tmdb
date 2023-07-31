import React from 'react';
import FontAwesomeIcon from 'react-fontawesome';

const NavBarList = (props) => {
  
    const getItem =(hereItem)=>{
        let itemList =null;
        switch(hereItem.type){
            case 'logo':
                itemList = <img className='h-5 min-w-[154px]' src={hereItem.src} alt={hereItem.name}/>
                break;
            case 'language':
                itemList=<p className='border-white rounded-[3px]  py-[1px] px-[3px] border-[1px] border-solid hover:bg-white hover:text-tmdbDarkBlue'>{hereItem.name}</p>   
                break; 
            case 'icon':
                itemList=<FontAwesomeIcon name={hereItem.name} size='lg'/>
                break;
            case 'search':
               itemList=<FontAwesomeIcon name={hereItem.name} size='lg'/>
               break;    
            default:
                    itemList =<p>{hereItem.name}</p>
                    break;
        }
        return itemList;
    };
    return (
        <ul className='flex gap-7'>
          {props.items.map((item) =>{
            return <li key={item.name}>{getItem(item)}</li>
          })}
        </ul>
    );
}

export default NavBarList;
