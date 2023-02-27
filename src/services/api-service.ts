import IStock from "../interfaces/stock";
import http from "../services/http-client";

const getPortfolio = () => {
  return http.get<Array<IStock>>("/portfolio");
};

const ApiService = {
    getPortfolio,
};

export default ApiService;