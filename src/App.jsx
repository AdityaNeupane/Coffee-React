 import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import CustomTable from './Components/CustomTable'
import { useState } from 'react'
 
import pic1 from './assets/images/pic1.jpeg'
import pic2 from './assets/images/pic2.jpeg'
import pic3 from './assets/images/pic3.jpeg'
import pic4 from './assets/images/pic4.jpeg'


const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Mocha',
      image:  pic1,
      price: 500,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Cappuccino',
      image:  pic2,
      price: 450,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Latte',
      image: pic3,
      price: 550,
      quantity: 3,
    },
    {
      id: 4,
      name: 'Americano',
      image:  pic4,
      price:  450,
      quantity: 1,
    },
    
  ]);

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleApplyDiscount = (coupon) => {
    console.log(`Applying discount with coupon: ${coupon}`);
    // assuming if discount is rs.100 
 if (coupon === 'DISCOUNT100') {
      return 100;
    } else {
      return 0;
    }
  };

  const handleCheckout = () => {
    console.log('Proceeding to checkout');
   
  };

 

  return (
    <>
   <Navbar/>
   <div className="App">
   <CustomTable 
   items={items} 
   onDelete={handleDelete} 
   onApplyDiscount={handleApplyDiscount}
   onCheckout={handleCheckout}
   
   />
   </div>
    </>
  )
}

export default App
