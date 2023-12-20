export function Greeting({
    username,
    balance,
    inDebt,
    married,
    address,
    warning,
}) {
    return (
        <div>
            <h1>Account information</h1>
            <p>Name: {username}</p>
            <p>Balance: ${balance}</p>
            <p>Do i have debts?: {inDebt ? "Yes!" : "Nope, all good!"}</p>
            <p>Marital status: {married ? "Married" : "Single"}</p>
            <p>Location</p>
            <ul>
                <li>Country: {address.country}</li>
                <li>City: {address.city}</li>
            </ul>
            {/* In case i want to show a boolean as a string i have to use .toString() */}
        </div>
    );
}

export function Footer({ avenue }) {
    return <h2> Visitanos en {avenue}</h2>;
}
