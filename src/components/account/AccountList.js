import React from "react";
import styles from "./AccountList.module.css";

const AccoundList = (props) => {
  const data = Object.keys(props.accdata);

  // const selectHandler = (e) => {
  //   setSelecteduser(e.target.value);
  //   console.log(selecteduser);
  //   props.selectedUser(selecteduser);
  // };

  return (
    <div className={styles.accountlistcontainer}>
      <h2>List of Accounts</h2>
      <label>Accounts</label>
      <br />
      <select onChange={(e) => props.data(e.target.value)}>
        <option value="select account">Select Account</option>
        {data.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AccoundList;
