
//import React from 'react';
import axios from "axios";


export default axios.create({
    baseURL:'https://api.themoviedb.org/3',
    headers:{
        accept:"application/json"
    },
    params:{
        api_key:'cc0fec874e64a6999bb7863a9e403840'   //15e383204c1b8a09dbfaaa4c01ed7e17
    }
})


//new key 31/07/2023 ===== cc0fec874e64a6999bb7863a9e403840
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzBmZWM4NzRlNjRhNjk5OWJiNzg2M2E5ZTQwMzg0MCIsInN1YiI6IjYzOWQ5NDA2YjU0MDAyMDA5NjFjZmI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wc9b-77hsRH9Ha1Pw3VxRD7eRKI85M5iajrZeVzlZxg
//