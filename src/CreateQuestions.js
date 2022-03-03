import { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faCircleMinus } from '@fortawesome/free-solid-svg-icons'
import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";

const ListVariants = {
    hidden:{
        opacity: 0, 
        y:-10, 
        scale:0.9
    },
    visible:{
        opacity:1, 
        y:0, 
        scale:1,
    }
}

const btnVariant ={
    animate:{
        fontSize : '16px',
        scale: 1.05,
        transition:{
            duration:0.2
        }
    }
}


const CreateQuiz = () => {
    const {id} = useParams()

    
    const[ qzTitle, setQzTitle ] = useState('');
    const[ a1, setA1 ] = useState('');
    const[ a2, setA2 ] = useState('');
    const[ a3, setA3 ] = useState('');
    const[ a4, setA4 ] = useState('');
    const[gid, setGid] = useState(id)
    const[editig, setEditing] = useState('')

    const [editId, setEditId] = useState(null)

    const [questions, setQuestions] = useState(null)
    const [group, setGroup] = useState(null)

    const [answer,setAnswer] = useState(null)

    const [reload, setReload] = useState(false)



    const icoRemove = <FontAwesomeIcon icon={faCircleMinus} />
    const icoEdit = <FontAwesomeIcon icon={faPen} />

    // const icoEdit = <FontAwesomeIcon icon={faPenCircle} />

    const [questionOrder, setQuestionOrder] = useState()


    const handleSubmit = (e) =>{
        e.preventDefault()
        if(answer){
            const questions = {qzTitle, a1, a2, a3, a4, gid, answer}

            fetch('https://million-quest-api.herokuapp.com/questions/',{
                method:'POST',
                headers:{"Content-type":"application/json"},
                body: JSON.stringify(questions)
                }).then(()=>{
                    setReload(true)
                    console.log("New question added");
            })
        } else{
            alert('Please select')
        }
        
    }

    useEffect(()=>{
        fetch('https://million-quest-api.herokuapp.com/questions')
        .then(res => res.json())
        .then(data => {
            // setQuestions(data.filter(qz => qz.gid == gid).sort((a, b) => b.id - a.id))
            setQuestions(data.filter(qz => qz.gid == gid))
            console.log(data.filter(qz => qz.gid == gid).sort((a, b) => b.id - a.id))
            // setShowAnswr(data)
            setReload(false)

        })

    },[reload])


    const handleDelete = (id) =>{
        console.log('delete clicked');
        fetch('https://million-quest-api.herokuapp.com/questions/'+id,{
            method:'DELETE'
        }).then(()=>{
            setReload(!reload)
            console.log("Deleted");

        })

    }

    const [editSelected , setEditSelected] = useState('q__edit')

    const listEdit = (id,e) =>{
        // console.log(e.target.parentNode);
        e.target.parentNode.parentNode.classList.add('q__edit')
        setEditSelected('q__edit')
        fetch('https://million-quest-api.herokuapp.com/questions/'+id)
        .then(res => res.json())
        .then(data =>{
            console.log(data.qzTitle);
            setQzTitle(data.qzTitle)
            setA1(data.a1)
            setA2(data.a2)
            setA3(data.a3)
            setA4(data.a4)
            setAnswer(data.answer)
            setEditId(id)
            setEditing('editing')
        })
    }

    const listEditCancel = (e) =>{
        // e.target.parentNode.parentNode.classList.remove('q__edit')
        setQzTitle('')
        setA1('')
        setA2('')
        setA3('')
        setA4('')
        setAnswer(null)
        setEditing('')
        setEditSelected('')

        // const editSelected = document.getElementsByClassName('q__edit')
        // editSelected.classList.remove('q__edit')
    }

    const handleEdit =(id) => {
        if(answer){
            const questionsUpdate = {qzTitle, a1, a2, a3, a4, gid, answer}
            fetch('https://million-quest-api.herokuapp.com/questions/'+id,{
                method:'PUT',
                headers:{"Content-type":"application/json"},
                body: JSON.stringify(questionsUpdate)
            }
            ).then(()=>{
                setQzTitle('')
                setA1('')
                setA2('')
                setA3('')
                setA4('')
                setAnswer(null)
                setReload(!reload)
                setEditing('')
            })
        }else{
            alert('Please')
        }
        
        


    }

    useEffect(()=>{
        fetch('https://million-quest-api.herokuapp.com/groups')
        .then(res => res.json())
        .then(data => {
            setGroup(data.filter(gp =>gp.id == gid)[0].qzGroup)
            console.log(data.filter(gp =>gp.id == gid)[0].qzGroup);
            setReload(false)
            setEditing('')
        })

    },[])


    const setShowAnswr = (a,i) =>{

        // const qzDiv = document.querySelectorAll(".qz-li")
        // const divsArr = Array.from(qzDiv);
        // console.log(divsArr);
        // const qzDiv = `.qz-${i}`;
        // const showAnswer = `.qz-${i}`.querySelector(`.op-${a}`)

        const opList = document.querySelectorAll
        
    }

    // re order array
    const reoder = (questions, startIndex, endIndex) =>{
        const result = Array.from(questions)
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    }


    const onEnd = (result) =>{
        console.log(result);
        setQuestions(reoder(questions, result.source.index, result.destination.index))
        console.log(questions);

    }

    

    return ( 
        <div className={`create-qz ${editig}`}>
            <h4 className="page-header">This is create qz</h4>
            <div className="qz-container">
                <div className="qz-form">
                    {/* <form> */}
                    <form onSubmit={handleSubmit}>
                        <div className="form-th">
                            <label>QZ Title</label>

                            <textarea 
                            required 
                            type="text"
                            value={qzTitle} 
                            onChange={(e)=> setQzTitle(e.target.value)}
                            />
                        </div>
                        <br/>
                        <br/>
                        <div className="form-th">
                            <div>
                                <input type="radio" id="1" name="correct_answer" value="1"  onChange={(e)=>{setAnswer(e.target.value)}} />
                                <label htmlFor="1">Answer <span>A</span> </label>

                            </div>
                            <input
                            required 
                            type="text"
                            value={a1} 
                            onChange={(e)=> setA1(e.target.value)}
                            />
                        </div>
                        
                        <div className="form-th">
                            <div>
                                <input type="radio" id="2" name="correct_answer" value="2" onChange={(e)=>{setAnswer(e.target.value)}} />
                                <label htmlFor="2">Answer <span>B</span></label>

                            </div>
                            <input
                            required 
                            type="text"
                            value={a2} 
                            onChange={(e)=> setA2(e.target.value)}
                            />
                        </div>

                        <div className="form-th">
                            <div>
                                <input type="radio" id="3" name="correct_answer" value="3" onChange={(e)=>{setAnswer(e.target.value)}} />
                                <label htmlFor="3">Answer <span>C</span></label>


                            </div>
                            <input
                            required 
                            type="text"
                            value={a3} 
                            onChange={(e)=> setA3(e.target.value)}
                            />
                        </div>

                        <div className="form-th">
                            <div>
                                <input type="radio" id="4" name="correct_answer" value="4" onChange={(e)=>{setAnswer(e.target.value)}} />
                                <label htmlFor="4">Answer <span>D</span></label>

                            </div>
                            <input
                            required 
                            type="text"
                            value={a4} 
                            onChange={(e)=> setA4(e.target.value)}
                            />
                        </div>


                        
                        <br/>
                        <motion.button className="from-btn bt-add"
                            variants={btnVariant}
                            whileHover= "animate"
                        >Add Quistions</motion.button>

                    </form>
                    <div className="edit-opt">
                        <motion.button className="from-btn bt-edit" style={{flex:2}} onClick={()=>handleEdit(editId)}
                            variants={btnVariant}
                            whileHover= "animate"
                        >Edit Question</motion.button>
                        <button className="from-btn bt-cancel" style={{flex:1}} onClick={(e)=>listEditCancel(e)}> Cancel </button>

                    </div>
                    


                        
                        

                            {/* {console.log(answer)} */}
                        {/* <div>
                            <label htmlFor=""> This is A1 - {a1}</label><br/>
                            <label htmlFor=""> This is A2 - {a2}</label><br/>
                            <label htmlFor=""> This is A3 - {a3}</label><br/>
                            <label htmlFor=""> This is A4 - {a4}</label><br/>
                        </div> */}
                </div>
                <div className="qz-view" >

                    <h4 className="gp-title">{group} </h4>

                    {
                        questions &&
                        <DragDropContext onDragEnd={onEnd}>
                        <Droppable
                            droppableId="123456"
                        >

                            {(provided, snapshot)=>(
                                <div
                                    ref={provided.innerRef}
                                >
                                    {
                                        questions.map((qz,i)=>(
                                            <Draggable
                                                draggableId={qz.id.toString()}
                                                key={qz.id}
                                                index={i}
                                            >
                                                {
                                                    (provided, snapshot) =>(
                                                        <div

                                                            className={`qz-li qz-${i+1}`}
                                                           

                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                        >
                                                            <div>
                                                                <div className="qo-opt">
                                                                        {
                                                                            editig.length == 0 ? <button onClick={(e)=>listEdit(qz.id,e)}>Edit </button> : ''
                                                                        }


                                                                        <button onClick={()=>handleDelete(qz.id)}>{icoRemove}</button>

                                                                </div>
                                                                <h3> <span> {i+1}</span> {qz.qzTitle}</h3>
                                                                <div className="qo-set">

                                                                        <p className={`1 ${qz.answer === "1" ? "correct": ""}`}>{qz.a1}</p>
                                                                        <p className={`2 ${qz.answer === "2" ? "correct": ""}`}>{qz.a2}</p>
                                                                        <p className={`3 ${qz.answer === "3" ? "correct": ""}`}>{qz.a3}</p>
                                                                        <p className={`4 ${qz.answer === "4" ? "correct": ""}`}>{qz.a4}</p>

                                                                    </div>
                                                                </div>




                                                            </div>
                                                    )
                                                }
                                            </Draggable>
                                        ))
                                    }
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                        </DragDropContext>

                        
                    }

               
                    
                   
                </div> 
            </div>
              
            
        </div>
     );
}
 
export default CreateQuiz;