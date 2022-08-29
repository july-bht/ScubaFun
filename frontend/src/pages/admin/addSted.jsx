import React from "react";
import { sted } from "../../api/API";

const AddStedModal = (props) => {
    const [typeValue, setTypeValue] = React.useState("");
    const [latValue, setLatValue] = React.useState("");
    const [lngValue, setLngValue] = React.useState("");
    const [navnValue, setNavnValue] = React.useState("");
    const [dybdeValue, setDybdeValue] = React.useState("");
    const [descValue, setDescValue] = React.useState("");

    const addSted = async (e) => {
        e.preventDefault();
        try {
            await sted.post({
                typeID: Number(typeValue),
                lat: Number(latValue),
                lng: Number(lngValue),
                navn: navnValue,
                dybde: dybdeValue,
                content: descValue,
            });
            props.onClose();
            props.update();
        } catch (e) {
            throw new Error(e);
        }
    };

    return (
        <div
            className={`fixed top-0 left-0 w-screen h-screen bg-black/25 z-10 grid place-items-center ${
                props.opened ? "block" : "hidden"
            }`}
        >
            <div className="bg-white p-5">
                <h1 className="border-b pb-2 mb-3 flex justify-between">
                    <span>Tilføj steder</span>
                    <button onClick={props.onClose}>X</button>
                </h1>
                <form
                    onSubmit={async (e) => await addSted(e)}
                    className="flex flex-col gap-3"
                >
                    <div className="field">
                        <p>Type</p>
                        <select
                            required
                            onChange={(e) => setTypeValue(e.target.value)}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        {/* {stedValue} */}
                    </div>

                    <div className="field">
                        <p>Latitude</p>
                        <input
                            type="number"
                            step="0.0000001"
                            placeholder="Skriv lat..."
                            className="input"
                            required
                            onChange={(e) => setLatValue(e.target.value)}
                        />
                        {/* {navnValue} */}
                    </div>

                    <div className="field">
                        <p>Longtitude</p>
                        <input
                            type="number"
                            step="0.0000001"
                            placeholder="Skriv lng..."
                            className="input"
                            required
                            onChange={(e) => setLngValue(e.target.value)}
                        />
                        {/* {navnValue} */}
                    </div>

                    <div className="field">
                        <p>Navn</p>
                        <input
                            type="text"
                            className="input"
                            required
                            placeholder="Skriv navn..."
                            onChange={(e) => setNavnValue(e.target.value)}
                        />
                        {/* {tidValue} */}
                    </div>

                    <div className="field">
                        <p>Dybde</p>
                        <input
                            type="text"
                            className="input"
                            required
                            placeholder="Skriv dybde..."
                            onChange={(e) => setDybdeValue(e.target.value)}
                        />
                        {/* {descValue} */}
                    </div>

                    <div className="field">
                        <p>Beskrivelse</p>
                        <textarea
                            className="input"
                            required
                            placeholder="Skriv beskrivelse..."
                            onChange={(e) => setDescValue(e.target.value)}
                        />
                        {/* {prisValue} */}
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddStedModal;
