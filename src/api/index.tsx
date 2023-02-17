import axios from "axios";

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

export const api = axios.create({
    baseURL:"https://api.openweathermap.org/data/2.5/weather",
    params:{
        appid: process.env.REACT_APP_API_PASSWORD
    }
})