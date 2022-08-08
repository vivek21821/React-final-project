import React, { useEffect, useState } from "react";
import styles from "./NotificationList.module.css";

const NotificationList = () => {
  let [notifications, setNotifications] = useState({});

  useEffect(() => {
    setNotifications(
      JSON.parse(localStorage.getItem("dashboardPage"))["notifications"]
    );
  }, []);

  let notificationsarr = Object.keys(notifications).map(
    (key, index) => notifications[key]
  );

  return (
    <div className={styles.container}>
      <h2>NotificationList</h2>
      {notificationsarr.map((item, i) => (
        <div className={styles.notificationcontainer} key={i}>
          <img src={item.pic} alt={i} />
          <p>
            {item.message}.
            <br />
            <span> {item.time}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default NotificationList;
