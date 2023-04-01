import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import {useState} from "react"
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import React from 'react'
import AboutPages from './pages/AboutPages'
import AboutIconLink from './components/AboutIconLink'

function App(){
    const[feedback,setFeedback]= useState(FeedbackData)
    
    const addFeedback=(newFeedback)=>{
           newFeedback.id = uuidv4()
           setFeedback([newFeedback,...feedback])
        }

    const deleteFeedback=(id)=>{
        if(window.confirm("Are you sure you want to delete?"))
        { setFeedback(feedback.filter((item)=>item.id !==id))
        }
    }
    return (
    <>
    <Header />
    <div className='container' >
   
       
    <FeedbackForm handleAdd={(addFeedback)}/>
    <FeedbackStats feedback={feedback}/>
    <FeedbackList feedback={feedback}
     handleDelete={deleteFeedback}/>
  
 {/*
    <AboutPages/>
    
    <AboutIconLink/> */}
     </div>
     </>
    )
}

export default App