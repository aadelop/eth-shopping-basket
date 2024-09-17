import {useQuery} from 'react-query'
import {useParams} from 'react-router-dom'
import {useForm } from 'react-hook-form'
import { useContext } from 'react'
import {Context} from '../main.jsx'

export function Product() {
    const params = useParams()
    const [bstate, setBstate] = useContext(Context)
    const quantity = bstate.basket.find(i => i.product.ProductID == params.id)?.quantity

    const {register, handleSubmit} = useForm({
        defaultValues:{quantity:quantity}
    })
    const {data, isLoading} = useQuery('product', () => {
        return fetch(`http://localhost:5555/products/${params.id}`).then(res => res.json())
    })

    function onSubmit(datos){
        console.log(datos)
        setBstate({
            ...bstate, basket:[...bstate.basket.filter(i => i.product.ProductID != data.ProductID),
            {
                product:data,
                quantity: datos.quantity,
                total: datos.quantity * data.UnitPrice
            }]
        })
    }

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
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="">Enter the quantity</label>
                <input {...register('quantity')} type="number" className='form-control' />
            </div>
            <button className="btn btn-primary mt-3">Add to cart</button>
        </form>
        <div>
            {JSON.stringify(bstate)}
        </div>
    </div>
}