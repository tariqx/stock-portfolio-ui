import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ApiService from './services/api-service';
import IStock from './interfaces/stock';

function App() {

  const [portfolio, setPortfolio] = useState<IStock[]>([]);

  useEffect(() => {
    ApiService.getPortfolio()
      .then(response => {
        setPortfolio(response.data)
        console.log(response.data);
      })
      .catch(err => {
        console.error(err.message);
      });
  });


  const setupTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Shares</th>
            <th>Price</th>
            <th>Trx Type</th>
            <th>New %</th>
            {/* <th>Price Diff</th> */}
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    )
  }

  //setup table rows based on the products array
  const renderRows = () => {
    return portfolio.map((value, idx) => {
      return (
        <tr key={idx}>
          <td>{value.symbol.toString().trim()}</td>
          <td>{value.shares}</td>
          <td>{value.price}</td>
          <td>{value.trxType}</td>
          <td>{value.newAllocatedPercentage}</td>
          {/* <td>{value.priceDiff}</td> */}
        </tr>
      )
    });
  }
  
  return (
    <div className="App">
      {setupTable()}
    </div>
  );
}

export default App;
