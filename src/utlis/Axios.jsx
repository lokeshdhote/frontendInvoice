import axios from "axios";

const instance = axios.create({

    // baseURL: "http://localhost:3000", 
    baseURL:"https://dashboard.render.com/web/srv-cufr1uqj1k6c73ftgs20/deploys/dep-cufr1v2j1k6c73ftgs80",   
   
    withCredentials: true,
  });

export default instance;
