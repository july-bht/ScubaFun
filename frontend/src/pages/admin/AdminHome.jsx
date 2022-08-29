import React from "react";
import axios from "axios";
import Card from "./Card";
import sampleImage from "../../images/IMG-1.jpg";
import { tur } from "../../api/API";
import AddTurModal from "./AddTur";

const AdminHome = () => {
    const [ture, setTure] = React.useState([]);
    const [addTurModal, setAddTurModal] = React.useState(false);

    const getData = async () => {
        const newTure = await tur.get();
        setTure(newTure.data);

        // EKSEMPEL:
        // const newTur = await getTur();
        // setTur(newTur.data)
    };

    React.useEffect(() => {
        getData();
    }, []);

    return (
        <div className="w-screen h-screen pt-5">
            <AddTurModal
                opened={addTurModal}
                onClose={() => setAddTurModal(false)}
            />
            <div className="flex gap-20 justify-center px-20">
                {/* dykker ture */}
                <div className="w-full ">
                    {/* object header */}
                    <div className="flex justify-between pb-5">
                        <h4>Dykker Ture</h4>
                        <div
                            className="admin-add"
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
                                date={tur.dato}
                                time={tur.tid}
                                title={tur.navn}
                                price={tur.pris}
                                place={tur.stedID}
                            />
                        ))}
                    </div>
                </div>

                {/* dykker stder */}
                <div className="w-full ">
                    {/* object header */}
                    <div className="flex justify-between pb-5">
                        <h4>Steder</h4>
                        <div className="admin-add">+</div>
                    </div>

                    {/* object body */}
                    <div className="border-secondary bg-white p-5"></div>
                </div>
            </div>

            {/* {steder.map((sted, index) => (
        <p key={index}>{sted.id} - {sted.navn}</p>
      ))} */}
        </div>
    );
};

export default AdminHome;
