import { Link } from "react-router-dom";


const Navbar = () => {
    return ( 
        <div className="nav-header">
            <h3>This is nav</h3>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create</Link>
                {/* <a href="/">Home</a>
                <a href="/create" style={{
                    color: "blue",
                    backgroundColor: "#fcc"
                }}>Create</a> */}
            </div>
        </div>
     );
}
 
export default Navbar;