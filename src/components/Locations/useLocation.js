import { useEffect, useState } from "react";
import { orderByDistance } from "geolib";

const storeList = [
  {
    name: "Gulshan Avenue",
    latitude: 23.776947565184358,
    longitude: 90.41677224949007,
  },
  {
    name: "Baridhara",
    latitude: 23.80915571595511,
    longitude: 90.41345768668418,
  },
  {
    name: "Bashundhara",
    latitude: 23.81224267017533,
    longitude: 90.42584472223213,
  },
  {
    name: "Jamuna Future Park",
    latitude: 23.812603129722806,
    longitude: 90.42376084554229,
  },
  {
    name: "Dhanmondi",
    latitude: 23.73836551064122,
    longitude: 90.37801945660138,
  },
  {
    name: "Gulshan 2",
    latitude: 23.796348196200388,
    longitude: 90.41522842953958,
  },
];
// 23.8168742,90.3708644/@23.8210679,90.3797023,14z/

// using lat and long numbers :
// https://www.google.com/maps/dir/{lat},{long}/{lat},{long}

// using text for destination :
// https://www.google.com/maps/dir/{lat},{long}/Tabaq+Coffee,+A2,+Level+2,+House,+37+%E0%A6%B8%E0%A7%9C%E0%A6%95-%E0%A7%A8,+Dhaka+1205

const useLocation = () => {
  const [nearest3Stores, setNearest3Stores] = useState([]);
  const [current, setCurrent] = useState({
    latitude: "",
    longitude: "",
  });

  useEffect(() => {
    function findNearestStores(position) {
      try {
        setCurrent({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        const nearest = orderByDistance(
          {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
          storeList
        ).slice(0, 3);

        setNearest3Stores(nearest);
      } catch (err) {
        console.log("🚀 ~ file: services.js:64 ~ findNearestStores ~ err", err);
      }
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(findNearestStores);
    }
  }, []);

  return { nearest3Stores, current };
};

export default useLocation;
