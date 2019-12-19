import axios from "axios";
let baseURL;

process.env.NODE_ENV === "production"
  ? (baseURL = "https://crecemass.herokuapp.com")
  : (baseURL = "http://localhost:3000");

// const axios = axios.create({ withCredentials: true, baseURL: "/"});

const MY_SERVICE = {
  test: async () => {
    return await axios.get("/");
  },
  signup: async formm => {
    return await axios.post("/signup", formm);
  },
  login: async user => {
    return await axios.post("/login", user);
  },
  logout: async () => {
    return await axios.post("/logout");
  },
  getUser: async () => {
    return await axios.get("/loggedin");
  },
  edit: async () => {
    return await axios.post("/edit");
  },
  upload: async (image) => {
    return await axios.post("/upload", image);
  },
  uploadProduct: async (products) => {
    return await axios.post("/product/create", {products});
  },
  getProducts: async () => {
    return await axios.get("/product/get");
  },
  updateProduct: async (id, product) => {
    return await axios.post(`/product/edit/${id}`, product);
  },
  deleteProducts: async (id) => {
    return await axios.post(`/product/delete/${id}`);
  },
  registerTransaction: async (transaction) => {
    return await axios.post("/transaction/create",transaction);
  },
  getTransactions: async (commerce) => {
    return await axios.post("/transaction/get",commerce);
  }
};

export default MY_SERVICE;
