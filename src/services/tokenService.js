const {
  REACT_APP_TOKENS_API_URL,
  REACT_APP_TOKENS_API_KEY,
  REACT_APP_TOKENS_API_HOST,
} = process.env;

const options = {
  method: "GET",
  url: REACT_APP_TOKENS_API_URL,
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "100",
    offset: "0",
  },
  headers: {
    "X-RapidAPI-Key": REACT_APP_TOKENS_API_KEY,
    "X-RapidAPI-Host": REACT_APP_TOKENS_API_HOST,
  },
};

function getTokens() {
  return options;
}

export { getTokens };
