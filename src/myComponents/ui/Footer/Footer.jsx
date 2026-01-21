"use client"
import React, { useState } from 'react'
import styles from "./Footer.module.css"

export default function Footer() {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        if (openSection === section) {
            setOpenSection(null);
        } else {
            setOpenSection(section);
        }
    };

    return (
        <div className={styles['footer-outer']}>
            <div className={styles['footer-wrapper']}>
                <div className={styles['footer-container']}>
                    {/* Column 1: Create */}
                    <div className={`${styles['footer-col']} ${openSection === 'create' ? styles.open : ''}`}>
                        <div className={styles['col-header']} onClick={() => toggleSection('create')}>
                            <p>Create</p>
                            <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" fill="currentColor" />
                            </svg>
                        </div>
                        <ul>
                            <li><a href="#">Slideshow videos</a></li>
                            <li><a href="#">Promo videos</a></li>
                            <li><a href="#">Demo videos</a></li>
                            <li><a href="#">Video memes</a></li>
                            <li><a href="#">Video montages</a></li>
                            <li><a href="#">YouTube videos</a></li>
                            <li><a href="#">Instagram videos</a></li>
                            <li><a href="#">Instagram Reels</a></li>
                            <li><a href="#">TikTok videos</a></li>
                            <li><a href="#">Facebook video ads</a></li>
                        </ul>
                    </div>

                    {/* Column 2: Tools */}
                    <div className={`${styles['footer-col']} ${openSection === 'tools' ? styles.open : ''}`}>
                        <div className={styles['col-header']} onClick={() => toggleSection('tools')}>
                            <p>Tools</p>
                            <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" fill="currentColor" />
                            </svg>
                        </div>
                        <ul>
                            <li><a href="#">Edit video</a></li>
                            <li><a href="#">Rotate video</a></li>
                            <li><a href="#">Trim video</a></li>
                            <li><a href="#">Crop video</a></li>
                            <li><a href="#">Record webcam</a></li>
                            <li><a href="#">Record screen</a></li>
                            <li><a href="#">AI subtitle generator</a></li>
                            <li><a href="#">AI voiceover generator</a></li>
                            <li><a href="#">Add text to video</a></li>
                            <li><a href="#">Voice and audio recorder</a></li>
                            <li><a href="#">GIF maker</a></li>
                            <li><a href="#">Remove audio from video</a></li>
                        </ul>
                    </div>

                    {/* Column 3: About & Learn (Stacked) */}
                    <div className={styles['footer-col-nested']}>
                        <div className={`${styles['footer-section']} ${openSection === 'about' ? styles.open : ''}`}>
                            <div className={styles['col-header']} onClick={() => toggleSection('about')}>
                                <p>About</p>
                                <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" fill="currentColor" />
                                </svg>
                            </div>
                            <ul>
                                <li><a href="#">Products</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Work with us</a></li>
                            </ul>
                        </div>
                        <div className={`${styles['footer-section']} ${openSection === 'learn' ? styles.open : ''}`}>
                            <div className={styles['col-header']} onClick={() => toggleSection('learn')}>
                                <p>Learn</p>
                                <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" fill="currentColor" />
                                </svg>
                            </div>
                            <ul>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Video marketing</a></li>
                                <li><a href="#">Video editing</a></li>
                                <li><a href="#">Training center</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 4: Apps & Support (Stacked) */}
                    <div className={styles['footer-col-nested']}>
                        <div className={`${styles['footer-section']} ${openSection === 'apps' ? styles.open : ''}`}>
                            <div className={styles['col-header']} onClick={() => toggleSection('apps')}>
                                <p>Video editing apps</p>
                                <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" fill="currentColor" />
                                </svg>
                            </div>
                            <ul>
                                <li><a href="#">Clipchamp video editor</a></li>
                                <li><a href="#">Microsoft Clipchamp for Windows</a></li>
                                <li><a href="#">Clipchamp for work</a></li>
                                <li><a href="#">Clipchamp for education</a></li>
                                <li><a href="#">Microsoft Clipchamp iOS</a></li>
                            </ul>
                        </div>
                        <div className={`${styles['footer-section']} ${openSection === 'support' ? styles.open : ''}`}>
                            <div className={styles['col-header']} onClick={() => toggleSection('support')}>
                                <p>Support</p>
                                <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" fill="currentColor" />
                                </svg>
                            </div>
                            <ul>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
