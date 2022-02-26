import { useState, useEffect } from "react"
import answerLock from './../audio/Final_answer_lock.mp3'
import answerCorrect from './../audio/correct.mp3'
import answerWrong from './../audio/wrong.mp3'

const useSound = (no) => {


        const soundSource = [answerLock, answerCorrect, answerWrong]
        // let sno = 0;
        let effect;

        useEffect(()=>{
            console.log("effects play");
        //      effect = new Audio(soundSource[sno])
        },[])

        
        

        
        
        
        return {effect}

}
 
export default useSound;