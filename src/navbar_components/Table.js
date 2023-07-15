import React from 'react';
import './Table.css';

const Table = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Pax Type</th>
          <th>Base Fare (BDT)</th>
          <th>Tax (BDT)</th>
          <th>Total (BDT)</th>
          <th>Pax Count</th>
          <th>Service Fee (BDT)</th>
          <th>Sub Total (BDT)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Adult x1</td>
          <td>4090 TK</td>
          <td>275 TK</td>
          <td>4815 TK</td>
          <td>1</td>
          <td>0 BDT</td>
          <td>4815 TK</td>
        </tr>
        <tr>
          <td>Child x1</td>
          <td>4090 TK</td>
          <td>275 TK</td>
          <td>4815 TK</td>
          <td>1</td>
          <td>0 BDT</td>
          <td>4815 TK</td>
        </tr>
        <tr>
          <td>Infant x1</td>
          <td>4090 TK</td>
          <td>275 TK</td>
          <td>4815 Tk</td>
          <td>1</td>
          <td>0 BDT</td>
          <td>4815 TK</td>
        </tr>
        
      </tbody>
    </table>
  );
};

export default Table;
