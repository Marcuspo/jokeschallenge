import axios from "axios"

const api = axios.create({ baseURL: "https://api.icndb.com/jokes/random/" })

export default api
