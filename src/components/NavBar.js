import "./NavBar.css";
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'
import { useTheme } from "../hooks/useTheme";


export default function Navbar() {
    const { color } = useTheme();

    return (
        <div className="navbar" style={{ background: color}}>
            <nav>
                <Link to="/" className="brand">
                    <h1>Al-Nakhel Co. ltd</h1>
                </Link>
                <SearchBar></SearchBar>
                <Link to="/create">make order</Link>
            </nav>
        </div>
    )
}