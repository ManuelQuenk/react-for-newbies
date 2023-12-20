function Product({ username = "Unknown user" }) {
    const arrived = false;
    return (
        <div>
            <h2>
                {username}
                {arrived
                    ? " you got the product"
                    : " your product is arriving !"}
            </h2>
        </div>
    );
}

export function Navbar() {
    return (
        <div>
            <ul>
                <li>Home</li>
                <li>Products</li>
            </ul>
        </div>
    );
}

export default Product;
