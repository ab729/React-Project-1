import './Create.css'
import { useEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

export default function Create() {
    const [product, setProduct] = useState('')
    const [requests, setRequests] = useState('')
    const [deliveryTime, setDeliveryTime] = useState('')
    const [newSpec, setNewSpec] = useState('')
    const [specifications, setSpec] = useState([])
    const specInput = useRef(null)
    const navigate = useNavigate()
    const { mode, color } = useTheme()
    
    

    const { postData, data, error } = useFetch('http://localhost:3000/orders', 'POST')


    const handleSubmit = (e) => {
        e.preventDefault()
        postData({ product, specifications, requests, deliveryTime })        
    }
    const handleAdd = (e) => {
        e.preventDefault()
        const ing = newSpec.trim()

        if (ing && !specifications.includes(ing)) {
            setSpec(prevIngredients => [...prevIngredients, newSpec])
        }
        setNewSpec('')
        specInput.current.focus()
    }
    useEffect(() => {
        if (data) {
            navigate('/')
        }
    }, [data, navigate])
    return ( 
        <div className='create'>
            <h2 className="page-title" style={{ color: mode === 'dark' ? 'white' : 'black' }}>Make a new odrer</h2>


            <form onSubmit={handleSubmit}>

                <label>
                    <span style={{ color: mode === 'dark' ? 'white' : 'black' }}>Order name:</span>
                    <input type="text"
                        onChange={e => setProduct(e.target.value)} 
                        value={product}
                        required
                    />
                </label>

                <label>
                    <span style={{ color: mode === 'dark' ? 'white' : 'black' }}>Order Specifictions:</span>
                    <div className="spec">
                        <input
                         type="text"
                            onChange={e => setNewSpec(e.target.value)}
                            value={newSpec}
                            ref={specInput}
                          />
                        <button onClick={handleAdd} style={{ backgroundColor: color }}>Add</button>
                    </div>  
                </label>
                <p style={{ color: mode === 'dark' ? 'white' : 'black' }}>current specfications:- {specifications.map(element => <em key={element}>{element}, </em>)}</p>

                <label>
                    <span style={{ color: mode === 'dark' ? 'white' : 'black' }}>order specifications</span>
                    <textarea
                        type="text"
                        onChange={ e => setRequests(e.target.value)}
                        value={requests}
                        required
                    />
                </label>

                <label>
                    <span style={{ color: mode === 'dark' ? 'white' : 'black' }}>Delivery time</span>
                    <input 
                        type="number" 
                        onChange={e=> setDeliveryTime(e.target.value)}
                        value={deliveryTime}
                        required
                    />
                </label>
                <button className='submit-btn' style={{backgroundColor: color}}>Submit</button>
            </form>
        </div>
     );
}