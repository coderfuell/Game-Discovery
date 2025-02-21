import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '682f1fd867e1480fbf1b9cf461f4a1ee'
    }
})