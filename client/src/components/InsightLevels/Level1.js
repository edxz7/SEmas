import React from "react";
import styled from "styled-components";
import { MyContext } from "../../context";

const Level1Tag = styled.form`
  background-image: url("/images/oval-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  padding: 6% 10%;
  text-align: left;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  p {
    font-size: 1.2rem;
    color:#97989a;
  }
  h1 {
      font-size: 3rem;
      color:#628165;
    }
  .duo-div {
    width: 36%;

  }
  .duo-div:last-of-type {
    padding-left: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    button {
      width: 100%;
      height: 60px;
      font-size: 1.3rem;
      font-weight: 600;
      border: none;
      border-radius: 8px;
    }
    h3 {
      font-size: 2rem;
      font-weight: 300;
      margin: 5px 0;
    }
    h2 {
      font-size: 2.4rem;
      margin: 0;
    }
  }
  .form-container {
    display: flex;
    flex-direction: column;
    margin: 40px 0;
    div {
      color: #949494;
    }
    input {
      padding: 14px;
      border: none;
      background: #ececec;
      margin: 5px 0;
      width: 110%;
    }
  }
`;
export default function SignupContainer(props) {
  return (
    <MyContext.Consumer>
      {context => (
        <Level1Tag
        onSubmit={e => {
            e.preventDefault()
            context.handleProductSubmit(e);
            props.history.push("/profile");
          }}
        >
          <div className="duo-div">
            <h1>Add Sell</h1>

            
            <div className="form-container">
              <div>Product Name</div>
              <input
                type="text"
                name="productName"
                onChange={e => context.handleInput(e, "productForm")}
                // value={context.product.productName}
              />
            </div>

            <div className="form-container">
              <div>Price</div>
              <input
                type="number"
                name="price"
                onChange={e => context.handleInput(e, "productForm")}
                // value={context.product.price}
              />
            </div>

            <div className="form-container">
              <div>Quantity</div>
              <input
                type="number"
                name="quantity"
                onChange={e => context.handleInput(e, "productForm")}
                // value={context.product.quantity}
              />
            </div>

          </div>
          <div className="duo-div">
            <div>
              <h2>Hello!</h2>
              <h3>Add a new product</h3>
            </div>
            <div>
              <p>
                If you sign up you agree with all our terms and conditions where
                we can do whatever we want with the data!
              </p>
            </div>

            <button type="submit">Submit product</button>
          </div>
        </Level1Tag>
      )}
    </MyContext.Consumer>
  );
}
