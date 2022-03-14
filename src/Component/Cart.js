import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { RemoveItem } from './Slice';

const Cart = () => {
  const thali = useSelector(state => state.counter.thali)
  console.log(thali)
  const despatch = useDispatch()
  const Remove = (id) => {
    despatch(RemoveItem(id))

  }
  const order = () => {



    if (thali.length < 2) {
      Swal.fire({
        icon: 'error',

        title: 'Oops...😥',

        text: 'Order at least 2 item.',



      })

    } else {



      Swal.fire(

        'Ordered sucessfull! 😉',

        'You clicked the button!',

        'success'
      )
      thali.length = 0
    }

  }

  var sum = 0
  for (const item of thali) {
    sum = sum + item.totalPrice
  }
  
  return (
    <div className='container mx-3 '>
      <h3 className='text-left' style={{textDecoration:"underline" , margin:"30px"}}>Your Thali</h3>
      <div className='row'>
        {
          thali.map((ele, ind) => (
            <div className='col-4'>
              <div className="card my-3" key={ind} style={{maxWidth:300}}>
                <img src={ele.image} className="card-img-top" alt="Food" height="200px" />
                <div className="card-body" style={{textAlign:"center"}}>
                  <h5 className="card-title">{ele.name}</h5>
                  <p className="card-text">Quantity: {ele.quantity}</p>
                  <p>Price: ₹ {ele.price}</p>
                  <p><b>TotalPrice: ₹ {ele.totalPrice}</b></p>
                  <button onClick={() => Remove(ind)} className="btn btn-outline-primary">Remove From Cart</button>
                </div>
              </div>
            </div>



          )
          )
        }
        <div className='container text-end  m-2 p-2'>
          <h4  style={{textDecoration:"underline" , marginBottom:"10px"}}> Your Total Bill Amount <b>{sum} ₹</b></h4>
          <button className='btn btn-outline-success' onClick={order}>Order Now </button>
        </div>
      </div>
    </div>
  )
}

export default Cart

