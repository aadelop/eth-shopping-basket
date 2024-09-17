import { useContext } from "react";
import {Context} from '../main'

export function Basket(){
    const [bstate, setBstate] = useContext(Context)
    const total = bstate.basket.reduce((acc, item) => acc + item.total, 0)

    return <div>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>

                </tr>
            </thead>
            <tbody>
                {bstate.basket.map(i => (
                    <tr key={i.product.ProductID}>
                        <td>{i.product.ProductID}</td>
                        <td>{i.product.ProductName}</td>
                        <td>{i.product.UnitPrice}</td>
                        <td>{i.quantity}</td>
                        <td>{i.total}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <h3>Total: {total}</h3>
    </div>
}