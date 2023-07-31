import React,{useState,useRef/*,useLayoutEffect*/} from 'react';
//import '../../../index.css';

const Switch = ({items,onToggle,isToggled}) => {
    const [togVal0,settogVal0] =useState(false);
    const itemref0 = useRef();
    const itemref1 = useRef();
    // const [itemWidth1,setWidth1]= useState();
    // const [itemWidth2,setWidth2]= useState();
    const itm1 = items[1];
    const itm0 =items[0];
   //set let togVal0 = true;
    
    // useLayoutEffect(()=>{
    //     setWidth1(itemref0.current.offsetwidth);
    //     setWidth2(itemref1.current.offsetwidth);
    // },[])
    const handelToggle0=(selectedItm)=>{
        onToggle(selectedItm);
        settogVal0(false);
        console.log('first item ',selectedItm)
        
        // togVal={selectedItm === "On Tv" ?false:true}

        
        
    };
    const handelToggle1=(selectedItm)=>{
        onToggle(selectedItm);
        settogVal0(true);
        
        // togVal={selectedItm === "On Tv" ?false:true}

        
        
    };
    //const toggleitem = isToggled?{props.items[1]:props.items[0]}
     
    //const sty = togVal0? "pl-`${itemWidth1}` w-[`${`itemWidth1`px}`]}":""  
    const activeTextColor = "bg-clip-text text-transparent bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]"
    return (
        // 'h-8 border-solid border-tmdbDarkBlue rounded-[30px] font-semibold flex items-center'
        <div className={" hover:cursor-pointer h-8 font-semibold flex flex-wrap items-center relative "}>
        <div ref={itemref0} onClick={handelToggle0.bind(null,itm0)} className={`py-1 px-5 h-8 rounded-[30px] ${!togVal0 && activeTextColor} `}>{itm0}</div>
        <div ref={itemref1} onClick={()=>{handelToggle1(itm1)}} className={`py-1 px-5 h-8 rounded-[30px] ${togVal0 && activeTextColor}`}>{itm1}</div>            
        {/* <div className={`h-8 bg-slate-600 rounded-[30px] absolute  z-[-1] transition-all duration-150 ease-in`} > .................</div> */}
        </div>
    );
}

export default Switch;
