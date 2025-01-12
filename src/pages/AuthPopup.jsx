import React, { useState } from "react";

const AuthPopup = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("login"); // "login" หรือ "register"

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose} // คลิกพื้นที่ว่างเพื่อปิด Pop-up
    >
      <div
        className="bg-white rounded-lg shadow-lg flex w-[900px] h-[600px] relative overflow-hidden"
        onClick={(e) => e.stopPropagation()} // หยุดการคลิกภายใน Pop-up
      >
        {/* โลโก้มุมซ้ายบน */}
        <img
          src="/images/Brown Simple Interior Furniture Initial Logo 3.png"
          alt="Logo"
          className="absolute top-4 left-4 w-20 h-20"
        />

        {/* ด้านซ้าย: ฟอร์ม */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <div className="flex justify-between border-b mb-6">
            <button
              className={`w-1/2 pb-2 text-center font-bold ${
                activeTab === "login"
                  ? "border-b-2 border-black"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("login")}
            >
              เข้าสู่ระบบ
            </button>
            <button
              className={`w-1/2 pb-2 text-center font-bold ${
                activeTab === "register"
                  ? "border-b-2 border-black"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("register")}
            >
              ลงทะเบียน
            </button>
          </div>

          {/* ฟอร์มล็อกอิน */}
          {activeTab === "login" && (
            <form className="space-y-4">
              <div className="flex flex-col">
                <label className="text-sm text-gray-600">ชื่อผู้ใช้</label>
                <input
                  type="text"
                  placeholder="ชื่อผู้ใช้"
                  className="w-full p-3 border rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-600">รหัสผ่าน</label>
                <input
                  type="password"
                  placeholder="รหัสผ่าน"
                  className="w-full p-3 border rounded-md"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-400 to-blue-300 text-white py-3 rounded-full shadow-md hover:shadow-lg"
              >
                เข้าสู่ระบบ
              </button>
            </form>
          )}

          {/* ฟอร์มลงทะเบียน */}
          {activeTab === "register" && (
            <form className="space-y-4">
              <div className="flex flex-col">
                <label className="text-sm text-gray-600">ชื่อผู้ใช้</label>
                <input
                  type="text"
                  placeholder="ชื่อผู้ใช้"
                  className="w-full p-3 border rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-600">อีเมล์</label>
                <input
                  type="email"
                  placeholder="อีเมล์"
                  className="w-full p-3 border rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-600">รหัสผ่าน</label>
                <input
                  type="password"
                  placeholder="รหัสผ่าน"
                  className="w-full p-3 border rounded-md"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-400 to-blue-300 text-white py-3 rounded-full shadow-md hover:shadow-lg"
              >
                ลงทะเบียน
              </button>
            </form>
          )}
        </div>

        {/* ด้านขวา: รูปภาพ */}
        <div
          className="w-1/2 relative bg-cover bg-center flex flex-col items-center justify-center"
          style={{
            backgroundImage: "url('/images/image (2).png')",
          }}
        ></div>

        
      </div>
    </div>
  );
};

export default AuthPopup;
