import axios from "axios"
const siteId=1000
// const code="B101"
export function AdvertisingPosition(code) {
    const url = `/api/site/advert?siteId=${siteId}&code=${code}`
    return axios.get(url)
      .then(res => {
        return Promise.resolve(res.data)
      })
  }