import React from 'react';

function ProductList({ product }) {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazor = async (selectedProduct) => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      alert('Failed to load Razorpay script');
      return;
    }

    const amountInPaisa = selectedProduct.price * 100; // Convert amount to paisa

    const options = {
      key: 'rzp_test_IBdLM2AirgXkjw',
      amount: amountInPaisa,
      currency: 'INR',
      name: 'Payment Gateway',
      handler: function (response) {
        alert('Payment successful, your order will be delivered on time. Thankyou Hritu');
      },
      prefill: {
        name: 'Payment Gateway',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="flex">
      {product.map((product, index) => (
        <div key={index} style={{ width: '33%' }}>
          <div className="product-item">
            <img className="image" src={product.url} width="90%" alt={product.name} />
            <p>
              {product.name} | {product.category}
            </p>
            <p> {product.seller} </p>
            <p> Rs. {product.price} /-</p>
            <button className="btn" onClick={() => displayRazor(product)}>
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
