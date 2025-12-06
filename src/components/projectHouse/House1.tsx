// src/components/ProjectsCard.tsx
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import emailjs from "@emailjs/browser";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ProjectCard.css";


const PROJECT_TITLE = "The Sense";

const PROJECT_IMAGES = [
    "/images/house1/1.jpg",
    "/images/house1/2.jpeg",
    "/images/house1/3.jpg",
];

const UNITS = "50 distinct units";
const TENURE = "Leasehold";
const PRICE = "IDR 2.64B ($160K)*";
const HANDOVER = "Q4 2027";
const ROI = "15-16%";
const SIZES = "55.6 – 162.5 m²";

const House1: React.FC = () => {
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    // unique ID đảm bảo mỗi component có slider riêng
    const uniqueId = Math.random().toString(36).substring(2, 9);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !phone.trim()) return;

        setLoading(true);

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID_PROJECT,
                { project_name: PROJECT_TITLE, customer_name: name, customer_phone: phone },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setSent(true);
                setLoading(false);
                setTimeout(() => {
                    setShowForm(false);
                    setName("");
                    setPhone("");
                    setSent(false);
                }, 3000);
            })
            .catch(() => {
                alert("Fail, try again!");
                setLoading(false);
            });
    };

    return (
        <div className="project-card">
            <h1 className="project-title">{PROJECT_TITLE}</h1>

            {/* SLIDER */}
            <div className="image-slider-container">

                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                        nextEl: `.next-${uniqueId}`,
                        prevEl: `.prev-${uniqueId}`,
                    }}
                    pagination={{
                        el: `.pagination-${uniqueId}`,
                        clickable: true,
                    }}
                >
                    {PROJECT_IMAGES.map((img, i) => (
                        <SwiperSlide key={i}>
                            <img src={img} alt={`${PROJECT_TITLE} ${i + 1}`} className="project-image" />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="badges">
                    <span className="badge">{UNITS}</span>
                    <span className="badge leasehold">{TENURE}</span>
                </div>

                {/* Nút Prev/Next riêng từng component */}
                <div className={`swiper-button-prev prev-${uniqueId}`}>←</div>
                <div className={`swiper-button-next next-${uniqueId}`}>→</div>

                {/* Pagination riêng */}
                <div className={`swiper-pagination pagination-${uniqueId}`}></div>
            </div>

            {/* Info */}
            <div className="info-box">
                <div className="info-row">
                    <div className="info-item">
                        <span className="label">Starting price</span>
                        <span className="value">{PRICE}</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Handover</span>
                        <span className="value">{HANDOVER}</span>
                    </div>
                </div>

                <div className="info-row">
                    <div className="info-item">
                        <span className="label">Annual ROI</span>
                        <span className="value highlight">{ROI}</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Unit sizes</span>
                        <span className="value">{SIZES}</span>
                    </div>
                </div>

                <p className="note">*All payments in PayOS</p>

                <button className="cta-button" onClick={() => setShowForm(true)}>
                    Get the details
                </button>
            </div>

            {/* FORM POPUP */}
            {showForm && (
                <div className="form-overlay" onClick={() => setShowForm(false)}>
                    <div className="form-popup" onClick={(e) => e.stopPropagation()}>
                        <div className="form-header">
                            <h3>{PROJECT_TITLE}</h3>
                            <button className="close-btn" onClick={() => setShowForm(false)}>×</button>
                        </div>

                        <div className="form-content">
                            {sent ? (
                                <div className="success-message">
                                    <h3>Thanks!</h3>
                                    <p>We will contact in 5min.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        placeholder="Full name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />

                                    <input
                                        type="tel"
                                        placeholder="Phone number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />

                                    <button type="submit" disabled={loading}>
                                        {loading ? "Sending..." : "Sending"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default House1;
