import React from 'react';

export default function FooterColumn({ title, links, isOpen, onToggle, styles, className = '' }) {
    return (
        <div className={`${styles['footer-col']} ${isOpen ? styles.open : ''} ${className}`}>
            <div className={styles['col-header']} onClick={onToggle}>
                <p>{title}</p>
                <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" fill="currentColor" />
                </svg>
            </div>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.href}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
