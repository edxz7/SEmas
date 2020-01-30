import React, { Component, createContext } from "react";
import MY_SERVICE from "../services/index";
import Swal from "sweetalert2";

export const MyContext = createContext();

class MyProvider extends Component {
  state = {
    on: false,
    loggedUser: false,
    address:'',
    formSignup: {
      username: "",
      userLastName: "",
      email: "",
      password: "",
 
      name:"",
      category:"",
      numEmployees:"",
      place: {
        coordinates:[]
      }
    },
    loginForm: {
      email: "",
      password: ""
    },
    user: {},
    commerce: {},
    file: {},
    product:{},
    uploaded: false,
    apiKey: '',
    spreadsheetId: '',
    inventory:[],
    fullInventory:[],
    transaction:{
      item:"",
      author:""
    },
    errors:{}
  };


  componentDidMount() {
    if (document.cookie) {
      MY_SERVICE.getUser()
        .then(({ data }) => {
          console.log(data)
          this.setState({ loggedUser: true, user: data.user });
          this.setState({ commerce: data.commerce});
          // Swal.fire(`Bienvenido de vuelta ${data.user.name} `, "", "exito");
        })
        .catch(err => console.log(err));
    }
  }


  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }

  handleInput = (e, obj) => {
    const a = this.state[obj];
    const key = e.target.name;
    a[key] = e.target.value;
    this.setState({ obj: a });
    console.log(this.state.formSignup)
  };

  handleLoc = (coordinates, address) => {
    this.setState(prevState => ({
      ...prevState,
      address:address,
      formSignup:{
        ...prevState.formSignup,
        place:{
          coordinates:coordinates
        }
      }
    }));
  };


  handleSignup = async (cb)=> {
    MY_SERVICE.signup(this.state.formSignup)
      .then(({ data }) => {
        console.log(data)
        this.setState({ loggedUser: true, user: data.user, commerce: data.commerce  })
        cb()
      })

    // const { data } = await MY_SERVICE.signup(this.state.formSignup);
    // this.setState({ loggedUser: true, user: data.user })
    // Swal.fire(`Welcome ${data.user.name}`, "User created", "success");
  };

  update = (prevState, payload) => {
    this.setState({
        ...prevState,
        formSignup:{
            ...prevState.formSignup,
            ...payload
        },
        loginForm: {
          ...prevState.loginForm,
          ...payload
        }
    })
  }

  updateSignup = (prevState, payload) => {
    this.setState({
        ...prevState,
        formSignup:{
            ...prevState.formSignup,
            ...payload
        }
    })
    console.log(this.state)
}

  handleLogin = (cb) => {
    // const msg = 
    console.log(this.state.loginForm)
    MY_SERVICE.login(this.state.loginForm)
      .then(({ data }) => {
        console.log(data)
        this.setState({ loggedUser: true, user: data.user })
        this.setState({ commerce: data.commerce })
        cb();
      }).catch(error => {
        this.setState({errors:error.response})
        })
  };

  handleLogout = async cb => {
    await MY_SERVICE.logout();
    window.localStorage.clear();
    this.setState({ loggedUser: false, user: {} });
    cb();
  };


  // handleUpload = async (e) => {
  //   await this.setState({ file: e.target.files[0], uploaded: !this.state.uploaded })
  //   const formData = new FormData();
  //   formData.append('photo', this.state.file);
  //   const data = await MY_SERVICE.upload(formData);
  //   await this.setState({ user: this.state.user, uploaded: !this.state.uploaded })
  //   console.log(this.state.uploaded)
  // }

  // ---------Sumbmit inventory

  handleChangeSpreadSheet = event => {
    const { value, name } = event.target;
    event.preventDefault();
    this.setState({ [name]: value });
  };

  handleSubmitSpreadSheet = async event => {
    event.preventDefault();
    console.log(this.state.loggedUser)
    const { apiKey, spreadsheetId } = this.state;
    this.setState({ apiKey: apiKey, spreadsheetId:spreadsheetId });
    console.log("INFO: ",apiKey, spreadsheetId)
  };

  handleInventory = (row, e) => {
    e.preventDefault();
    console.log(this.state.loggedUser)
    this.setState({inventory:row})
    this.handleProductSubmit(e)
  }

  handleProductSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.loggedUser)
    const { data } = await MY_SERVICE.uploadProduct(this.state.inventory);
    this.setState({ product: data.product })
    Swal.fire(`Inventario regitrado exitosamente`, "", "success");
  }

  // ------ Products

  handleGetProducts = async() => {
    return await MY_SERVICE.getProducts();
  }

  handleUpdateProducts = async(id, product) => {
    return await MY_SERVICE.updateProducts(id, product);
  }

  handleDeleteProducts = async(e) => {
    await MY_SERVICE.deleteProducts(e.target.id);
  }

  // ----- Register and get transactions

  handleRegisterTransaction = async (transaction) => {
    const { inventory } = this.state
    await MY_SERVICE.registerTransaction(transaction);
    const {data: product} = await MY_SERVICE.updateProduct(transaction.itemId, {quantity: transaction.quantity});
    const newInventory = inventory.map(p => {
      if (p._id === product._id) p = Object.assign({}, product)
      return p
    })
    this.setState({inventory: newInventory })
    // Swal.fire(`${data.item}`, "Trasnsaction registered with success", "success");
  };

  handleGetTransaction = async () => {
    return await MY_SERVICE.getTransactions(this.state.commerce);
     
    // Swal.fire(`${data.item}`, "Trasnsaction registered with success", "success");
  };


  // ---------------
  // handleCommerceSignup = async e => {
  //   e.preventDefault();
  //   const { data } = await MY_SERVICE.commerceSignup(this.state.formSignup);
    // this.setState({ commerce: data.name })
    // Swal.fire(`Your commerce has been ${data.commerce.name}`, "Register", "success");
  // };

  render() {
    return (
      <MyContext.Provider
        value={{
          updateAction:this.update,
          updateSignupAction:this.updateSignup,
          loggedUser: this.state.loggedUser,
          formSignup: this.state.formSignup,
          loginForm: this.state.loginForm,
          handleInput: this.handleInput,
          handleSignup: this.handleSignup,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout,
          handleFile: this.handleFile,
          handleUpload: this.handleUpload,
          toggle:this.toggle,
          handleChangeSpreadSheet: this.handleChangeSpreadSheet,
          handleSubmitSpreadSheet: this.handleSubmitSpreadSheet,
          handleInventory:this.handleInventory,
          handleGetProducts:this.handleGetProducts,
          handleProductSubmit:this.handleProductSubmit,
          handleUpdateProducts:this.handleUpdateProducts,
          handleDeleteProducts:this.handleDeleteProducts,
          handleRegisterTransaction:this.handleRegisterTransaction,
          handleCommerceSignup:this.handleCommerceSignup,
          handleGetTransaction:this.handleGetTransaction,
          handleLoc:this.handleLoc,
          state: this.state
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
