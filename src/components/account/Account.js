import React, { useEffect, useState } from "react";
import AccData from "./AccData";
import AccoundList from "./AccountList";

const Account = () => {
  const [accdata, setAccdata] = useState({});
  const [user, setUser] = useState("");
  useEffect(() => {
    setAccdata(JSON.parse(localStorage.getItem("accountsPage")));
  }, []);

  const selectedUser = (data) => {
    setUser(data);
  };

  return (
    <div>
      <AccoundList accdata={accdata} data={selectedUser} />
      <br />
      <br />
      <AccData activeUser={user} />
    </div>
  );
};

export default Account;
