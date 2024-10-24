import React, { useEffect, useState } from "react";

// Custom Hook for Infinite Scrolling
const useInfiniteScroll = (callback, offset = 100) => {
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + offset >=
        document.documentElement.scrollHeight
      ) {
        callback();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [callback, offset]);
};

const App = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1); // To track the current page
  const [loading, setLoading] = useState(false); // To prevent duplicate API calls
  const [hasMore, setHasMore] = useState(true); // To check if more products are available

  // Fetch products from an API
  const fetchProductsFromAPI = async (pageNumber) => {
    setLoading(true);
    try {
      // Simulating an API request to fetch paginated products
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_limit=12&_page=${pageNumber}`
      );
      const data = await response.json();

      if (data.length === 0) {
        setHasMore(false); // Stop further API calls if no more data
      } else {
        setProducts((prevProducts) => [...prevProducts, ...data]); // Append new products
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Load more products on scroll
  const loadMoreProducts = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  // Use the custom hook for infinite scroll
  useInfiniteScroll(loadMoreProducts);

  useEffect(() => {
    // Scroll to the top on initial render
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Fetch products when the page changes
    if (page > 1 || products.length === 0) {
      fetchProductsFromAPI(page);
    }
  }, [page]);

  return (
    <div className="container">
      <h1>Infinite Scroll with API</h1>
      <div className="card-container">
        {products.map((product) => (
          <div key={product.id} className="card">
            <h1>{product.id}</h1>
            <h2>{product.title}</h2>
          </div>
        ))}
      </div>

      {/* Loading Indicator */}
      {loading && <p>Loading more products...</p>}

      {/* No more products */}
      {!hasMore && <p>No more products to load.</p>}
    </div>
  );
};

export default App;
