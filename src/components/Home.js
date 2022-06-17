import { useNavigate } from "react-router"

export const Home = () => {

    const navigateToOrders = useNavigate();

    return (
        <div>
            <h2>Home Page</h2>
            <button onClick={() => navigateToOrders('/orders')}>Place Order!</button>
        </div>
    )
}
