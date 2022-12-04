import React from 'react'
import { createContext, useContext, useEffect, useState } from "react";
import { categoriesData } from "../services/categoriesService";
import { departmentData } from "../services/departmentsService";
import { infoData } from "../services/infoService";
import { ordersData } from "../services/ordersService";
import { productsData } from "../services/productsService";
import { storesData } from "../services/storesService";

export const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataContextProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [department, setDepartment] = useState([]);
  const [info, setInfo] = useState([]);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [stores, setStores] = useState([]);

useEffect(() => {
  categoriesData().then((res) => setCategory(res.message));
  departmentData().then((res) => setDepartment(res.message));
  infoData().then((res) => setInfo(res.message));
  ordersData().then((res) => setOrders(res.message));
  productsData().then((res) => setProducts(res.message));
  storesData().then((res) => setStores(res.message));
}, []);
return(
    <DataContext.Provider value={{category,department,info,orders,products,stores}}>
        {children}
    </DataContext.Provider>
)

};