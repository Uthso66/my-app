import React from 'react';
import './Table2.css';

const Table2 = () => {
  return (
    <table className="table2">
      <thead>
        <tr>
          <th>Baggagge</th>
          <th>Check-In</th>
          <th>Cabin</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Adult</td>
          <td>20 KG</td>
          <td>M</td>
        </tr>
        <tr>
          <td>Child</td>
          <td>20 KG</td>
          <td>M</td>
        </tr>
        <tr>
          <td>Infant</td>
          <td>20 KG</td>
          <td>M</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table2;
