import { useEffect, useState } from "react";

const useServices = () => {
  const [serviceItem, setServiceItem] = useState([]);

  useEffect(() => {
    fetch("https://afternoon-wave-02236.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServiceItem(data));
  }, []);

  return [serviceItem];
};

export default useServices;
