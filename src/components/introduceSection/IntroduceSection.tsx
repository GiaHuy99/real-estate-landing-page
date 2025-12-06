import React from "react";
import "./IntroduceSection.css";

const IntroduceSection: React.FC = () => {
    return (
        <section className="image-text-section">
            <div className="image-container">
                <img
                    src="/images/introduce/photo-1583417319070-4a69db38a482.jpeg"
                    alt="Section Background"
                    className="section-image"
                />
                <div className="text-overlay">
                    <h2 className="overlay-title">
                        Discover the Future with DuongThanhHuy
                    </h2>
                    <p className="overlay-subtitle">
                        A perfect blend of modernity and culture in Vietnam
                    </p>
                </div>
            </div>
        </section>
    );
};

export default IntroduceSection;
