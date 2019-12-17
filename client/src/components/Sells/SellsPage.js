import React from "react";
import { SellsPageStyles } from "./SellsPage.Styles";
import { MyContext } from "../../context";

function SellsPage () {
    return (
        <MyContext.Consumer>
            {context => {
                const data = context.handleGetProducts();
                console.log(data);
            }}
        </MyContext.Consumer>
    )
}

export default SellsPage;