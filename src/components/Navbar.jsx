import {Link} from "react-router-dom";

function Navbar () {
    return (
        <nav className="bg-blue-600 text-white p-4 flex gap-6">
            <Link to= "/" className="font-bold"> Fitness Tracker
            </Link>
            <Link to= "/add"> Add Workout
            </Link>
             <Link to= "/history"> History
            </Link>
            <Link to= "/exercises"> Exercises
            </Link>
        </nav>
    );

}
export default Navbar;