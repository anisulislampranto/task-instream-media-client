import { useEffect, useState } from "react";

const useCustomers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:4040/customers");
      const data = await res.json();
      setCustomers(data);
    };
    fetchData().catch(console.error);
  }, []);

  return [customers, setCustomers];
};

export default useCustomers;
