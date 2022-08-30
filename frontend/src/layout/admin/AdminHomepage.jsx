import React from "react";
import axios from "axios";
import Card from "./Card";
import sampleImage from "../../images/IMG-1.jpg";
import { tur, sted } from "../../api/API";
import AddTurModal from "./AddTur";
import AddStedModal from "./AddSted";
import { BsTrash } from "react-icons/bs";

const AdminHome = () => {
    const [ture, setTure] = React.useState([]);
    const [steder, setSteder] = React.useState([]);
    const [addTurModal, setAddTurModal] = React.useState(false);
    const [addStedModal, setAddStedModal] = React.useState(true);

    const deleteSted = async (id) => {
        try {
            await sted.delete(id);
            getData();
        } catch (e) {
            throw new Error(e);
        }
    };

    const getData = async () => {
        const newTure = await tur.get();
        setTure(newTure.data);

        const newSteder = await sted.get();
        setSteder(newSteder.data);
    };

    React.useEffect(() => {
        getData();
    }, []);

    return (
        <div className="w-screen h-screen pt-5">
            <AddTurModal
                opened={addTurModal}
                onClose={() => setAddTurModal(false)}
                update={async () => await getData()}
            />
            <AddStedModal
                opened={addStedModal}
                onClose={() => setAddStedModal(false)}
                update={async () => await getData()}
            />
            <div className="flex gap-20 justify-center px-20">
                {/* dykker ture */}
                <div className="w-full ">
                    {/* object header */}
                    <div className="flex justify-between pb-5">
                        <h4>Dykker Ture</h4>
                        <div
                            className="admin-add cursor-pointer"
                            onClick={() => setAddTurModal(true)}
                        >
                            +
                        </div>
                    </div>

                    {/* object body */}
                    <div className="border-secondary h-3/4 bg-white p-5 overflow-scroll">
                        {/* <Card
                            date="25/9 - 2022"addTur()
                            time="7:00 - 9:00"
                            title="Båddykning"
                            price="300"
                            place={1}
                            image={sampleImage}
                        /> */}
                        {ture.map((tur, index) => (
                            <Card
                                key={index}
                                id={tur.id}
                                date={tur.dato}
                                time={tur.tid}
                                title={tur.navn}
                                price={tur.pris}
                                place={tur.stedID}
                                delete
                                update={async () => await getData()}
                            />
                        ))}
                    </div>
                </div>

                {/* dykker stder */}
                <div className="w-full ">
                    {/* object header */}
                    <div className="flex justify-between pb-5">
                        <h4>Steder</h4>
                        <div
                            className="admin-add cursor-pointer"
                            onClick={() => setAddStedModal(true)}
                        >
                            +
                        </div>
                    </div>

                    {/* object body */}
                    <div
                        className="border-secondary bg-white p-5"
                        style={{ overflowY: "scroll", maxHeight: "90vh" }}
                    >
                        {steder.map((sted, index) => (
                            <div className="mb-5">
                                <button>
                                    <BsTrash
                                        onClick={async () =>
                                            deleteSted(sted.id)
                                        }
                                    />
                                </button>
                                <p>ID: {sted.id}</p>
                                <p>Type: {sted.typeID}</p>
                                <p>lat: {sted.lat}</p>
                                <p>lng: {sted.lon}</p>
                                <p>Navn: {sted.navn}</p>
                                <p>Dybde: {sted.dybde}</p>
                                <p>Content: {sted.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* {steder.map((sted, index) => (
        <p key={index}>{sted.id} - {sted.navn}</p>
      ))} */}
        </div>
    );
};

export default AdminHome;