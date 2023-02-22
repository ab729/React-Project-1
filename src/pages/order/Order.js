import "./Order.css";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";


function Order() {
    const { id } = useParams();
    const url = 'http://localhost:3000/orders/' + id;
    const { error, isPending, data: order} = useFetch(url);



    return ( 
    <div className="order">
        {error && <p className="error">{error}</p>}
        {isPending && <p className="laoding">Loading...</p>}
        {order && (
            <>
                <h2 className="page-title">{order.product}</h2>
                    <p>To be Deliveried in {order.deliveryTime} days</p>
                    <h4>Specifications</h4>
                    {order.specifications.map(spec => (
                        <ul> 
                            <li key={order.id}>{spec}</li>
                        </ul>
                    ))}
                    <p>{order.requests}</p>
            </>
        )}
    </div> 
    );
}

export default Order;