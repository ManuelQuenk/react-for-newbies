import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, Footer } from "./Greeting";
import Product, { Navbar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

let username = "Mullet";

root.render(
    <>
        <TaskCard ready={true} />
        <Button text="Sape" />

        <form
            onSubmit={(e) => {
                e.preventDefault();
                alert("enviado");
            }}
        >
            <h1>Registro de bienes</h1>
            <button>Send</button>
        </form>
    </>
);

//username, money, inDebt, married, address
{
    /* <Navbar />
        <Greeting
            username="Mullet"
            balance={4500}
            inDebt={false}
            married={true}
            address={{ country: "Argentina", city: "Cordoba" }}
            warning={() => {
                alert(
                    "This might contain sensitive information, do not share with anyone"
                );
            }}
        />
        <Product username="Mullet" />
        <Footer avenue="Manuel Quintana 2020" />
        <Button text="Save" /> */
}
