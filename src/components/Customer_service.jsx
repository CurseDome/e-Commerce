import React from "react";

function Customer_service() {
  return (
    <>
      <div className="m-4 mt-10">
        <button className="bg-red-400 rounded float-right mx-6 py-2 px-4 text-2xl  ">
          Add queries
        </button>
        <p className=" text-xl font-semibold">Total queries(x)</p>
        {/* sorting start */}
        <main className="flex  justify-between w-1/2 text-2xl mt-20 ">
          <div className="flex flex-col  gap-4 w-60 border-b-2 border-b-slate-500 pb-2">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" />
          </div>
          <div className="flex flex-col  gap-4 w-60 border-b-2 border-b-slate-500 pb-2">
            <label htmlFor="query_type">Query-Type</label>
            <select name="query_type" id="query_type">
              <option value="damaged_product">Damaged</option>
              <option value="product_return">Return</option>
              <option value="product_replace">Replace</option>
            </select>
          </div>
          <div className="flex flex-col  gap-4 w-60 border-b-2 border-b-slate-500 pb-2">
            <label htmlFor="product_type">Product type</label>
            <select name="product_type" id="product_type">
              <option value="furniture">Furniture</option>
              <option value="Mobiles">Mobiles</option>
              <option value="Home_appliences">Home appliences</option>
            </select>
          </div>
          <button className="bg-red-400 h-1/2 text-2xl py-2 px-4 rounded-lg">
            Search
          </button>
        </main>
      </div>
    </>
  );
}

export default Customer_service;
