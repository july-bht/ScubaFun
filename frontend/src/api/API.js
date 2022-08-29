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

export const tur = {
    get: async (id) => {
        try {
            const res = await axios.get(MadeAPI.baseUrl + MadeAPI.endPoint4);
            return res;
        } catch (e) {
            throw new Error(e);
        }
    },
    post: async (data) => {
        try {
            await axios.post(MadeAPI.baseUrl + MadeAPI.endPoint4, {
                stedID: data.stedID,
                navn: data.navn,
                dato: data.dato,
                tid: data.tid,
                beskrivelse: data.beskrivelse,
                pladser: data.pladser,
                tilmeldte: data.tilmeldte,
                pris: data.pris,
                rabat: data.rabat,
            });
        } catch (e) {
            throw new Error(e);
        }
    }
}

export const sted = {
    get: async (id) => {
        try {
            const res = await axios.get(`${MadeAPI.baseUrl}${MadeAPI.endPoint}${id ? `/${id}` : ''}`);
            return res;
        } catch (e) {
            throw new Error(e);
        }
    },
    post: async (data) => {
        try {
            await axios.post(MadeAPI.baseUrl + MadeAPI.endPoint, {
                typeID: data.typeID,
                lat: data.lat,
                lon: data.lng,
                navn: data.navn,
                dybde: data.dybde,
                content: data.content,
            })
        } catch (e) {
            throw new Error(e);
        }
    }
};