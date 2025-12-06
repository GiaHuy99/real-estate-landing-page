// FullImageOverlaySection.tsx
import React from "react";
import "./InvestSection.css";

const InvestSection: React.FC = () => {
    return (
        <section className="full-image-overlay-section">
            {/* Ảnh nền full */}
            <div className="background-image-wrapper">
                <img
                    src="/images/invest/hinh-nen-noi-that-dep-full-hd-so-43-0.jpg"
                    alt="Việt Nam tuyệt đẹp"
                    className="background-image"
                />
                <div className="overlay"></div>
            </div>

            {/* Nội dung đè lên ảnh */}
            <div className="content-container">
                {/* Bên trái: Title + Text */}
                <div className="text-content">
                    <h1 className="main-title">
                        Sở hữu bất động sản<br />
                        Định nghĩa lại phong cách sống
                    </h1>
                    <p className="main-description">
                        Nơi mỗi mét vuông đều là một tác phẩm nghệ thuật.
                        Nơi kiến trúc hòa quyện cùng thiên nhiên, nội thất tinh tế đến từng chi tiết,
                        và tiện ích đẳng cấp 5 sao chỉ dành riêng cho chủ nhân thượng lưu.
                        Đây không chỉ là nơi ở — đây là tuyên ngôn về vị thế và gu thẩm mỹ của bạn.
                    </p>
                    {/*<button className="cta-button">Bắt đầu hành trình →</button>*/}
                </div>

                {/* Bên phải: 4 khung nổi */}
                <div className="stats-grid">
                    <div className="stat-box">
                        <h3>500+</h3>
                        <p>Khách hàng thượng lưu</p>
                    </div>
                    <div className="stat-box">
                        <h3>98%</h3>
                        <p>Hài lòng tuyệt đối</p>
                    </div>
                    <div className="stat-box">
                        <h3>30+</h3>
                        <p>Dự án bàn giao đúng tiến độ</p>
                    </div>
                    <div className="stat-box">
                        <h3>5★</h3>
                        <p>Tiêu chuẩn vận hành quốc tế</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InvestSection;