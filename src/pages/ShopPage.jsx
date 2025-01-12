import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthPopup from "./AuthPopup"; // Import คอมโพเนนต์ Pop-up

const ShopPage = () => {
  const [showPopup, setShowPopup] = useState(false); // State ควบคุมการแสดงผลของ Pop-up
  const [showMoreCategories, setShowMoreCategories] = useState(false); // สำหรับหมวดหมู่
  const [showMoreSizes, setShowMoreSizes] = useState(false); // สำหรับไซส์
  const navigate = useNavigate();

  const mockProducts = [
    {
      id: 1,
      name: "เสื้อนักศึกษาหญิง",
      description: "คอกลม รัดรูป เนื้อผ้าบาง",
      price: "130",
      image_url: "/images/Frame (3).png",
    },
    {
      id: 2,
      name: "เสื้อนักศึกษาชาย",
      description: "แขนสั้น ใส่สบาย ทรงหลวม",
      price: "150",
      image_url: "/images/Frame (4).png",
    },
    {
      id: 3,
      name: "กางเกงขายาว",
      description: "กางเกงนักศึกษาขายาว เนื้อผ้าหนา",
      price: "200",
      image_url: "/images/Image (1).png",
    },
    {
      id: 4,
      name: "ฮิญาบสำหรับนักเรียน",
      description: "ผ้านุ่ม สีขาว สำหรับนักศึกษา",
      price: "145",
      image_url: "/images/Frame (5).png",
    },
    {
      id: 5,
      name: "กระโปรงทรงเอ",
      description: "กระโปรงยาว 24 นิ้ว",
      price: "180",
      image_url: "/images/Frame (6).png",
    },
    {
      id: 6,
      name: "รองเท้าคัทชู",
      description: "หนังแท้ ทรงสุภาพ",
      price: "399",
      image_url: "/images/Frame (7).png",
    },
  ];

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); // ไปที่หน้า ProductDetail พร้อมส่ง ID สินค้า
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Header */}
      <header className="relative w-full bg-white">
        <div className="flex justify-between items-center px-12 py-4">
          {/* โลโก้ */}
          <img
            src="/images/Brown Simple Interior Furniture Initial Logo 3.png"
            alt="Mixmax Logo"
            className="w-25 h-23"
          />
          {/* ไอคอนเมนู */}
          <div className="flex items-center space-x-6">
            <img
              src="/images/Buying.png"
              alt="Cart"
              className="w-15 h-15 cursor-pointer"
            />
            <img
              src="/images/Ellipse 3 (1).png"
              alt="Profile"
              className="w-15 h-15 cursor-pointer"
              onClick={() => setShowPopup(true)} // เปิด Pop-up
            />
          </div>
        </div>

        {/* พื้นหลังของ Header */}
        <div
          className="relative h-64 shadow-inset-top rounded-3xl overflow-hidden shadow-inner mt-3 mx-24"
          style={{
            backgroundImage: `url('/images/Bg-search.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* กล่องค้นหา */}
          <div className="absolute inset-0 flex justify-center items-center ">
            <input
              type="text"
              placeholder="Search items..."
              className="p-4 mt-28 w-[40%] rounded-xl shadow-lg bg-white focus:outline-none "
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex px-10 py-6 mt-5">
        {/* Sidebar */}
        <aside className="w-1/4 pr-6">
          {/* หมวดหมู่ */}
          <div className="sidebar-box mx-20 mb-6">
            <h2 className="text-lg font-bold mb-2">หมวดหมู่</h2>
            <ul className="space-y-2">
              <li className="hover:text-blue-500 cursor-pointer">เสื้อนักศึกษาหญิง</li>
              <li className="hover:text-blue-500 cursor-pointer">กางเกงขายาว</li>
              <li className="hover:text-blue-500 cursor-pointer">กระโปรงทรงเอ</li>
              {showMoreCategories && (
                <>
                  <li className="hover:text-blue-500 cursor-pointer">กระโปรงทรงสอบ</li>
                  <li className="hover:text-blue-500 cursor-pointer">เสื้อแขนยาว</li>
                </>
              )}
            </ul>
            <button
              onClick={() => setShowMoreCategories(!showMoreCategories)}
              className="text-sm mt-2 text-blue-500"
            >
              {showMoreCategories ? "แสดงน้อยลง ▲" : "ดูเพิ่มเติม ▼"}
            </button>
          </div>

          {/* ไซส์ */}
          <div className="sidebar-box mx-20">
            <h2 className="text-lg font-bold mb-2">ไซส์</h2>
            <ul className="space-y-2">
              <li>
                <input type="checkbox" className="mr-2" /> 36
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> 38
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> 40
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> 42
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> 44
              </li>
              {showMoreSizes && (
                <>
                  <li>
                    <input type="checkbox" className="mr-2" /> 46
                  </li>
                  <li>
                    <input type="checkbox" className="mr-2" /> 48
                  </li>
                </>
              )}
            </ul>
            <button
              onClick={() => setShowMoreSizes(!showMoreSizes)}
              className="text-sm mt-2 text-blue-500"
            >
              {showMoreSizes ? "แสดงน้อยลง ▲" : "ดูเพิ่มเติม ▼"}
            </button>
          </div>
        </aside>

        {/* Products */}
        <main className="w-3/4">
          <div className="flex justify-start mb-5">
            <button className="bg-gradient-to-r from-purple-400 to-blue-300 text-white font-bold py-3 px-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              สินค้าแนะนำ
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
            {mockProducts.map((product) => (
              <div
                key={product.id}
                className="p-4 rounded-lg mr-16 my-7 shadow-md hover:shadow-lg transition-shadow gradient-border cursor-pointer"
                onClick={() => handleProductClick(product.id)}
              >
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-3"
                />
                <h3 className="text-md font-bold text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <p className="mt-2 text-blue-500 font-bold">{product.price} บาท</p>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Pop-up */}
      <AuthPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
};

export default ShopPage;
