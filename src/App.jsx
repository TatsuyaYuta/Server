import React from "react";
import Header from "./components/layout/Header";
import TemperatureCard from "./components/layout/TemperatureCard";
import './App.css';
import background from "./assets/photo/background.png";

const App = () => {
  return (
    <div
      className="bg-blue-50 min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${background})`, // ใช้ภาพพื้นหลังจาก assets
        backgroundSize: "cover", // ทำให้ภาพครอบคลุมพื้นที่ทั้งหมด
        backgroundPosition: "center", // จัดให้อยู่ตรงกลาง
      }}
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex justify-center items-center">
        <TemperatureCard temperature={14}  />
      </main>
    </div>
  );
};

export default App;
