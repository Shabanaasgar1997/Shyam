import React from "react";

import ProductsDetails from "./ProductsDetails.json";

function Products() {
  console.log(ProductsDetails);
  return (
    <>
      <div className="container">
        <div className="row">
          {ProductsDetails.map((item) => {
            return (
              <>
                <div className="col-lg-3">
                  <div class="card shadow p-lg-2">
                    <img
                      src={item.image}
                      className="card-img-top img-fluid w-50 mx-auto"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">{item.title}</h5>
                      <p class="card-text">{item.description}</p>
                      <a href="#" class="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
