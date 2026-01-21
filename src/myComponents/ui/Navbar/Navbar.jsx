"use client"
import React from 'react'
import styles from './Navbar.module.css'
import Button from "@/myComponents/ui/Button/Button"

export default function Navbar({ isOpen, onClose }) {
    const navItems = [
        { label: 'Features' },
        { label: 'Create' },
        { label: 'For work' },
        { label: 'Learn' },
        { label: 'Pricing' },
        { label: 'About' },
    ];

    return (
        <>
            {/* Sidebar Backdrop */}
            <div
                className={`${styles['sidebar-backdrop']} ${isOpen ? styles['active'] : ''}`}
                onClick={onClose}
            ></div>

            {/* Sidebar Drawer */}
            <div className={`${styles['sidebar-drawer']} ${isOpen ? styles['open'] : ''}`}>
                <div className={styles['sidebar-header']}>
                    <button className={styles['close-btn']} onClick={onClose}>
                        <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.4355 6.62451L6.43555 18.6245" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.43555 6.62451L18.4355 18.6245" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className={styles['sidebar-content']}>
                    <ul className={styles['sidebar-nav']}>
                        {navItems.map((item, idx) => (
                            <li key={idx}>
                                <a href="#" onClick={onClose}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className={styles['sidebar-footer']}>
                        <Button variant="secondary" className={styles['sidebar-btn']}>Sign in</Button>
                        <Button variant="primary" className={styles['sidebar-btn']}>Try for free</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
