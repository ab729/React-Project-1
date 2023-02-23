import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import OrderList from '../../components/OrdersList'
import { useTheme } from "../../hooks/useTheme";
import "./Search.css"

export default function Search() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')
  const { mode } = useTheme()

  const url = 'http://localhost:3000/orders?q=' + query
  const {error, isPending, data} = useFetch(url)

    return ( 
        <div>
        <h2 className="page-title" style={{ color: mode === 'dark' ? 'white' : 'black' }}>Orders including "{query}"</h2>
        {error && <p className="error" style={{ color: mode === 'dark' ? 'white' : 'black' }}>{error}</p>}
        {isPending && <p className="loading" style={{ color: mode === 'dark' ? 'white' : 'black' }}>Loading...</p>}
          {data && <OrderList orders={data}/>}  
        </div>
     );
}