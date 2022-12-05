import React from "react";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { useDataContext } from "../../context/dataContext";

const Orders = () => {
  const { orders } = useDataContext();
  return (
    <>
      <MDBRow className=" p-5">
        <MDBCol className="square border m-2">
          user in the last 30 days
          <CircularProgressbarWithChildren value={66} strokeWidth={3}>
            <strong>38</strong>
            <div style={{ fontSize: 20, marginTop: -5 }}>from 100</div>
          </CircularProgressbarWithChildren>
        </MDBCol>
        <MDBCol className="square border m-2">
          orders in last 30days
          <CircularProgressbarWithChildren value={35} strokeWidth={3}>
            <strong>{orders.length}</strong>
            <div style={{ fontSize: 20, marginTop: -5 }}>from 50</div>
          </CircularProgressbarWithChildren>
        </MDBCol>
        <MDBCol className="square border m-2 w-responsive">
          new orders
            <MDBTable responsive className="newOrdersTable">
          <div className="newOrdersTable">
              <MDBTableHead className="">
                <tr>
                  <th scope="price">price</th>
                  <th scope="products number">products</th>
                  <th scope="date">Date</th>
                  <th scope="address">address</th>
                  <th scope="name">name</th>
                  <th scope=" order number">orderNumber</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {orders.map((data) => {
                  return (
                    <tr>
                      <td>{data.price}</td>
                      <td>{data.productsNum}</td>
                      <td>{data.date}</td>
                      <td><span>{data.address}</span></td>
                      <td>{data.name}</td>
                      <td>{data.orderNumber}</td>
                    </tr>
                  );
                })}
              </MDBTableBody>
          </div>
            </MDBTable>
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default Orders;
