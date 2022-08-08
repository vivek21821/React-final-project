import React, { useEffect, useState } from "react";
import styles from "./OrdersList.module.css";

const OrdersList = () => {
  const [dashboardorders, setDashboardOrders] = useState({});

  useEffect(() => {
    setDashboardOrders(
      JSON.parse(localStorage.getItem("dashboardPage"))["orders"]
    );
  }, []);

  let orders = Object.keys(dashboardorders).map(
    (key, index) => dashboardorders[key]
  );

  return (
    <div className={styles.container}>
      <h2>Orders List</h2>
      <table>
        <thead>
          <tr>
            <th>Order No.</th>
            <th>Status</th>
            <th>Operators</th>
            <th>Location</th>
            <th>Distance</th>
            <th>Start Date</th>
            <th>EST Delivery Due</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item, i) => (
            <tr key={i}>
              <td>
                <strong>#{item.orderNo}</strong>
              </td>
              <td className={styles.statustd}>
                <span
                  className={`${styles.status} ${
                    (item.status === "Moving" && styles.Moving) ||
                    (item.status === "Pending" && styles.Pending) ||
                    (item.status === "Cancelled" && styles.Cancelled) ||
                    (item.status === "Delivered" && styles.Delivered)
                  }`}
                ></span>
                {item.status}
              </td>
              <td>
                <strong>{item.operators}</strong>
              </td>
              <td>
                <strong>{item.location}</strong>
              </td>
              <td>
                <strong>{item.distance} km</strong>
              </td>
              <td>{item.startDate}</td>
              <td>{item.deliveryDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersList;
