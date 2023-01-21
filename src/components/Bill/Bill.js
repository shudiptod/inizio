import React from "react";
const Bill = () => {
  return (
    <div className="invoiceContainer">
      <div className="title">
        <h1>I N V O I C E</h1>
      </div>
      <div className="logo_summary_container">
        <div className="logo_container">
          <img src="/tabaq.png" alt="TABAQ Coffee" />
        </div>
        <div className="table_container">
          <table>
            <tr>
              <th>Invoice#</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
            <tr>
              <td>CRAZY007</td>
              <td>Cappuccino</td>
              <td>02</td>
              <td>02 x 230</td>
            </tr>
            <tr>
              <td> </td>
              <td>Latte</td>
              <td>01</td>
              <td>450</td>
            </tr>
            <br />
            <tr>
              <td rowSpan="4" colSpan="3" className="last_row">
                Subtotal =
              </td>

              <td className="last_row">910 BDT</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bill;
