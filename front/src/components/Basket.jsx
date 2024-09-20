import { useContext, useState, useEffect } from "react";
import {Context} from '../main'
import {ethers} from 'ethers'
import {Link} from 'react-router-dom'

export function Basket(){
    const [bstate, setBstate] = useContext(Context)
    const total = bstate.basket.reduce((acc, item) => acc + item.total, 0)
    const [account, setAccount] = useState(null)
    const [txOk, setTxOk] = useState(null)
    const [txKo, setTxKo] = useState(null)
    useEffect(() =>{
        window.ethereum && window.ethereum.request({
            method: 'eth_requestAccounts'
        }).then(accounts =>{
            setAccount(accounts[0])
            ethereum.on('accountsChanged', (accounts)=>{
                setAccount(accounts[0])
            })
        })
    }, [])
    async function pay(){
        const txParams ={
            to: "0x7817443d0FD4013F771964Fd4837d88441Dc6962",
            from: account,
            value: ethers.toBeHex(ethers.parseEther(total.toString()))
        }

        try {
            const tx = await ethereum.request({
                method:"eth_sendTransaction" ,
                params:[txParams]
            })
            setTxOk(tx)
        } catch (error) {
            setTxKo(error)
        }
        console.log(txParams);
    }
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
                        <td><Link to={`/product/${i.product.ProductID}`}>{i.product.ProductName}</Link></td>
                        <td>{i.product.UnitPrice}</td>
                        <td>{i.quantity}</td>
                        <td>{i.total}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <h3>Total: {total}</h3>
        <h3>{account}</h3>
        <button onClick={() => pay() } className="btn btn-primary">Pay</button>
        {txOk && <p> {txOk} </p>}
        {txKo && <p> {txKo} </p>}
    </div>
}