import React from 'react'
import './Header.css'
import Image from 'next/image'
import Button from "@/myComponents/ui/Button/Button"

export default function Header() {
    return (
        <div className='header-outer'>
            <div className="header-left">

                <div className="logo">
                    <Image src="/assets/icons/logo.svg" alt="clipchamp-logo"
                        height={40}
                        width={140}
                    />
                </div>

                <div className="nav-links">
                    <ul>
                        <li><a href="#">Features

                            <svg
                                className="arrow-down"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.43555 9.62451L12.4355 15.6245L18.4355 9.62451"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>


                        </a>  </li>


                        <li><a href="#">Create

                            <svg
                                className="arrow-down"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.43555 9.62451L12.4355 15.6245L18.4355 9.62451"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>


                        </a>   </li>


                        <li><a href="#">For work

                            <svg
                                className="arrow-down"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.43555 9.62451L12.4355 15.6245L18.4355 9.62451"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>


                        </a> </li>


                        <li><a href="#">Learn

                            <svg
                                className="arrow-down"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.43555 9.62451L12.4355 15.6245L18.4355 9.62451"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>


                        </a>  </li>


                        <li><a href="#">Pricing </a> </li>

                        <li><a href="#">About

                            <svg
                                className="arrow-down"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.43555 9.62451L12.4355 15.6245L18.4355 9.62451"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>


                        </a>  </li>

                    </ul>
                </div>

            </div>

            <div className="header-right">
                <Button variant="secondary">Sign In</Button>
                <Button variant="primary">Try for free</Button>

                <Image
                    className='menu-icon'
                    src="/assets/icons/menu.svg"
                    alt="menu icon"
                    height={32}
                    width={32}
                />
                {/* <Button variant="secondary btn-create-vid">Create Video</Button> */}
            </div>
        </div>
    )
}
