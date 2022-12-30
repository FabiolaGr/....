import axios from "axios";

//22795565/json/

const api = axios.create({
    baseURL:"https://viacep.com.br/ws/"
});

export default api;