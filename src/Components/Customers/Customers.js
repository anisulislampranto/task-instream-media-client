import React, { useEffect, useState } from "react";

const Customers = () => {
  const [customer, setCustomer] = useState([]);

  console.log(customer);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:4040/customers");
      const data = await res.json();
      setCustomer(data);
    };
    fetchData().catch(console.error);
  }, []);

  return <div></div>;
};

export default Customers;
