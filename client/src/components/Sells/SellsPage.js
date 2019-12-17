import React, {Component} from "react";
import { SellsPageStyles } from "./SellsPage.Styles";
import { MyContext } from "../../context";
import InventoryItem from "../Inventory/InventoryItem";
import MY_SERVICE from "./services/index";

class SellsPage extends Component {
    state = {
        inventory:[]
    }
    render(){
        return (
            <MyContext.Consumer>
                {context => (        
                    <SellsPageStyles id="dashboard">
                        {
                            context.handleGetProducts().then(res => {
                                res.data.products.map((product, index) => (
                                    console.log()
                                ))
                        })
                        }
                    </SellsPageStyles>
                )}
            </MyContext.Consumer>
        )
    }
}
// SellsPage.contextType=MyContext;
export default SellsPage;

{/* <InventoryItem key={product.id} cartItem={product} /> */}