import { isInCart } from "../utils/utils";
import CartDetails from "./CartDetails";
import Product from "./Product";

export default function ProductList({
  filterStatus,
  setFilterStatus,
  getSortedProducts,
  onAddToCart,
  cartData,
  onDeleteItemToCart,
  onPlusQuantity,
  onMinusQuantity,
}) {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Products Section (2/3 width on large screens) */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Your Products</h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm">Sort by:</span>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="border rounded-md px-2 py-1 text-sm"
              >
                <option value="Most Popular">Most Popular</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
              </select>
            </div>
          </div>
          {/* Products Grid */}
          <div className="product-grid">
            {getSortedProducts().length === 0 && (
              <p className="font-bold text-red-500">No Products to Show</p>
            )}
            {getSortedProducts().map((product) => (
              <Product
                key={product.id}
                onAddToCart={onAddToCart}
                isAddToCart={isInCart(cartData, product.id)}
                onDeleteItemToCart={onDeleteItemToCart}
                product={product}
              />
            ))}
          </div>
        </div>
        <CartDetails
          cartData={cartData}
          onPlusQuantity={onPlusQuantity}
          onMinusQuantity={onMinusQuantity}
          onDeleteItemToCart={onDeleteItemToCart}
        />
      </div>
    </>
  );
}
