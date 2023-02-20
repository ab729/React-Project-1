import "./NavBar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <Link to="/" className="brand">
                    <h1>Al-Nakhel Co. ltd</h1>
                </Link>
                <Link to="/create">make order</Link>
            </nav>
        </div>
    )
}