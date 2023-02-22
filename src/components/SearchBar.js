import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css"

export default function SearchBar() {
    const [term, setTerm] = useState('')
    const naviagte = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        naviagte(`/search?q=${term}`)

    }
    return ( 
        <div className="searchBar">
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search</label>
                <input type="text"
                id="search"
                onChange={e => setTerm(e.target.value)}
                required
            />
            </form>
        </div>
     );
}