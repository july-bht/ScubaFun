import React, { useState } from "react";
import ReactDOM from "react-dom";

import AdminHome from "../../pages/admin/AdminHome";

function AdminLogin() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "admin",
      password: "password",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="bg-primary flex flex-col items-center justify-center w-screen h-screen">
 

          <h4 className="text-white text-6xl pb-10">ADMIN PAGE</h4>


        {/* FORM */}
        <div className="bg-black rounded w-full sm:w-max px-12 py-7">
   
            <form
              onSubmit={handleSubmit}
              className="flex flex-col  gap-5"
            >
              <div className="flex flex-col">
                <label className="text-white">Username </label>
                <input className="input" type="text" name="uname" required />
                {renderErrorMessage("uname")}
              </div>
              <div className="flex flex-col">
                <label className="text-white">Password </label>
                <input className="input" type="password" name="pass" required />
                {renderErrorMessage("pass")}
              </div>
              <button className="mx-auto py-1">
                <input type="submit" />
              </button>
            </form>
      
        
        </div>
        {/* FORM END*/}
     
    </div>
  );

  return <div className="">{isSubmitted ? <AdminHome /> : renderForm}</div>;
}

export default AdminLogin;