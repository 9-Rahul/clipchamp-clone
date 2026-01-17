import React from 'react'
import Image from 'next/image'
import "./Testimonials.css"
export default function Testimonials() {
    return (
        <div className="testimonials-outer">

            <h2>Join millions of everyday video editors</h2>

            <div className="testimonials-grid">
                {/* Testimonial 1 */}
                <div className="testimonial-item">
                    <div className="user-info">
                        <div className="user-avatar monika">M</div>
                        <div className="user-details">
                            <h3>Monika</h3>
                            <span>Trustpilot review</span>
                        </div>
                    </div>
                    <div className="quote-bubble">
                        <p>I never expected that a free version would have all these features. I was amazed and honestly grateful for having a free, well-featured, and user-friendly video editing site. I loved every bit of experience while using it. Clipchamp video editor is my primary video editing software for my social media content.</p>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className="testimonial-item">
                    <div className="user-info">
                        <div className="user-avatar alex">
                            <Image src="/assets/images/user-alex.png" alt="JustAlexHalford" width={48} height={48} />
                        </div>
                        <div className="user-details">
                            <h3>JustAlexHalford</h3>
                            <span>YouTuber</span>
                        </div>
                    </div>
                    <div className="quote-bubble">
                        <p>I love how easy it is to use Clipchamp video editor online. It really has opened the door for anyone to create great video, no matter your experience or skill. Whether you're an aspiring creator or a seasoned vlogger, Clipchamp has got you covered with unique features and unlimited exports.</p>
                    </div>
                </div>
            </div>

            <div className="social-proof-badges">
                {/* Facebook Badge */}
                <div className="badge">
                    <div className="badge-logo">
                        <Image src="/assets/icons/fb-logo.svg" alt="Facebook" width={146} height={32} />
                    </div>
                    <div className="badge-rating">
                        <Image src="/assets/icons/blue-stars.svg" alt="Facebook" width={140} height={32} />
                        <span className="review-count">4.8 — 9.5k+ reviews</span>
                    </div>
                </div>

                {/* Product Hunt Badge */}
                <div className="badge">
                    <div className="badge-logo">
                        <Image src="/assets/icons/product-hunt-logo.svg" alt="Facebook" width={146} height={32} />
                    </div>
                    <div className="badge-rating">
                        <Image src="/assets/icons/orange-stars.svg" alt="Facebook" width={140} height={32} />
                        <span className="review-count">4.8 — 9.5k+ reviews</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
