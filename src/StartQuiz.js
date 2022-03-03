import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import {Howl, Howler} from 'howler';
import answerLock from './audio/Final_answer_lock.mp3'
import answerCorrect from './audio/correct.mp3'
import answerWrong from './audio/wrong.mp3'
import letsPlay from './audio/lets_play.mp3'
import thinking from './audio/Thinkinng.mp3'
import confirm from './audio/confirm.mp3'
import confirmLoop from './audio/confirm_loop.mp3'
import bgImg from './images/bg1.jpg'
import { motion } from "framer-motion";
import useSound from "./components/useSounds";

const ListVariants = {
    hidden_L:{opacity: 0, x:'-50vw', },
    hidden_R:{opacity: 0, x:'50vw', },
    visible_1:{opacity: 1, x: '0' ,transition:{duration:0.5,ease: "easeOut",type: "tween", delay:0}},
    visible_2:{opacity: 1, x: '0' ,transition:{duration:0.5,ease: "easeOut",type: "tween", delay:2}},
    visible_3:{opacity: 1, x: '0' ,transition:{duration:0.5,ease: "easeOut",type: "tween", delay:3.5}},
    visible_4:{opacity: 1, x: '0' ,transition:{duration:0.5,ease: "easeOut",type: "tween", delay:5}},
    hiddenGo:{opacity:0}
}

const titleAnim ={
    hidden:{opacity:0, scale:0},
    animate:{opacity:1, scale:1, transition:{duration:1}}
}

const StartQuiz = () => {

    const {id} = useParams()
    
    // let {effect} = useSound(2)

    const [qPage, setQpage] = useState(0)
    const [ usAnswer , setUsAnswer] = useState(null)
    const [qz, setQz] = useState()
    const [paused, setPause] = useState(false);
    // const [effect, setEffect] = useState(1);
    const [sloop, setsLoop] = useState(true);
    // const effects = [answerLock, answerCorrect, answerWrong]
    // const audioConfirm = new Audio(answerLock)
    // const revealSound = new Howl({

        // src: effects[effect]
    // })
    const [ended, setEnded] = useState(false);


    const audioAnswerLock = useRef(null)
    const audioAnswerLoop = useRef(null)
    const audioThinkingLoop = useRef(null)
    
    const playAudioConfirm = () =>{
        
        audioAnswerLock.current.play()
        pasueAudios()

        setInterval(()=>{
            // console.log(audioAnswerLock.current.currentTime);
        },1000)

        audioAnswerLock.current.addEventListener('ended',()=>{
            console.log("ended audio");
            audioAnswerLoop.current.play()
            audioAnswerLoop.current.loop = true;

        } )
        
    }

   
    
    // const playAudioConfirmLoop = () =>{
    //     audioAnswerLock.current.currentTime = 5000;
    //     audioAnswerLock.current.play()
    // }
    const pasueAudios = () =>{
        // audioAnswerLock.current.pause()
        // audioAnswerLock.current.currentTime = 0;
        audioAnswerLoop.current.pause();
        audioAnswerLoop.current.currentTime = 0;
        audioThinkingLoop.current.pause()
        audioThinkingLoop.current.currentTime = 0;

    }



    let [currEfct, setCurrEfct] = useState(0)
    const soundLetsPlay = new Audio(letsPlay);

    const soundSource = [answerLock, answerCorrect, answerWrong]

    const soundEffects = (sno,playStat) =>{
        console.log("effects play");
        let effect = new Audio(soundSource[sno])
        effect.play()
    }





   
    const [bgMusic, setBgMusic] = useState(false)


    const soundThinking = new Audio(thinking);

    const thinkingBg = () =>{
        setBgMusic(!bgMusic)
    }

    useEffect(()=>{
        bgMusic ? soundThinking.play() : soundThinking.pause();
        console.log(soundThinking);
    },[bgMusic])


   

    // const confirmSound = new Howl({
    //     src: soundSource[0],
    //     sprite: {
    //         track01: [0, 5000],
    //         track02: [0, 150000, true],
    //       },
    //   });
    // const confirmAudio = () =>{
            // confirmSound.play('track02');

        //     setTimeout(() => {
        //         confirmSound.play('track02');
        //     }, 3000);    
            // setTimeout(() => {
            //     if(paused){
            //         confirmSound.stop() 
            //     }
            // }, 1000);
    // }
    const stopbgAudio = () =>{
        // setPause(true)
        // confirmAudio(playing)
        // audioConfirm.pause()
        console.log("Stop clickeed");

        // audioConfirm.loop = true;
        // var snd = audioConfirm.howl;
        // snd.pause()
        // setInterval(() => {
        //     console.log(Math.floor(audioConfirm.currentTime));
        // }, 1000);
        // setsLoop(false)
        // confirmSound.stop()
        // setTimeout(() => {
        //     confirmSound.stop()
        // }, 100);
        // confirmSound.stop()
        // confirmSound.pause()
    }

    const testClick = () =>{
        soundEffects(0)
        // audioConfirm.stop()
        console.log("TESTTTTTT clickeed");
    }
    // const audio = new Audio('./audio/Final_answer_lock.mp3');
    useEffect(()=>{
        fetch('https://million-quest-api.herokuapp.com/questions')
        .then(res => res.json())
        .then(data => {
            const result = data.filter(one => one.gid === id);
            console.log(data, id)
            console.log(result)
            setQz(result)
            // setShowAnswr(data)
        })

    },[qPage,usAnswer])

    useEffect(()=>{
        soundLetsPlay.play()
        //Stop music for testing
        seAnim(false)


        audioThinkingLoop.current.play()
        audioThinkingLoop.current.loop = true;
        
        setTimeout(() => {
            revealOptions()
        }, 3000);

    },[qPage])

    const addConfirmAnswer = (e) =>{

        
        playAudioConfirm()



        // confirmAudio()
        // soundEffects(0)
        if(e.target.localName === "p" ){
            const selected = document.querySelectorAll('.confirmed') ;
            if(selected.length === 1){
                selected[0].classList.remove("confirmed")
                e.target.classList.add('confirmed')
                // audioConfirm.play()
            }else{
                e.target.classList.add('confirmed')
                // audioConfirm.play()
            }
            console.log(e.target.id);
            if(e.target.id === qz[`${qPage}`].answer){
                setUsAnswer(true)
                // setEffect(1)
                console.log("Answe is "+qz[`${qPage}`].answer+ " and Correct " + usAnswer);
            }else{
                setUsAnswer(false)
                // setEffect(2)
                console.log("Answe is "+qz[`${qPage}`].answer+ " and Wrong "+ usAnswer);
            }
        }
    }
    const revealAnswer = () =>{
        // audioConfirm.pause()
        if(usAnswer){
            pasueAudios()
           

            // alert("Correct")
            // revealSound.play()
            soundEffects(1)
            // audioConfirm.pause()
            // audioConfirm.currentTime = 0;
        }else{
            pasueAudios()

            // alert("Wrong")
            soundEffects(2)
            // revealSound.play()
            // audioConfirm.pause()
            // audioConfirm.currentTime = 0;
        }   
    }

    const [qi,setQi] = useState(1)
    const [anim,seAnim] = useState(false)
    const revealOptions = () =>{
        seAnim(true)


        // if(qi<5){
        //     const qOp = document.getElementById(qi)
        //     qOp.setAttribute("animate", "visible")
        //     console.log(qOp);
        //     setQi(qi+1)
        //     console.log(qi);
        // }
    }
   

    return ( 
        <div style={{height:'100%'}}>
            <audio src={confirm} ref={audioAnswerLock}></audio>
            <audio src={confirmLoop} ref={audioAnswerLoop}></audio>
            <audio src={thinking} ref={audioThinkingLoop}></audio>
            <img className="qzwz-bg" src={bgImg} alt="" />
            {
               qz &&
               <div  style={{height:'100%', display:'grid',gridTemplateRows:'1fr auto'}}>
                   <div className="qz-wizad">
                       {/* {console.log(qz[`${qPage}`].answer)} */}
                       {/* <h2>Answer - {qz[`${qPage}`].answer}</h2> */}
                        <motion.div className="qw-title"
                            variants={titleAnim}
                            initial = "hidden"
                            animate = "animate"

                        ><b> { qz[`${qPage}`].qzTitle}</b></motion.div> 
                        <div className="qw-options" onClick={(e)=> addConfirmAnswer(e)}>
                            <div>
                                <motion.p id="1" variants={ListVariants} initial = "hidden_L" animate = {anim ? 'visible_1': 'hiddenGo'}>A . {qz[`${qPage}`].a1}</motion.p>
                                <motion.p id="3" variants={ListVariants} initial = "hidden_L" animate = {anim ? 'visible_3': 'hiddenGo'}>C . {qz[`${qPage}`].a3}</motion.p>
                            </div>
                            <div>
                                <motion.p id="2" variants={ListVariants} initial = "hidden_R" animate = {anim ? 'visible_2': 'hiddenGo'}>B . {qz[`${qPage}`].a2}</motion.p>
                                <motion.p id="4" variants={ListVariants} initial = "hidden_R" animate = {anim ? 'visible_4': 'hiddenGo'}>D . {qz[`${qPage}`].a4}</motion.p>
                            </div>
                        </div>
                   </div>

                    <div className="control-panel">

                         <button onClick={()=>revealAnswer()}>Reveal Answer</button>
                         <button onClick={()=>revealOptions()}>Reveal Options</button>

                        <div>
                            <button onClick={()=>setQpage(qPage-1)}>Previous</button>
                            <button onClick={()=>setQpage(qPage+1)}>Next</button>
                        </div>
                        
                        {/* <button onClick={()=>stopbgAudio()}>STOP</button>
                        <button onClick={()=>testClick()}>Test</button>
                        <button onClick={()=>thinkingBg()}>Thinking</button> */}
                    </div>
               </div>
               
            }
            {
                // qz &&
                // qz.map((question,i)=>{
                //     return(
                //         <div className="qs-view" key={i}>
                //             <h5>{question.qzTitle}</h5>
                //             <div className="qz-options">
                //                 <p>{question.a1}</p>
                //                 <p>{question.a2}</p>
                //                 <p>{question.a3}</p>
                //                 <p>{question.a4}</p>
                //             </div>
                //         </div>
                //     )
                // })
            }
            
        </div>
     );
}
 
export default StartQuiz;