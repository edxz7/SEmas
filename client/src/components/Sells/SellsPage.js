import React, { Component } from "react";
import { MyContext } from "../../contexts/context";
import InventoryItem from "../Inventory/InventoryItem";

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer
} from './SellsPage.Styles';


class SellsPage extends Component {
    state = {
        inventory: [],
        searchBar: {
            input: ""
          },
        filteredData: []
    }

    componentDidMount() {
        this.context.handleGetProducts().then(({ data: { products } }) => {
            //Guarda el inventario
            this.setState({ inventory: products })
        }).catch(err => console.log(err))
    }

    handleSearch = e => {
        e.preventDefault();
        const { searchBar } = this.state;
        const key = e.target.name;
        searchBar[key] = e.target.value;
        this.setState(prevState => {
            const filteredData = prevState.inventory.filter(product => {
            return product.item!==undefined ? product.item.toLowerCase().includes(searchBar[key].toLowerCase()):"";
            });
            this.setState({ filteredData })
        });
      }

    render() {
        const { inventory } = this.state;
        return (
            <div id="dashboard">
                {
                    <CheckoutPageContainer style={{ color: "white" }}>
                        <div class="active-purple-3 active-purple-4 mb-4">
                            <input className="search-bar" name="search" type="text" placeholder="Search" aria-label="Search" onChange={this.handleSearch}/>
                        </div>
                            <CheckoutHeaderContainer>
                                <HeaderBlockContainer>
                                    <span>Product</span>
                                </HeaderBlockContainer>
                                <HeaderBlockContainer>
                                    <span>Quantity</span>
                                </HeaderBlockContainer>
                                <HeaderBlockContainer>
                                    <span>Price</span>
                                </HeaderBlockContainer>
                                <HeaderBlockContainer>
                                    <span>Stock</span>
                                </HeaderBlockContainer>
                                <HeaderBlockContainer>
                                    <span>Solded</span>
                                </HeaderBlockContainer>
                            </CheckoutHeaderContainer>
                            {
                                this.state.filteredData.length !== 0 ? 
                                this.state.filteredData.map(product => (
                                    <InventoryItem key={product.id} cartItem={product} />
                                )) 
                                :  inventory.map(product => (
                                    <InventoryItem key={product.id} cartItem={product} />
                                ))
                            }
                </CheckoutPageContainer>

                        }
            </div>
        )
            }
        }
        SellsPage.contextType = MyContext;
        export default SellsPage;
        
