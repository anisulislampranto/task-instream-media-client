import React from "react";
import CreateCustomer from "../../Components/CreateCustomer/CreateCustomer";
import Customers from "../../Components/Customers/Customers";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className=" grid grid-col md:grid md:grid-cols-4">
        {/* sidebar create customer section */}
        <div className="md:h-screen md:sticky md:top-0">
          <CreateCustomer />
        </div>
        {/* customers InfoCard section  */}
        <div className="md:col-start-2 md:col-span-4">
          <Customers />
        </div>
      </div>
    </div>
  );
};

export default Home;
