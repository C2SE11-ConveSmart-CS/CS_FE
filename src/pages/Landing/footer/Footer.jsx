import React from 'react'
import { SocialIcon } from './SocialIcon'
import { QuickLink } from './QuickLink'
import { ContactItem } from './ContactItem'
import styles from './Footer.module.css'

const socialIcons = [
  {
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b0a777b2b48cdceaaa25cdbe2270d073bb2185c3816122958ab788d54fe8fb19?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    alt: 'YouTube',
  },
  {
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fb8647e63731e45d6a4167ef369b90dc8a9d4d082e0ec7720e411345fc55a4ad?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    alt: 'Twitter',
  },
  {
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d3779658fd6dd77a4d2e5e13825519b6afcfbcdd5f48b188fca20045ba47baf5?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    alt: 'Instagram',
  },
  {
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/129a4d6ab1b16a966cf94da1230dc0aca7dafb02ea531a33500e8c5da0aa3c4e?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    alt: 'Facebook',
  },
]

const quickLinks = ['About Us', 'Service', 'Pricing', 'Testimonial']

const contactInfo = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c9b21dc49fdd11a6f2307193552f719504695b8b3f3f31c9d02ddbc20af13f92?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    text: 'hello@website.com',
    alt: 'Email icon',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/13deb0c06addb6d89e12a18b383702305756d667cf2ec92a356eab5668aa332a?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    text: 'Riverside Building, County Hall, London SE1 7PB, United Kingdom',
    alt: 'Location icon',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6984634a77ee1b31ceb988e60c5807be95ec8d6a9863871814668aa9071462cc?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    text: '+02 5421234560',
    alt: 'Phone icon',
  },
]

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.brandSection}>
        <div className={styles.brandContent}>
          <h2 className={styles.brandName}>CONVESMART</h2>
          <p className={styles.brandDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
            amet neque tortor.
          </p>
        </div>
        <div className={styles.socialIcons}>
          {socialIcons.map((icon, index) => (
            <SocialIcon key={index} {...icon} />
          ))}
        </div>
      </div>

      <nav
        className={styles.quickLinksSection}
        aria-label="Quick links navigation"
      >
        <h3 className={styles.sectionTitle}>Quick Links</h3>
        <div className={styles.quickLinksList}>
          {quickLinks.map((link, index) => (
            <QuickLink key={index} text={link} />
          ))}
        </div>
      </nav>

      <div className={styles.contactSection}>
        <h3 className={styles.sectionTitle}>Contact Us</h3>
        <div className={styles.contactList}>
          {contactInfo.map((item, index) => (
            <ContactItem key={index} {...item} />
          ))}
        </div>
      </div>

      <div className={styles.newsletterSection}>
        <h3 className={styles.sectionTitle}>Newsletter</h3>
        <form
          className={styles.subscribeForm}
          onSubmit={e => e.preventDefault()}
        >
          <label htmlFor="emailInput" className={styles.visuallyHidden}>
            Enter your email
          </label>
          <input
            id="emailInput"
            type="email"
            className={styles.emailInput}
            placeholder="Enter your email"
            aria-label="Enter your email"
          />
          <button type="submit" className={styles.subscribeButton}>
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  )
}

export default Footer
