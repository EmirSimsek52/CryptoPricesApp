export const fetchData = () => {
    return fetch(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        method: "GET",
        headers: {
          "X-CMC_PRO_API_KEY": "ce707b50-25d6-42e8-b867-b7ff63c28815",
        },
      }
    );
  };