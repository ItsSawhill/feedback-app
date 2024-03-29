import{motion,AnimatePresence} from "framer-motion"
import FeedbackItem from "./FeedbackItem"
import { useContext } from "react"
import React from "react"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackList() {
    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length===0){
        return<p>No FeedBack Yet</p>
    }
    return (
      <div className="feedback-list">
        <AnimatePresence>
          {feedback.map((item)=>(
            <motion.div key={item.id}
            inital={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}>
           <FeedbackItem key={item.id} item={item}
           ></FeedbackItem>
           </motion.div>
       ))}
        </AnimatePresence>
      </div>
    )
  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item)=>(
  //        <FeedbackItem key={item.id} item={item}
  //        handleDelete={handleDelete}></FeedbackItem>
  //     ))}
  //   </div>
  // )
}

// FeedbackList.propTypes={
//   feedback:PropTypes.arrayOf(
//     PropTypes.shape({
//       id:PropTypes.number.isRequired,
//       text:PropTypes.string.isRequired,
//       rating:PropTypes.number.isRequired,

//     })
//   ),
// }
export default FeedbackList
