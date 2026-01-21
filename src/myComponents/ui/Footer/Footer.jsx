"use client"
import React, { useState } from 'react'
import styles from "./Footer.module.css"
import FooterColumn from './FooterColumn'

const footerSections = {
    create: {
        title: 'Create',
        links: [
            { label: 'Slideshow videos', href: '#' },
            { label: 'Promo videos', href: '#' },
            { label: 'Demo videos', href: '#' },
            { label: 'Video memes', href: '#' },
            { label: 'Video montages', href: '#' },
            { label: 'YouTube videos', href: '#' },
            { label: 'Instagram videos', href: '#' },
            { label: 'Instagram Reels', href: '#' },
            { label: 'TikTok videos', href: '#' },
            { label: 'Facebook video ads', href: '#' },
        ]
    },
    tools: {
        title: 'Tools',
        links: [
            { label: 'Edit video', href: '#' },
            { label: 'Rotate video', href: '#' },
            { label: 'Trim video', href: '#' },
            { label: 'Crop video', href: '#' },
            { label: 'Record webcam', href: '#' },
            { label: 'Record screen', href: '#' },
            { label: 'AI subtitle generator', href: '#' },
            { label: 'AI voiceover generator', href: '#' },
            { label: 'Add text to video', href: '#' },
            { label: 'Voice and audio recorder', href: '#' },
            { label: 'GIF maker', href: '#' },
            { label: 'Remove audio from video', href: '#' },
        ]
    },
    about: {
        title: 'About',
        links: [
            { label: 'Products', href: '#' },
            { label: 'Pricing', href: '#' },
            { label: 'Company', href: '#' },
            { label: 'Work with us', href: '#' },
        ]
    },
    learn: {
        title: 'Learn',
        links: [
            { label: 'Blog', href: '#' },
            { label: 'Video marketing', href: '#' },
            { label: 'Video editing', href: '#' },
            { label: 'Training center', href: '#' },
        ]
    },
    apps: {
        title: 'Video editing apps',
        links: [
            { label: 'Clipchamp video editor', href: '#' },
            { label: 'Microsoft Clipchamp for Windows', href: '#' },
            { label: 'Clipchamp for work', href: '#' },
            { label: 'Clipchamp for education', href: '#' },
            { label: 'Microsoft Clipchamp iOS', href: '#' },
        ]
    },
    support: {
        title: 'Support',
        links: [
            { label: 'Help', href: '#' },
            { label: 'Contact', href: '#' },
        ]
    }
}

export default function Footer() {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(prev => prev === section ? null : section);
    };

    return (
        <div className={styles['footer-outer']}>
            <div className={styles['footer-wrapper']}>
                <div className={styles['footer-container']}>
                    <FooterColumn
                        {...footerSections.create}
                        isOpen={openSection === 'create'}
                        onToggle={() => toggleSection('create')}
                        styles={styles}
                    />

                    <FooterColumn
                        {...footerSections.tools}
                        isOpen={openSection === 'tools'}
                        onToggle={() => toggleSection('tools')}
                        styles={styles}
                    />

                    <div className={styles['footer-col-nested']}>
                        <FooterColumn
                            {...footerSections.about}
                            className={styles['footer-section']}
                            isOpen={openSection === 'about'}
                            onToggle={() => toggleSection('about')}
                            styles={styles}
                        />
                        <FooterColumn
                            {...footerSections.learn}
                            className={styles['footer-section']}
                            isOpen={openSection === 'learn'}
                            onToggle={() => toggleSection('learn')}
                            styles={styles}
                        />
                    </div>

                    <div className={styles['footer-col-nested']}>
                        <FooterColumn
                            {...footerSections.apps}
                            className={styles['footer-section']}
                            isOpen={openSection === 'apps'}
                            onToggle={() => toggleSection('apps')}
                            styles={styles}
                        />
                        <FooterColumn
                            {...footerSections.support}
                            className={styles['footer-section']}
                            isOpen={openSection === 'support'}
                            onToggle={() => toggleSection('support')}
                            styles={styles}
                        />
                    </div>
                </div>

                <div className={styles['footer-two']}>
                    <div className={styles['footer-row']}>
                        <div className={styles['language-selector']}>
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                className='lang-icon-select'
                            >
                                <path
                                    d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <select className={styles['lang-select']}>
                                <option value="en">English</option>
                                <option value="es">Español</option>
                                <option value="fr">Français</option>
                                <option value="ja">日本語</option>
                            </select>
                            <svg className={styles['select-chevron']} viewBox="0 0 24 24" fill="none" width="16" height="16">
                                <path d="M7 10l5 5 5-5H7z" fill="currentColor" />
                            </svg>
                        </div>

                        <div className={styles['social-links']}>
                            <a href="#" className={`${styles['social-icon']} ${styles.youtube}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                            <a href="#" className={`${styles['social-icon']} ${styles.x}`}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                                </svg>
                            </a>
                            <a href="#" className={`${styles['social-icon']} ${styles.instagram}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.058-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4.162 4.162 0 1 1 0-8.324 4.162 4.162 0 0 1 0 8.324zM18.406 4.137a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
                                </svg>
                            </a>
                            <a href="#" className={`${styles['social-icon']} ${styles.fb}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                                </svg>
                            </a>
                            <a href="#" className={`${styles['social-icon']} ${styles.linkedin}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                                </svg>
                            </a>
                            <a href="#" className={`${styles['social-icon']} ${styles.tiktok}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12.525.02c1.31-.031 2.61.01 3.91-.02.08 1.53.63 3.01 1.62 4.14.94 1.05 2.22 1.76 3.59 2.04v3.96c-1.44-.06-2.83-.56-4-1.44v6.52c-.04 1.34-.33 2.66-.86 3.88-.67 1.5-1.78 2.81-3.17 3.67-1.39.86-3.01 1.33-4.66 1.36-1.63.02-3.23-.42-4.61-1.27-1.38-.85-2.48-2.1-3.17-3.56-.69-1.46-.94-3.09-.72-4.7.22-1.61.94-3.11 2.07-4.3 1.14-1.2 2.62-2.02 4.23-2.36 1.56-.34 3.1-.2 4.54.41v4.06c-.84-.36-1.75-.52-2.67-.44-1 .09-1.95.53-2.65 1.25-.71.72-1.13 1.69-1.18 2.7-.05 1.01.27 2.01.91 2.78.64.78 1.57 1.28 2.58 1.42 1.01.14 2.04-.1 2.9-.68.86-.58 1.47-1.47 1.71-2.49.24-1.02.16-2.1-.21-3.06l.01-11.4z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className={`${styles['footer-row']} ${styles.two}`}>
                        <div className={styles['legal-left']}>
                            <img src="/assets/icons/microsoft-logo.svg" alt="Microsoft" className={styles['ms-logo']} />
                            <span className={styles['copyright']}>© 2026 Clipchamp</span>
                        </div>
                        <div className={styles['legal-right']}>
                            <a href="#">Terms</a>
                            <a href="#">Privacy and cookies</a>
                            <a href="#">Consumer Health Data Privacy Policy</a>
                            <a href="#" className={styles['privacy-choice']}>
                                <img className={styles['privacy-choice-icon']} src="/assets/icons/privacy-choice.svg" alt="Privacy Choice" height={30} width={30} />
                                <span className={styles['privacy-choice-text']}>Your Privacy Choices</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles['footer-three']}>
                    <div className={styles['footer-bottom-text']}>
                        <p className={styles['footer-bottom-text-p1']}>Clipchamp is created worldwide, but we're headquartered in Brisbane/Meanjin,
                            Australia, on the traditional lands of the Turrbal and Yuggera Peoples.</p>
                        <p className={styles['footer-bottom-text-p2']}>We acknowledge the traditional custodians of country,
                            and pay our respects to Elders past, present and emerging.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
