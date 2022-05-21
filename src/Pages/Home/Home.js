import React from "react";
import CreateCustomer from "../../Components/CreateCustomer/CreateCustomer";
import Customers from "../../Components/Customers/Customers";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <CreateCustomer />
      <Customers />
    </div>
  );
};

export default Home;
