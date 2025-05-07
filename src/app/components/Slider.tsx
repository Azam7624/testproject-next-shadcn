// pages/choose-loan-plan.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// استایل‌های Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ChooseLoanPlan() {
  const plans = [
    {
      title: "Gold",
      loanAmount: "300,000,000",
      inquiryCost: "800,000",
      payDuration: "36 months",
      description: "Special conditions for the Gold loan plan.",
      color: "#FFD700",
    },
    {
      title: "Silver",
      loanAmount: "200,000,000",
      inquiryCost: "500,000",
      payDuration: "24 months",
      description: "Great value for the Silver loan plan.",
      color: "#C0C0C0",
    },
    {
      title: "Bronze",
      loanAmount: "100,000,000",
      inquiryCost: "300,000",
      payDuration: "12 months",
      description: "Affordable and fast with the Bronze plan.",
      color: "#CD7F32",
    },
  ];

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h2>Choose Loan Plan</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1.2}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
      >
        {plans.map((plan, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: 8,
                padding: 20,
                textAlign: "center",
                backgroundColor: "#fff",
              }}
            >
              <h3 style={{ color: plan.color }}>{plan.title}</h3>
              <p>Loan Amount: {plan.loanAmount}</p>
              <p>Inquiry Cost: {plan.inquiryCost}</p>
              <p>Duration: {plan.payDuration}</p>
              <p>{plan.description}</p>
              <button
                style={{
                  backgroundColor: plan.color,
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: 4,
                  cursor: "pointer",
                  marginTop: 10,
                }}
              >
                Apply Loan
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CSS سفارشی برای بزرگتر کردن اسلاید فعال */}
      <style jsx global>{`
        .swiper-slide {
          transition: transform 0.3s;
        }
        .swiper-slide-active {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}
