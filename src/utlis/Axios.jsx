// import axios from "axios";

// const instance = axios.create({

//     // baseURL: "http://localhost:3000", 
//     baseURL:"https://invoicebackend-1.onrender.com/",   
   
//     withCredentials: true,
//   });

// export default instance;


import axios from "axios";

// Create an axios instance
const instance = axios.create({

  
  baseURL:"https://invoicebackend-1.onrender.com/",    
 
  withCredentials: true,
});
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("user");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle any request errors
    return Promise.reject(error);
  }
);

export default instance;
