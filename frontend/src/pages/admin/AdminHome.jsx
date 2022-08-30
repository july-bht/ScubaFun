<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
import React from 'react'
=======
>>>>>>> Stashed changes
import React from "react";
import axios from "axios";
import { GetPlaces } from "../../helpers/API";
import Card from "../components/TripCard";
<<<<<<< Updated upstream
=======
import Layout from "../../layout/admin/AdminLayout";
>>>>>>> Stashed changes
>>>>>>> Stashed changes

const AdminHome = () => {
  const [steder, setSteder] = React.useState([]);

  const getData = async () => {
    const newPlaces = await GetPlaces();
    setSteder(newPlaces.data);

    // EKSEMPEL:
    // const newTur = await getTur();
    // setTur(newTur.data)
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
    <div>AdminHome</div>
  )
}
=======

>>>>>>> Stashed changes
    <div className="w-screen h-screen pt-5">
      <div className="flex gap-20 justify-center px-20">

        {/* dykker ture */}
        <div className="w-full ">
          
          {/* object header */}
          <div className="flex justify-between pb-5">
            <h4>Dykker Ture</h4>
            <div className="admin-add">+</div>
          </div>

          {/* object body */}
          <div className="border-secondary h-3/4 bg-white p-5 overflow-scroll">
            <Card />
            <Card />
          </div>
        </div>


        {/* dykker stder */}
        <div className="w-full ">
          
          {/* object header */}
          <div className="flex justify-between pb-5">
            <h4>Dykker Ture</h4>
            <div className="admin-add">+</div>
          </div>

          {/* object body */}
          <div className="border-secondary bg-white p-5">
            <Card />

          </div>
        </div>
      </div>

      {/* {steder.map((sted, index) => (
        <p key={index}>{sted.id} - {sted.navn}</p>
      ))} */}
    </div>
<<<<<<< Updated upstream
  );
};
=======
  
  );
};
>>>>>>> Stashed changes
>>>>>>> Stashed changes

export default AdminHome;
