import React from "react";
import { connect } from "react-redux";

import {
  addItem,
  removeItem,
} from "../../redux/selectedProducts/product.action";

import "./product.style.scss";


class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      compare: this.props.compare,
    };
  }

  render() {
    const { compare } = this.state;
    const { item, addItem, removeItem } = this.props;
    const { employee_name, employee_salary } = item;
    return (
      <div className={`card item ${compare ? "" : "item-selected"}`}>
        <img
          src={
            "https://thumbs.dreamstime.com/z/female-programmer-flat-color-vector-detailed-character-website-design-development-job-woman-coding-work-industry-189916126.jpg"
            // "https://newrelic.com/sites/default/files/styles/16x9_1200w/public/2021-06/iStock-1071652068.jpg?h=59f9d53c&itok=GozhovbM"
            // "https://i.picsum.photos/id/1080/6858/4574.jpg?hmac=qMYBjROs2Wu589QQXRAYsxDJu4ZuRQ4PKDpb3x_Oouw"
          }
          alt="employee"
        />
        <div className="topic">
          <div className="topic-name">{employee_name}</div>
          <div className="topic-salary">${employee_salary}</div>
        </div>
        <div className="item-text">
          <div className="item-text-wrap">
            {compare ? (
              <button
                className="item-text-category btn  "
                // onClick={() => removeItem(item)}
                onClick={() => {
                  this.setState(
                    {
                      compare: false,
                    },
                    () => addItem(item)
                  );
                }}
              >
                compare
              </button>
            ) : (
              <button
                className="item-text-category btn "
                onClick={() => {
                  removeItem(item);
                  this.setState({
                    compare: true,
                  });
                }}
              >
                remove
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(Product);
