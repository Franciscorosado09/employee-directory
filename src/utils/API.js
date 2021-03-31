import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=100&nat=US";



const getEmployees = () =>{ return axios.get(BASEURL)}

export default getEmployees

