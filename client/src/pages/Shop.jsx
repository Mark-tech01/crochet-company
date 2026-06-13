function Shop() {
  const products = [
    {
      id: 1,
      name: "Rose Bouquet",
      price: "₹999",
      category: "Flowers",
    },
    {
      id: 2,
      name: "Sunflower Bouquet",
      price: "₹1199",
      category: "Flowers",
    },
    {
      id: 3,
      name: "Crochet Bear",
      price: "₹1499",
      category: "Amigurumi",
    },
    {
      id: 4,
      name: "Custom Couple Doll",
      price: "₹2499",
      category: "Custom",
    },
  ];

  return (
    <section className="shop-page">
      <div className="container">
        <h1>Shop Collection</h1>
        <p>
          Discover handcrafted crochet gifts designed to
          last forever.
        </p>

        <div className="shop-grid">
          {products.map((product) => (
            <div className="shop-card" key={product.id}>
              <div className="product-image-placeholder">
                Product Image
              </div>

              <h3>{product.name}</h3>

              <p>{product.category}</p>

              <span>{product.price}</span>

              <button>View Product</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Shop;