import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=100&nat=US";





export default {
  getEmployees: function() {
    return axios.get(BASEURL)
  },

  
};

