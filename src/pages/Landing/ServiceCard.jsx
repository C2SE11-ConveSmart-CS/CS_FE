import React from 'react'
import styles from './Services.module.css'

export const ServiceCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  variant,
}) => {
  const cardClass =
    variant === 'accent' ? styles.serviceCardAccent : styles.serviceCard
  const titleClass =
    variant === 'accent' ? styles.serviceTitleLight : styles.serviceTitle
  const descriptionClass =
    variant === 'accent'
      ? styles.serviceDescriptionLight
      : styles.serviceDescription

  return (
    <div className={cardClass}>
      <div className={styles.serviceContent}>
        <h3 className={titleClass}>{title}</h3>
        <p className={descriptionClass}>{description}</p>
      </div>
      <img
        src={imageSrc}
        alt={imageAlt}
        className={styles.serviceImage}
        loading="lazy"
      />
    </div>
  )
}
