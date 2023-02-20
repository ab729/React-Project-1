import "./Home.css"
import { useFetch } from "../../hooks/useFetch"
import OrdersList from "../../components/OrdersList";

function Home() {
    const { data, isPending, error } = useFetch('http://localhost:3000/orders')

    return ( 
        <div className="home">
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && <OrdersList orders={data} />}
        </div>
     );
}

export default Home;