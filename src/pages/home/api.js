import axios from "axios"
export function AdvertisingPosition(params) {
    const url = '/api/site/advert'
  
    return axios.get(url, params)
      .then(res => {
        console.log(res);
        // return Promise.resolve(res.data)
      })
  }