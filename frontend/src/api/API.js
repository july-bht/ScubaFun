import axios from "axios";

const MadeAPI = {
    baseUrl: "https://praktisk-web.herokuapp.com/api",
    endPoint: "/sted",
    endPoint2: "/type",
    endPoint3: "/img",
    endPoint4: "/tur",
}

export const hentToast = () => {

    let response = axios.get(MadeAPI.baseUrl + MadeAPI.endPoint, { 
    
    })
    .then(res => { 
        return res.data 
    })
    .catch(error => { 
        console.log('FEJL', error)
        throw new Error("Desværre Fejl")
    })

    return response

 }

export const hentReviews = () => {

    let response = axios.get(MadeAPI.baseUrl + MadeAPI.endPoint2, { 
    
    })
    .then(res => { 
        return res.data 
    })
    .catch(error => { 
        console.log('FEJL', error)
        throw new Error("Desværre Fejl")
    })

    return response

 }

 export const hentService = () => {

    let response = axios.get(MadeAPI.baseUrl + MadeAPI.endPoint4, { 
    
    })
    .then(res => { 
        return res.data 
    })
    .catch(error => { 
        console.log('FEJL', error)
        throw new Error("Desværre Fejl")
    })

    return response

 }

export const hentAboutus = () => {

    let response = axios.get(MadeAPI.baseUrl + MadeAPI.endPoint3, { 
    
    })
    .then(res => { 
        return res.data 
    })
    .catch(error => { 
        console.log('FEJL', error)
        throw new Error("Desværre Fejl")
    })

    return response

 } 