import React, { Component } from "react";

export default class Pagination extends Component {
  paginationNumbersClasses(value) {
    // compare the incoming value with the activePage prop
    return this.props.activePage === value ? "page-item active" : "page-item";
  }

  render() {
    /* Look at this to see how the elements variable is generated:
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#using_arrow_functions_and_array.from */
    const elements = Array.from(
      { length: this.props.totalPages },
      (v, i) => i + 1
    );

    return (
      <ul className="pagination">
        {elements.map((value) => {
          return (
            <li
              key={value}
              className={this.paginationNumbersClasses(value)}
              onClick={(e) => this.props.onPageChange(e, value)}
            >
              <a className="page-link" href="localhost:3000/">
                {value}
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}
