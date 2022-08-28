import axios from "axios";

const BaseURL = "https://praktisk-web.herokuapp.com/api/"

export const GetPlaces = async () => {
    try {
        let res = axios.get(BaseURL + "sted");
        return res;
    } catch (e) {
        console.log(e)
    }
}



// export const HentIndkoeb = () => {

//     let endpoint = "Shopping"

//     let response = axios.get(api.baseUrl + endpoint,
//         {
//             headers: {
//                 'Authorization': 'Bearer ' + api.apiKey
//             }
//         })

//         .then(res => {
//             return res.data
//         })
//         .catch(error => {
//             console.log(error)
//             throw new Error("Sorry, something went wrong . . .")

//         })
//     return response;
// }