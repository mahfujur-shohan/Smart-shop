export default function Rating({ product }) {
  const rating = Math.max(0, Math.min(5, Number(product.rating) || 0));
  return (
    <>
      {[...Array(Math.floor(rating))].map((_, i) => (
        <span key={i}>★</span>
      ))}
    </>
  );
}
