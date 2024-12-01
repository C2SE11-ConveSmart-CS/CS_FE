import React from 'react';
import styles from './ContactForm.module.css';

const formFields = [
  [
    { id: 'fullName', label: 'Full name', type: 'text' },
    { id: 'email', label: 'Email', type: 'email' }
  ],
  [
    { id: 'telephone', label: 'Telephone', type: 'tel' },
    { id: 'service', label: 'Service', type: 'text' }
  ],
  [
    { id: 'message', label: 'Message', type: 'textarea' }
  ]
];

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageColumn}>
          <div className={styles.imageContainer}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9792a4b639c5749846cd3a79ba64f1d80df3bde5b4eb0069d2e7b0d543d9dac9?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
              className={styles.backgroundImage}
              alt=""
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1249e5ef2978aacd05795a2068b234e885a19d2e473e37f2eba9908d4a8af6a4?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
              className={styles.foregroundImage}
              alt="Contact illustration"
            />
          </div>
        </div>
        
        <div className={styles.formColumn}>
          <div className={styles.formWrapper}>
            <div className={styles.headerText}>
              <h1 className={styles.title}>
                <span className={styles.accentText}>Contact</span> Us
              </h1>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Sed facilisis eleifend quam, non efficitur nisi mattis quis.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className={styles.formBox}>
              {formFields.map((group, groupIndex) => (
                <div key={groupIndex} className={styles.inputGroup}>
                  {group.map((field) => (
                    <div key={field.id} className={styles.inputWrapper}>
                      <label htmlFor={field.id} className={styles.label}>
                        {field.label}
                      </label>
                      {field.type === 'textarea' ? (
                        <textarea
                          id={field.id}
                          name={field.id}
                          className={styles.input}
                          rows={4}
                          aria-label={field.label}
                        />
                      ) : (
                        <input
                          type={field.type}
                          id={field.id}
                          name={field.id}
                          className={styles.input}
                          aria-label={field.label}
                        />
                      )}
                    </div>
                  ))}
                </div>
              ))}
              <button type="submit" className={styles.submitButton}>
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;