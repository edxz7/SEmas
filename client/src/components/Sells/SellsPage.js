import React, { Component } from "react";
import { MyContext } from "../../context";
import InventoryItem from "../Inventory/InventoryItem";

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer
} from './SellsPage.Styles';


class SellsPage extends Component {
    state = {
        inventory: []
    }

    componentDidMount() {
        this.context.handleGetProducts().then(({ data: { products } }) => {
            console.log(products)
            //Guarda el inventario
            this.setState({ inventory: products })
        }).catch(err => console.log(err))
    }

    render() {
        const { inventory } = this.state;
        return (
            <div id="dashboard">
                {
                <CheckoutPageContainer style={{color:"white"}}>
                    <CheckoutHeaderContainer>
                        <HeaderBlockContainer>
                            <span>Product</span>
                        </HeaderBlockContainer>
                        <HeaderBlockContainer>
                            <span>Description</span>
                        </HeaderBlockContainer>
                        <HeaderBlockContainer>
                            <span>Quantity</span>
                        </HeaderBlockContainer>
                        <HeaderBlockContainer>
                            <span>Price</span>
                        </HeaderBlockContainer>
                        <HeaderBlockContainer>
                            <span>Solded</span>
                        </HeaderBlockContainer>
                    </CheckoutHeaderContainer>
                    {
                        inventory.map(product => ( 
                            <InventoryItem key={product.id} cartItem={product} />
                                        ))}
                    {/* <TotalContainer>TOTAL: ${total}</TotalContainer> */}

                </CheckoutPageContainer>

                }
            </div>
        )
    }
}
SellsPage.contextType = MyContext;
export default SellsPage;

