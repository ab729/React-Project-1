import "./Order.css"
import { Link } from 'react-router-dom'
import { useTheme } from "../hooks/useTheme";

export default function Orders({orders}) {
    const { mode } = useTheme()

    
    if (orders.length === 0) {
        return <div className="error" style={{ color: mode === 'dark' ? 'white' : 'black' }}>No orders matches the entered values</div>
    }

    return ( 
        <div className="order-list">
            {orders.map(order => (
                <div key={order.id} className={`card ${mode}`}>
                    <h3>{order.product}</h3>
                    <p>to be deliverd in {order.deliveryTime}</p>
                    <div>{order.requests.substring(0,40)}...</div>
                    <Link to={`/orders/${order.id}`}>Details</Link>
                </div>
            ))}
        </div>
     );
}

