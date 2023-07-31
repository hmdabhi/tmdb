//import { Container } from 'postcss'
import React,{useState} from 'react'
import Banner from './componenets/Banner'
import Header from './componenets/Header/Header'
import MovieList from './componenets/Movies/MovieList'
import Footer from './footer/footer'
import Signup from './signup/Signup'
//import MovieCard from './componenets/Movies/MovieCard'
import Container from './Layouts/container' 
import Section from './Layouts/Section/Section'
export default function App() {
 
  const [sectionToggle,setSectionToggle]=useState({
    first:"On Tv",
    second:"On Tv",
    third:"Today"
  });
 
  const handelToggle = (section,selectedvalue)=>{
    setSectionToggle(prev=>{
        return{
          ...prev,
          [section]:selectedvalue
        }
        //isToggleVal();
        
    })
  };
  console.log(sectionToggle)
  return (
    <React.Fragment>
     <Header />
     <Container>
     <Banner />
     <Section title="what's new?" items={["On Tv","In Theaters"]} onToggle={handelToggle.bind(null,'first')} isToggle={sectionToggle.first==='On Tv' ?false:true}>
      <MovieList fetch={sectionToggle.first}/>

     </Section>
     {/* title="What's popular" items={["some really long section","small"] */}
     <Section title="What you want?" items={["Arriving Today","Top Rated"]} onToggle={handelToggle.bind(null,'second')} isToggle={sectionToggle.first==='On Tv'?false:true}>
      <MovieList fetch={sectionToggle.second}/>

     </Section>
     <Signup/>
     
     
     </Container>
     <Footer/>
    </React.Fragment>
  )
}
