import React, { useEffect, useState } from "react";
import { tur, sted } from "../../api/API";

const AddTurModal = (props) => {
    const [steder, setSteder] = useState([]);

    const [stedValue, setStedValue] = useState(null);
    const [navnValue, setNavnValue] = useState(null);
    const [datoValue, setDatoValue] = useState(null);
    const [tidValue, setTidValue] = useState(null);
    const [descValue, setDescValue] = useState(null);
    const [prisValue, setPrisValue] = useState(null);

    const addTur = async (e) => {
        e.preventDefault();
        try {
            await tur.post({
                stedID: Number(stedValue),
                navn: navnValue,
                dato: datoValue.toString(),
                tid: tidValue.toString(),
                beskrivelse: descValue,
                pladser: 8,
                tilmeldte: 0,
                pris: Number(prisValue),
                rabat: 0,
            });
            props.onClose();
            props.update();
        } catch (e) {
            throw new Error(e);
        }
    };

    const getData = async () => {
        try {
            const newSteder = await sted.get();
            setSteder(newSteder.data);
        } catch (e) {
            throw new Error(e);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-screen h-screen bg-black/25 z-10 grid place-items-center ${
                props.opened ? "block" : "hidden"
            }`}
        >
            <div className="bg-white p-5">
                <h1 className="border-b pb-2 mb-3 flex justify-between">
                    <span>Tilføj dykkerture</span>
                    <button onClick={props.onClose}>X</button>
                </h1>
                <form
                    onSubmit={async (e) => await addTur(e)}
                    className="flex flex-col gap-3"
                >
                    <div className="field">
                        <p>Sted</p>
                        <select
                            required
                            onChange={(e) => setStedValue(e.target.value)}
                        >
                            {steder.map((sted, index) => (
                                <option key={index} value={sted.id}>
                                    {sted.id} - {sted.navn}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="field">
                        <p>Navn</p>
                        <input
                            type="text"
                            placeholder="Skriv navn..."
                            className="input"
                            required
                            onChange={(e) => setNavnValue(e.target.value)}
                        />
                    </div>

                    <div className="field">
                        <p>Dato</p>
                        <input
                            type="date"
                            className="input"
                            required
                            onChange={(e) => setDatoValue(e.target.value)}
                        />
                    </div>

                    <div className="field">
                        <p>Tid</p>
                        <input
                            type="time"
                            className="input"
                            required
                            onChange={(e) => setTidValue(e.target.value)}
                        />
                    </div>

                    <div className="field">
                        <p>Beksrivelse</p>
                        <textarea
                            placeholder="Skriv en beskrivelse..."
                            className="input"
                            required
                            onChange={(e) => setDescValue(e.target.value)}
                        />
                    </div>

                    <div className="field">
                        <p>pris</p>
                        <input
                            type="number"
                            placeholder="Skriv en pris..."
                            className="input"
                            required
                            onChange={(e) => setPrisValue(e.target.value)}
                        />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddTurModal;