import axios from "axios";

// baseURL
const instance = axios.create({

    baseURL:'https://jsonplaceholder.typicode.com/',

})

export default instance;