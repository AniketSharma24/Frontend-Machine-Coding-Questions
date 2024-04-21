import { useEffect, useState } from "react";
import { API_PATH, DEFAULT_LIMIT } from "./constants/config";

function App() {
  const [productList, setProductList] = useState([]);
  const [maxLimit, setMaxLimit] = useState(0);
  const [pageList, setPageList] = useState([]);
  const [pages, setPages] = useState(0);

  const [hasError, setHasError] = useState(false);

  const fetchData = async (skip = 0, limit = DEFAULT_LIMIT) => {
    try {
      const res = await fetch(`${API_PATH}?limit=${limit}&skip=${skip}`);
      const data = await res.json();

      if (data && data.products) {
        if (!maxLimit) setMaxLimit(data.total);

        setProductList(data.products);
        return data;
      }
    } catch (err) {
      setHasError(true);
      return err;
    }
  };

  useEffect(() => {
    let data = fetchData();
    data
      .then((res) => {
        let maxPageCounts = Math.ceil(res.total / DEFAULT_LIMIT);
        let pageArr = [];
        for (let i = 1; i <= maxPageCounts; i++) {
          pageArr.push(i);
        }
        setPageList(pageArr);
      })
      .catch((err) => {
        setHasError(true);
      });
  }, []);

  useEffect(() => {
    fetchData(pages);
  }, [pages]);

  const handlePrevClick = () => {
    if (pages - DEFAULT_LIMIT >= 0) {
      setPages((prevPages) => prevPages - DEFAULT_LIMIT);
    }
  };

  const handleNextClick = () => {
    if (pages + DEFAULT_LIMIT < maxLimit) {
      setPages((prevPages) => prevPages + DEFAULT_LIMIT);
    }
  };

  if (hasError) {
    return <h2>Cannot get product list. Server is not responding</h2>;
  }

  return (
    <>
      <div className="pagination-buttons">
        <button onClick={handlePrevClick} disabled={pages - DEFAULT_LIMIT < 0}>
          Previous
        </button>
        <div className="page-list">
          {pageList.length ? (
            pageList.map((page, i) => {
              return (
                <h2
                  key={i}
                  className={
                    i == Math.ceil(pages / DEFAULT_LIMIT)
                      ? "page-count active-page"
                      : "page-count"
                  }
                  onClick={() => {
                    if (pages + DEFAULT_LIMIT <= maxLimit) {
                      setPages(page * DEFAULT_LIMIT - DEFAULT_LIMIT);
                    }
                  }}
                >
                  {page}
                </h2>
              );
            })
          ) : (
            <p>Calculating total pages...</p>
          )}
        </div>

        <button
          onClick={handleNextClick}
          disabled={pages + DEFAULT_LIMIT >= maxLimit}
        >
          Next
        </button>
      </div>

      <div className="card-container">
        {productList?.length ? (
          productList.map((product) => {
            return (
              <div key={product.id} className="product-card">
                <p>ID: {product.id}</p>
                <p>Name: {product.title}</p>
                <p>Description: {product.description}</p>
                <p>Brand: {product.brand}</p>
              </div>
            );
          })
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </>
  );
}

export default App;
