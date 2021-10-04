import React from "react";
import "./App.css";
import ProductList from "./components/productList/productList";
import ProductsTable from "./components/productsTable/productsTable";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// function Main({ selectItems }) {
  function Main() {
  return (
    <div className="container">
      <div className="pricing">
        <Link to="/table">
          <button>compre-table</button>
        </Link>
        <ProductList />
      </div>
      {/* {selectItems.length !== 0 ? <ProductsTable /> : ""} */}
    </div>
  );
}
// const mapStateToProps = (state) => {
//   const { selectedProducts } = state;

//   const selectItems = selectedProducts.selectItems;

//   return { selectItems };
// };

// export default connect(mapStateToProps)(Main);
export default Main
