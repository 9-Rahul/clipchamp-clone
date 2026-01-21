import React from "react";
import styles from "./Button.module.css";

export default function Button({
    children,
    variant = "primary",
    className = "",
    ...props
}) {
    // Handle composite variants like "secondary btn-create-vid"
    // "btn-" + "secondary btn-create-vid" -> "btn-secondary btn-create-vid"
    const variantClasses = `btn-${variant}`
        .split(' ')
        .map(cls => styles[cls] || cls)
        .join(' ');

    return (
        <button
            className={`${styles.btn} ${variantClasses} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
