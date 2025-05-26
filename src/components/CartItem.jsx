import { getImageUrl } from "../utils/utils";

export default function CartItem({
  product,
  onDeleteItemToCart,
  quantity,
  onPlusQuantity,
  onMinusQuantity,
}) {
  return (
    <>
      <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
        <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
          <img
            src={getImageUrl(product.cover)}
            alt="Gradient Graphic T-shirt"
            className="h-full w-auto object-cover"
          />
        </div>
        <div className="flex-grow">
          <div className="flex justify-between">
            <h3 className="font-medium">{product.name}</h3>
            <span
              onClick={() => {
                onDeleteItemToCart(product.id);
              }}
              className="text-red-500 text-sm"
            >
              ×
            </span>
          </div>
          <p className="text-sm text-gray-500">Size: Large</p>
          <p className="text-sm text-gray-500">Color: White</p>
          <div className="flex justify-between items-center mt-2">
            <p className="font-bold">${product.price}</p>
            <div className="flex items-center space-x-2">
              <button
                onClick={onMinusQuantity}
                className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
              >
                −
              </button>
              <span className="text-sm">{quantity}</span>
              <button
                onClick={() => onPlusQuantity(product)}
                className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
