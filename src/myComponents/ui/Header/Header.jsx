"use client"
import React, { useState } from 'react'
import styles from './Header.module.css'
import Image from 'next/image'
import Button from "@/myComponents/ui/Button/Button"
import Navbar from "@/myComponents/ui/Navbar/Navbar"

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    return (
        <div className={styles['header-outer']}>
            <Navbar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            <div className={styles['header-left']}>

                <div className={styles['logo']}>
                    <Image src="/assets/icons/logo.svg" alt="clipchamp-logo"
                        height={40}
                        width={140}
                    />
                </div>

                <div className={styles['nav-links']}>
                    <ul>
                        <li className={styles['nav-item']}><a href="#">Features
                            <svg className={styles['arrow-down']} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.43555 9.62451L12.4355 15.6245L18.4355 9.62451" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                            <div className={styles['dropdown-menu']}>
                                <ul>
                                    <li><a href="#">What's new</a></li>
                                    <li><a href="#">Video editor</a></li>
                                    <li><a href="#">AI video editing</a></li>
                                    <li><a href="#">Camera recorder</a></li>
                                    <li><a href="#">Screen recorder</a></li>
                                    <li><a href="#">AI text to speech</a></li>
                                    <li><a href="#">Voice and audio recorder</a></li>
                                    <li><a href="#">AI subtitle generator</a></li>
                                    <li><a href="#">Green screen</a></li>
                                    <li><a href="#">Video trimmer</a></li>
                                    <li><a href="#">Video cropper</a></li>
                                    <li><a href="#">Video resizer</a></li>
                                    <li><a href="#">Video overlay</a></li>
                                    <li><a href="#">Video enhancer</a></li>
                                    <li><a href="#">AI audio enhancer</a></li>
                                    <li><a href="#">Brand kit tool</a></li>
                                    <li><a href="#">Stickers and emojis</a></li>
                                </ul>
                            </div>
                        </li>

                        <li className={styles['nav-item']}><a href="#">Create
                            <svg className={styles['arrow-down']} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.43555 9.62451L12.4355 15.6245L18.4355 9.62451" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                            <div className={styles['dropdown-menu']}>
                                <ul>
                                    <li><a href="#">YouTube videos</a></li>
                                    <li><a href="#">YouTube Shorts</a></li>
                                    <li><a href="#">TikTok videos</a></li>
                                    <li><a href="#">Instagram videos</a></li>
                                    <li><a href="#">Instagram Reels</a></li>
                                    <li><a href="#">Facebook video ads</a></li>
                                    <li><a href="#">Promo videos</a></li>
                                    <li><a href="#">Demo videos</a></li>
                                    <li><a href="#">Gaming videos</a></li>
                                    <li><a href="#">Meme videos</a></li>
                                    <li><a href="#">Slideshow videos</a></li>
                                    <li><a href="#">Video templates</a></li>
                                    <li><a href="#">YouTube templates</a></li>
                                    <li><a href="#">Content library</a></li>
                                </ul>
                            </div>
                        </li>

                        <li className={styles['nav-item']}><a href="#">For work
                            <svg className={styles['arrow-down']} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.43555 9.62451L12.4355 15.6245L18.4355 9.62451" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                            <div className={styles['dropdown-menu']}>
                                <ul>
                                    <li><a href="#">Clipchamp for work</a></li>
                                    <li><a href="#">Clipchamp for education</a></li>
                                </ul>
                            </div>
                        </li>

                        <li className={styles['nav-item']}><a href="#">Learn
                            <svg className={styles['arrow-down']} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.43555 9.62451L12.4355 15.6245L18.4355 9.62451" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                            <div className={styles['dropdown-menu']}>
                                <ul>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Training center</a></li>
                                    <li><a href="#">Clipchamp community</a></li>
                                    <li><a href="#">Support</a></li>
                                </ul>
                            </div>
                        </li>

                        <li><a href="#">Pricing</a></li>

                        <li className={styles['nav-item']}><a href="#">About
                            <svg className={styles['arrow-down']} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.43555 9.62451L12.4355 15.6245L18.4355 9.62451" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                            <div className={styles['dropdown-menu']}>
                                <ul>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Our products</a></li>
                                    <li><a href="#">Work with us</a></li>
                                </ul>
                            </div>
                        </li>

                    </ul>
                </div>

            </div>

            <div className={styles['header-right']}>
                <Button variant="secondary">Sign In</Button>
                <Button variant="primary">Try for free</Button>

                <div className={styles['menu-icon-container']} onClick={toggleSidebar}>
                    <svg className={styles['menu-icon']} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.43555 12.6245H21.4355" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3.43555 6.62451H21.4355" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3.43555 18.6245H21.4355" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
