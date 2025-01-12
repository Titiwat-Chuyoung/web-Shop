import React, { useState } from "react";

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Navbar */}
      <header className="relative w-full bg-white">
        <div className="flex justify-between items-center px-12 py-4">
          {/* โลโก้ */}
          <img
            src="/images/Brown Simple Interior Furniture Initial Logo 3.png"
            alt="Mixmax Logo"
            className="w-25 h-23"
          />
          {/* Search */}
          <div className="flex-1 mx-8 flex justify-center">
            <div className="p-2 w-[50%] bg-gradient-to-r from-purple-400 to-blue-300 rounded-xl shadow-lg">
              <input
                type="text"
                placeholder="Search items..."
                className="p-2 w-full rounded-xl bg-white shadow-md border focus:outline-none"
              />
            </div>
          </div>
          {/* ไอคอนเมนู */}
          <div className="flex items-center space-x-6">
            <img
              src="/images/Buying.png"
              alt="Cart"
              className="w-10 h-10 cursor-pointer"
            />
            <img
              src="/images/Ellipse 3 (1).png"
              alt="Profile"
              className="w-10 h-10 cursor-pointer"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex px-20 py-8">
        {/* Product Images */}
        <div className="w-2/5 pr-8">
          <img
            src="/images/58725.png" // รูปภาพสินค้า
            alt="Product"
            className="w-50 h-auto rounded-lg shadow-md mb-4 ml-36"
          />
          <div className="flex items-center space-x-4 mt-4 ml-24">
            <button className="w-10 h-10 flex justify-center items-center bg-gray-200 rounded-full">
              &lt;
            </button>
            <div className="grid grid-cols-5 gap-2">
              <img
                src="/images/Frame (3).png"
                alt="Thumbnail"
                className="w-16 h-16 object-cover rounded-md border-2 border-gray-300"
              />
              <img
                src="/images/image (3).png"
                alt="Thumbnail"
                className="w-16 h-16 object-cover rounded-md border-2 border-gray-300"
              />
              <img
                src="/images/Frame (4).png"
                alt="Thumbnail"
                className="w-16 h-16 object-cover rounded-md border-2 border-gray-300"
              />
              <img
                src="/images/Frame (3).png"
                alt="Thumbnail"
                className="w-16 h-16 object-cover rounded-md border-2 border-gray-300"
              />
              <img
                src="/images/Frame (3).png"
                alt="Thumbnail"
                className="w-16 h-16 object-cover rounded-md border-2 border-gray-300"
              />
              {/* เพิ่มรูป Thumbnail เพิ่มเติม */}
            </div>
            <button className="w-10 h-10 flex justify-center items-center bg-gray-200 rounded-full">
              &gt;
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div className="w-1/3">
          <h1 className="text-2xl font-bold mb-4">฿129 - ฿184</h1>
          <p className="text-gray-700 mb-6">
            เสื้อนักศึกษาหญิง ถูกระเบียบ ทรงเข้ารูป แขนสามเหลี่ยม มีสีขาวบอล ขาวสว่าง ขาวโอไม่
          </p>

          {/* Colors */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">สี</h2>
            <div className="flex space-x-4">
              <button className="px-4 py-2 border border-gray-300 rounded-md">
                ขาวบอล
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md">
                ขาวสว่าง
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md">
                ขาวโอไม่
              </button>
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">ไซส์/รอบอก</h2>
            <div className="grid grid-cols-5 gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md">
                s32
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md">
                m33
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md">
                l34
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md">
                xl36
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md">
                38
              </button>
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">จำนวน</h2>
            <div className="flex items-center">
              <button
                onClick={decreaseQuantity}
                className="px-4 py-2 border border-gray-300 rounded-l-md"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 text-center border-t border-b border-gray-300"
              />
              <button
                onClick={increaseQuantity}
                className="px-4 py-2 border border-gray-300 rounded-r-md"
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 mt-6">
            <button className="flex-1 px-4 py-3 bg-gray-200 text-gray-800 font-bold rounded-md">
              เพิ่มไปยังรถเข็น
            </button>
            <button className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-400 to-blue-300 text-white font-bold rounded-md">
              ซื้อสินค้า
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
