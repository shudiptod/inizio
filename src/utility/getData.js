import axios from "axios";

const URL = `/data.json`;
// const URL = "https://jsonkeeper.com/b/XK4L"; //this url is not SSL certified. which is why browser is not allowing to fetch

let config = {
  method: "get",
  url: URL,
};

export const getData = async () => {
  return axios(config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
