import React, { useState,useEffect } from 'react';
import { PayPalButton } from "react-paypal-button-v2";


const OrderSummary = () => {
  const[total , setTotal] = useState(0)
  const [paymentMethod, setPaymentMethod] = useState('M-Pesa'); // Default payment method
  const [sdk, setSdkReady] = useState(false);



const getTotal = () =>{
  const total = JSON.parse(localStorage.getItem('total'))
  setTotal(total)
}
  const paymentScript = () => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AWfYf3BOzxWq90sCNaedRCUuMmkM3WBAjRDUdGFsKmcFC1ZS99XSM0PFYHShfcQH3aVk5MXJB-C-9fMo";
    script.async = true;
    script.onload = () => {
      setSdkReady(true);
    };
    document.body.appendChild(script);
  };

  useEffect(()=>{
    if(!window.paypal){
      paymentScript()
    }else{
      setSdkReady(true)
    }
    getTotal()
  },[])




  return (
    <div className="container mx-auto px-4 orderConatiner py-8">
      <div className=" mx-auto  order bg-white rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Order Summary</h1>
        <div className="mb-6">
          <div className="mb-2 font-semibold">Total: ${total}</div>
          <div className="font-semibold">Payment Method:</div>
          <div className="flex justify-between mt-4">
            <div className=''>
            <button className="bg-transparent text-orange-500 border-2 border-orange-500 py-2 px-4 rounded-md font-semibold transition-colors duration-300 hover:bg-orange-500 hover:text-white hover:border-orange-600">
                 M-Pesa
            </button>
            <p className='text-[12px]'>Enter your MPESA PIN on prompt pop-up on your phone to complete the payment</p>
            <input
              type="text"
              id="mpesaNumber"
              placeholder="Enter your M-Pesa number"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
            <div >
            <PayPalButton
                            style={{
                              layout: "vertical",
                              color: "blue",
                              shape: "rect",
                              label: "paypal",
                            }}
                            amount={total}
                            // onSuccess={successPaymentHandler}
                        />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
