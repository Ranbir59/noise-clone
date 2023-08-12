import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loadingi = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {setLoading(false)}, 2000);
  }, []);
  return <>
  
  <ClipLoader
        color={'red'}
        loading={loading}
        
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </>;
};

export default Loadingi;
