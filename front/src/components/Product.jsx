import {useQuery} from 'react-query'
import {useParams} from 'react-router-dom'

export function Product() {
    const params = useParams()
    const {data, isLoading} = useQuery('product', () => {
        return fetch(`http://localhost:5555/products/${params.id}`).then(res => res.json())
    })

    if(isLoading){
        return <div><h2>Products</h2>
            Cargando..</div>
    }

    return <div>
        <h3>Product</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <td>{data.ProductID}</td>
                </tr>
                <tr>
                    <th>Nombre</th>
                    <td>{data.ProductName}</td>
                </tr>
                <tr>
                    <th>Price</th>
                    <td>{data.UnitPrice}</td>
                </tr>
            </thead>
        </table>
    </div>
}