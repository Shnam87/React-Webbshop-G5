import React from "react";
import { Link } from "react-router-dom";

function Checkout({ cart, removeItem }) {
 
 const handleDelete = (e)=>{
  removeItem(e)
 }

  let sum = 0;
  cart.map((c) => (sum += c.price * c.quantity));

  return (
    <div>
      {cart != "" ? (
        <div>
          <table>
            <tbody>
              <tr>
                <th>Product</th>
                <th>Amount</th>
                <th>Quant.</th>
                <th>Id</th>
              </tr>

              {cart.map((c) => (
                <tr key={c.id}>
                  <td>{c.title}</td>
                  <td>{c.price}</td>
                  <td>{c.quantity}</td>
                  <td>{c.id}</td>
                  <td><button onClick={handleDelete}>Remove</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>sum: {sum} kr</div>
        </div>
      ) : (
        <div>
          Your cart is empty. To get more items,{" "}
          <Link to="/">
            <button>Click Here</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Checkout;
