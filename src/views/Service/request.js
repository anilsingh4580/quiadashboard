import axios from 'axios';

const Axios  = axios.create();

Axios.interceptors.request.use(
    (request)=> {        
        return request;
    },
    (err)=> {
        return Promise.reject(err);
    }
)


Axios.interceptors.response.use((response) => {  
    return response.data;
  }, error => {
    return Promise.reject(error);
  });

export default Axios;
