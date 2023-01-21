import React from "react";
import useLocation from "./useLocation";

const Locations = () => {
  const { nearest3Stores, current } = useLocation();
  const getMapLink = (item) => {
    return `https://www.google.com/maps/dir/${current.latitude},${current.longitude}/Tabaq+Coffee+${item.name}`;
  };
  return (
    <div>
      {nearest3Stores.map((item) => (
        <a
          href={getMapLink(item)}
          className="goto-button"
          target="_blank"
          rel="noreferrer"
        >
          Go to the SHOP ( {item.name})
        </a>
      ))}

      <h3>Your Location</h3>
      <p>
        Latitude: {current.latitude}, Longitude: {current.longitude}
      </p>
    </div>
  );
};

export default Locations;
