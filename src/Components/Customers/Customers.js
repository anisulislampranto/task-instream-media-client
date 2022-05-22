import React, { useEffect, useState } from "react";
import Customer from "../Customer/Customer";
import loadingReactLogo from "../../logo.svg";
import EditCustomerModal from "../EditCustomerModal/EditCustomerModal";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({});

  console.log(customerInfo.name);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:4040/customers");
      const data = await res.json();
      setCustomers(data);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div className=" mx-5 mt-4">
      <div className=" flex justify-between">
        <h1 className="text-3xl">Customers</h1>
        <button
          className=" bg-green-700 text-white shadow-md p-3 rounded hover:bg-slate-600 hover:text-white"
          onClick={() => window.location.reload()}
        >
          {customers?.length ? "Page Reload" : "Reloading. . ."}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 gap-2 xl:grid xl:grid-cols-4 xl:gap-2 2xl:grid 2xl:grid-cols-5 2xl:gap-2">
        {customers?.length ? (
          customers.map((customer) => (
            <Customer
              customer={customer}
              setShowModal={setShowModal}
              setCustomerInfo={setCustomerInfo}
            />
          ))
        ) : (
          <div className="col-start-1 col-span-2 flex justify-center md:col-start-1 md:col-span-3">
            <img className="App-logo" src={loadingReactLogo} alt="" />
          </div>
        )}
      </div>
      {showModal && (
        <EditCustomerModal
          setShowModal={setShowModal}
          customerInfo={customerInfo}
        />
      )}
    </div>
  );
};

export default Customers;
