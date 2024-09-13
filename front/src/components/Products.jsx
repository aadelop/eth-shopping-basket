import {useQuery} from 'react-query'
import {Link} from 'react-router-dom'

export function Products() {
    const {data,isLoading} = useQuery("products", ()=>{
        return fetch("http://localhost:5555/products").then(res => res.json())
    })

    if(isLoading){
        return <div><h2>Products</h2>
            Cargando..</div>
    }

    return <div>
            <h2>Products</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((product,index) => {
                        return <tr key={index}>
                               <td > <Link to={`/product/${product.ProductID}`}>{product.ProductName}</Link></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
}