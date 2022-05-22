import React, { useEffect, useState } from "react";
import Customer from "../Customer/Customer";
import loadingReactLogo from "../../logo.svg";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

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
          {customers?.length
            ? "Page Refresh to show letest customers"
            : "Fetching New Customers . . ."}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid sm:grid-cols-3 md:grid md:grid-cols-4 gap-2">
        {customers?.length ? (
          customers.map((customer) => <Customer customer={customer} />)
        ) : (
          <div className="col-start-2 col-span-2 flex justify-center">
            <img className="App-logo" src={loadingReactLogo} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Customers;
