import { useNavigate } from "react-router"

export const About = () => {
    const navigate = useNavigate()
    return (
    <div>
        <h2>About Page</h2>
        <button onClick={() => navigate('/orders')}>Place Order</button>
    </div>
    )
}