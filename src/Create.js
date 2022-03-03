import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FaRegClock } from 'react-icons/fa';



const Create = () => {

    const[ qzGroup, setQzGroup ] = useState('');
    const[ groups, setGroups ] = useState(null);
    const[ reload, setReload] = useState(false);
    const [loading, setLoading] = useState(false)


    const element = <FontAwesomeIcon icon={faTrash} />

    useEffect(()=>{
        setLoading(true)
        fetch('https://million-quest-api.herokuapp.com/groups')
        .then(res => res.json())
        .then(data => {
            setGroups(data.sort((a, b) => b.id - a.id))
            console.log(data)
            setReload(false)
            setLoading(false)

        })

    },[reload])
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        setLoading(true)

        const group = {qzGroup}
        fetch('https://million-quest-api.herokuapp.com/groups',{
            method:'POST',
            headers:{"Content-type":"application/json"},
            body: JSON.stringify(group)
            }).then(()=>{
                setReload(true)
                console.log("New Group added");
                setLoading(false)

        })
    }

    const handleDelete = (id) =>{
        console.log('delete clicked');
        setLoading(true)

        fetch('https://million-quest-api.herokuapp.com/groups/'+id,{
            method:'DELETE'
        }).then(()=>{
            setReload(!reload)
            console.log("Deleted");
            setLoading(false)

        })

    }

    // let l_bg = '#ccc'
    var colors = ["#5c46b1","#3D2C8D","#916BBF","#C996CC","#8946A6","#B762C1","#5aa3ef","#e79f56"];

    const randomCl = () => colors[Math.floor(Math.random() * colors.length)]
    

    return ( 
        <div className="gp-container">
            {loading && <div className="loading"> <span> <FaRegClock /></span></div>}

            <h4 className="page-header">Create Question Group</h4>

            <br/>
            <form onSubmit={handleSubmit}>
                <div className="form-gp-hz">
                    <label>QZ Group</label>
                    <input 
                    required 
                    type="text"
                    value={qzGroup} 
                    onChange={(e)=> setQzGroup(e.target.value)}
                    />
                <button>Create Group</button>

                </div>
                
                {/* <label htmlFor=""> This is QZ - {qzGroup}</label> */}

            </form>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="groups-c">
                {groups && groups.map((group,i)=>{
                    return(
                        <motion.div className="grp-li" key={i}
                                initial={{opacity:0, y:-10, height: 50, }}
                                animate={{opacity:1, y:0, height:'inherit'}}
                                whileHover={{scale:1.03 ,backgroundColor:'#506783'}}
                        >
                            <Link to={`/create_qz/${group.id}`}>
                                <div className="g-letter">
                                    <span style={{background:`${randomCl()}`}}>{group.qzGroup.slice(0,1)}</span>
                                </div>
                                <h3>{group.qzGroup}</h3>
                            </Link>
                            <motion.button className="delete-btn" onClick={()=>handleDelete(group.id)}
                                whileHover={{backgroundColor:'#ffffff3d',color:'#fff'}}
                            >{element}</motion.button>

                        </motion.div>
                    )
                })}
            </div>
            
        </div>
     );
}
 
export default Create;