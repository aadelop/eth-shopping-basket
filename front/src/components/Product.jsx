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

    return <p> {JSON.stringify(data)}</p>
}