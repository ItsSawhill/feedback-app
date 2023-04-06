import { createContext,useState } from "react";
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider =({children})=>
{
const[feedback,setfeedback] = useState([
    {
        id:1,
        text:'This is feedback item 1',
        rating:10
    },
    {
        id:2,
        text:'THis is feedback item 2',
        rating:8
    },
    {
        id:3,
        text:'THis is feedback item 3',
        rating:6
    },
])
const[feedbackEdit,SetFeedbackEdit] = useState({
    item:{},
    edit:false
})

//Addfeedback
const addFeedback=(newFeedback)=>{
    newFeedback.id = uuidv4()
    setfeedback([newFeedback,...feedback])
 }
 //Delete feedback
const deleteFeedback=(id)=>{
    if(window.confirm("Are you sure you want to delete?"))
    { setfeedback(feedback.filter((item)=>item.id !==id))
    }
}
//update feedbak item
const updateFeedback = (id,updItem)=>{
   setfeedback(
    feedback.map((item)=>(item.id===id ? {...item,...updItem}:item))
   )
}

//Set item to be updated
const editFeedback=(item)=>{
    SetFeedbackEdit({
        item,
        edit: true
    })
}
return <FeedbackContext.Provider value={{
   feedback,
   feedbackEdit,
   deleteFeedback,
   addFeedback,
   editFeedback,
   updateFeedback,
}}>
    {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext