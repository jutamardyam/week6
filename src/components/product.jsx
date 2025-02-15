import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4 text-danger">Yam Product</h1>
      <div className="row row-cols-2 row-cols-md-4 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <div className="card h-100 border-0 shadow-sm rounded">
              <img 
                src={product.thumbnail} 
                className="card-img-top p-2 rounded" 
                alt={product.title} 
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h6 className="card-title text-truncate" title={product.title}>{product.title}</h6>
                <p className="card-text text-muted small flex-grow-1">{product.description.substring(0, 50)}...</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-danger fw-bold">${product.price}</span>
                  <button className="btn btn-sm btn-warning">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}