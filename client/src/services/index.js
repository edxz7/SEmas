import axios from "axios";
let baseURL;

process.env.NODE_ENV === "production"
  ? (baseURL = "https://immense-retreat-83657.herokuapp.com")
  : (baseURL = "http://localhost:3000");

const service = axios.create({ withCredentials: true, baseURL });

const MY_SERVICE = {
  test: async () => {
    return await service.get("/");
  },
  signup: async user => {
    return await service.post("/signup", user);
  },
  login: async user => {
    return await service.post("/login", user);
  },
  logout: async () => {
    return await service.post("/logout");
  },
  loggedIn: async () => {
    return await service.get("/loggedin");
  },
  edit: async () => {
    return await service.post("/edit");
  },
  upload: async (image) => {
    return await service.post("/upload", image);
  },
  uploadProduct: async (products) => {
    return await service.post("/product/create", {products});
  },
  getProducts: async () => {
    return await service.get("/product/get");
  },
  updateProduct: async (id, product) => {
    return await service.post(`/product/edit/${id}`, product);
  },
  deleteProducts: async (id) => {
    return await service.post(`/product/delete/${id}`);
  },
  registerTransaction: async (transaction) => {
    return await service.post("/transaction/create",transaction);
  }
};

export default MY_SERVICE;
