import "./Order.css"
import { Link } from 'react-router-dom'

export default function Orders({orders}) {

    if (orders.length === 0) {
        return <div className="error">No orders matches the entered values</div>
    }

    return ( 
        <div className="order-list">
            {orders.map(order => (
                <div key={order.id} className="card">
                    <h3>{order.product}</h3>
                    <p>to be deliverd in {order.deliveryTime}</p>
                    <div>{order.requests.substring(0,40)}...</div>
                    <Link to={`/orders/${order.id}`}>Details</Link>
                </div>
            ))}
        </div>
     );
}

