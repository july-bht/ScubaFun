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
    <div className="w-screen h-screen pt-24 ">
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
        <div className="w-1/2 h-full pb-5">
          {/* object header */}
          <div className="flex justify-between pb-4">
            <h4 className="text-3xl font-semibold">Dykker Ture</h4>
            <div
              className="admin-add cursor-pointer"
              onClick={() => setAddTurModal(true)}
            >
              +
            </div>
          </div>

          {/* object body */}
          <div
            className="border-secondary  bg-white p-5 "
            style={{ overflowY: "scroll", maxHeight: "80vh" }}
          >
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

        {/* dykker steder */}
        <div className="w-1/2 ">
          {/* object header */}
          <div className="flex justify-between pb-4">
            <h4 className="text-3xl font-semibold">Steder</h4>

            <div
              className="admin-add cursor-pointer"
              onClick={() => setAddStedModal(true)}
            >
              +
            </div>
          </div>

          {/* object body */}
          <div
            className="border-secondary bg-white p-4 grid lg:grid-cols-2 gap-2 "
            style={{ overflowY: "scroll", maxHeight: "80vh" }}
          >
            {steder.map((sted, index) => (
              <div className="mb-5 border border-secondary rounded-lg p-3">
                <img
                  className="w-full object-cover h-48 bg-primary"
                  src={sted.img}
                  alt="Sunset in the mountains"
                />
                <p className="">Type: {sted.typeID}</p>
                <h4 className="text-xl font-semibold">{sted.navn}</h4>
                <p> {sted.content}</p>
                {/* <p>ID: {sted.id}</p> */}
                <div className="flex gap-2 ">
                  <p className=" text-sm">lat: {sted.lat}</p>
                  <p className=" text-sm"> lng: {sted.lon}</p>
                </div>
                <p className=" text-sm">Dybde: {sted.dybde}</p>

                <button>
                  <BsTrash onClick={async () => deleteSted(sted.id)} />
                </button>
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
