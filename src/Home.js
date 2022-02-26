import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Home = () => {

 const [qgroup, setQgroup] = useState()


    useEffect(()=>{
         


        fetch('http://localhost:8000/groups')
        .then(res => res.json())
        .then(data => {
            setQgroup(data.sort((a, b) => b.id - a.id))
            console.log(data)
        })
    },[])

    var colors = ["#5c46b1","#3D2C8D","#916BBF","#C996CC","#8946A6","#B762C1","#5aa3ef","#e79f56"];

    const randomCl = () => colors[Math.floor(Math.random() * colors.length)]

    return ( 
        <>
            <motion.h2 animate={{fontSize:50}} className="page-header">Choose a Group to Start the Game</motion.h2>
            <div className="container-home">
                {
                    qgroup &&
                    qgroup.map((group,i)=>{
                        return(
                            <motion.div className="gp-li"
                                initial={{opacity:0, y:-10, scale: 0.8}}
                                animate={{opacity:1, y:0, scale:1}}
                                whileHover={{scale:1.03 ,backgroundColor:'#506783'}}
                                key={i}
                            >
                                <div >
                                    <Link to={`/start_qz/${group.id}`}>
                                        <div className="g-letter">
                                            <span style={{background:`${randomCl()}`}}>{group.qzGroup.slice(0,1)}</span>
                                        </div>
                                        <h3>{group.qzGroup}</h3>
                                    </Link>
                                </div>
                            </motion.div>
                            
                        )
                    })
                }
            </div>
        </>

     );
}
 
export default Home;