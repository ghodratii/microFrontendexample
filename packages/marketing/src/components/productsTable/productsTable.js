import React from "react";
import { connect } from "react-redux";

import "./productTable.scss";
const ProductsTable = ({ selectItems }) => {
  return (
    <table id="customers">
      <thead>
        <tr>
          <th></th>
          {selectItems.map((item) => (
            <th>{item.employee_name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>employee_salary</td>
          {selectItems.map((item) => (
            <td key={`${item.id}${item.employee_salary}`}>
              {item.employee_salary}
            </td>
          ))}
        </tr>
        <tr>
          <td>employee_age</td>
          {selectItems.map((item) => (
            <td key={item.id}>{item.employee_age}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
const mapStateToProps = (state) => {
  const { selectedProducts } = state;

  const selectItems = selectedProducts.selectItems;

  return { selectItems };
};

export default connect(mapStateToProps)(ProductsTable);
