import CartItem from "./CartItem";

export default function CartDetails({
  cartData,
  onDeleteItemToCart,
  onPlusQuantity,
  onMinusQuantity,
}) {
  const subtotal = cartData.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const discount = subtotal * 0.2;
  const afterDiscount = subtotal - discount;
  const total = afterDiscount + 15;

  return (
    <>
      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>

          {cartData.length === 0 && (
            <p className="font-bold text-red-500">Cart is Empty</p>
          )}

          {cartData.map((item) => (
            <CartItem
              key={item.itemId}
              onPlusQuantity={onPlusQuantity}
              onMinusQuantity={onMinusQuantity}
              item={item}
              onDeleteItemToCart={onDeleteItemToCart}
            />
          ))}

          {/* Order Summary */}
          <div className="mt-6">
            <h3 className="font-bold text-lg mb-4">Order Summary</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal}</span>
              </div>
              <div className="flex justify-between text-red-500">
                <span>Discount (-20%)</span>
                <span>-$113</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="font-medium">$15</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
                <span>Total</span>
                <span>${subtotal > 0 ? total : 0}</span>
              </div>
            </div>
            {/* Promo Code */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex-grow relative">
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
                />
                <span className="absolute left-3 top-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                </span>
              </div>
              <button className="bg-black text-white rounded-md px-4 py-2 text-sm">
                Apply
              </button>
            </div>
            {/* Checkout Button */}
            <a
              href="#"
              onClick={() => alert("Not implemented yet")}
              className="block bg-black text-white text-center py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              Go to Checkout
              <span className="inline-block ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
