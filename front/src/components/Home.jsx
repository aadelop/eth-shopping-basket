import {Outlet, Link} from 'react-router-dom'

export function Home(){
    return <div  className="container">
        <div className="text-end">
            <Link  className="mx-2" to="/basket">Basket</Link>
            <Link to="/products">Products</Link>
        </div>
        <div>
            <Outlet></Outlet>
        </div>

    </div>
}