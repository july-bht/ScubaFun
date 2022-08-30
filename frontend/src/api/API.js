import axios from "axios";

const API = {
    BASE_URL: "https://praktisk-web.herokuapp.com/api",
    STED_ENDPOINT: "/sted",
    TYPE_ENDPOINT: "/type",
    IMG_ENDPOINT: "/img",
    TUR_ENDPOINT: "/tur",
}

export const tur = {
    get: async (id) => {
        try {
            const res = await axios.get(API.BASE_URL + API.TUR_ENDPOINT);
            return res;
        } catch (e) {
            throw new Error(e);
        }
    },
    post: async (data) => {
        try {
            await axios.post(API.BASE_URL + API.TUR_ENDPOINT, {
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
    },
    delete: async (id) => {
        try {
            await axios.delete(API.BASE_URL + API.TUR_ENDPOINT + "/" + id);
        } catch (e) {
            throw new Error(e);
        }
    }
}

export const sted = {
    get: async (id) => {
        try {
            const res = await axios.get(`${API.BASE_URL}${API.STED_ENDPOINT}${id ? `/${id}` : ''}`);
            return res;
        } catch (e) {
            throw new Error(e);
        }
    },
    post: async (data) => {
        try {
            await axios.post(API.BASE_URL + API.STED_ENDPOINT, {
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
    },
    delete: async (id) => {
        try {
            await axios.delete(`${API.BASE_URL}${API.STED_ENDPOINT}/${id}`);
        } catch (e) {
            throw new Error(e);
        }
    }
};

export const type = {
    get: async (id) => {
        try {
            const res = await axios.get(`${API.BASE_URL}${API.TYPE_ENDPOINT}${id ? `/${id}` : ''}`);
            return res;
        } catch (e) {
            throw new Error(e);
        }
    },
    post: async (data) => {
        try {
            await axios.post(API.BASE_URL + API.TYPE_ENDPOINT, {
                type: data.type,
            })
        } catch (e) {
            throw new Error(e);
        }
    },
}
