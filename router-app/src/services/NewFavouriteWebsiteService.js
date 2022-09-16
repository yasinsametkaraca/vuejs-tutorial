import axios from "axios";

export default {
    setfavouriteWebsite(request){
        return axios.post("http://localhost:3000/favouriteWebsites",request)
    },
    getfavouriteWebsite(){
        return axios.get("http://localhost:3000/favouriteWebsites")
    },
    deletefavouriteWebsite(id){
        return axios.delete("http://localhost:3000/favouriteWebsites/"+id)
    }
}