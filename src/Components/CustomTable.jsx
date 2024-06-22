 
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';  
import './CustomTable.css';
import { useState } from 'react';

 const CustomTable = ({ items, onDelete, onApplyDiscount, onCheckout }) => {
  const [coupon, setCoupon] = useState('');
    const [discount, setDiscount] = useState(0);

  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
  };

  const handleApplyDiscount = () => {
 const discountValue = onApplyDiscount(coupon);
    setDiscount(discountValue);
  };

const handleQuantityChange = (id, delta) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(item.quantity + delta, 1) } : item
    );
    setItems(updatedItems);
  };






  
 const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountedTotal = totalAmount - discount;

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Sub-total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="item-cell">
                <img src={item.image} alt={item.name} className="product-image" />
                <span>{item.name}</span>
              </td>
              <td>Rs {item.price.toFixed(2)}</td>


               <td>
                <div className="quantity-control">
                  <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                </div>
              </td>
              <td>Rs {(item.price * item.quantity).toFixed(2)}</td>
              



              <td>
                <button className="delete-button" onClick={() => onDelete(item.id)}>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

     <div className="actions">
        <input
          type="text"
          placeholder="Coupon Code"
          value={coupon}
          onChange={handleCouponChange}
          className="coupon-input"
        />
        <button className="apply-button" onClick={handleApplyDiscount}>Apply Discount</button>
        <button className="checkout-button" onClick={onCheckout}>Checkout</button>
      </div>


      <tfoot>
        <div className="footer">
          <tr>
            <td colSpan="3" className="footer-label">Discount:</td>
            <td colSpan="2" className="footer-value">Rs {discount.toFixed(2)}</td>
          </tr>
          <tr>
            <td colSpan="3" className="footer-label">Shipping Fee:</td>
            <td colSpan="2" className="footer-value">No shipping fee</td>
          </tr>
          <tr>
            <td colSpan="3" className="footer-label">Total Amount:</td>
            <td colSpan="2" className="footer-value">Rs {discountedTotal.toFixed(2)}</td>
          </tr>
          </div>
        </tfoot>




    </div>
  );
};

export default CustomTable;

 