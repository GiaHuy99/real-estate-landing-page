import { MapPin, Facebook, Mail, Phone } from "lucide-react";
import React from "react";
import "./Footer.css";

export default function Footer() {
    const lat = 10.7731250789515;
    const lng = 106.66987705413209;

    return (
        <footer className="footer">
            <div className="footer-content">

                {/* Contact Info */}
                <div className="footer-info">
                    <p>
                        <a
                            href={`https://www.google.com/maps?q=${lat},${lng}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            <MapPin size={18} /> 11 Sư Vạn Hạnh, Phường 12, Quận 10, TP.HCM
                        </a>
                    </p>

                    <p>
                        <a
                            href="https://www.facebook.com/profile.php?id=100073975727341&locale=vi_VN"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            <Facebook size={18} /> Facebook
                        </a>
                    </p>

                    <p>
                        <a href="tel:0984768713" className="footer-link">
                            <Phone size={18} /> Zalo: 0984768725
                        </a>
                    </p>

                    <p>
                        <a
                            href="mailto:giahuytran13072002@gmail.com"
                            className="footer-link"
                        >
                            <Mail size={18} /> nunu@gmail.com
                        </a>
                    </p>
                </div>

                {/* Big Name */}
                <h1 className="footer-name">NUNU</h1>
            </div>
        </footer>
    );
}
