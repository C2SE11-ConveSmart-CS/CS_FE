import React from 'react'
import styles from './FaqSection.module.css'
import { FaqCard } from './FaqCard'
import { faqItems } from './FaqData'

export const FaqSection = () => {
  const leftColumnItems = faqItems.slice(0, 3)
  const rightColumnItems = faqItems.slice(3)

  return (
    <section className={styles.faqSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <span className={styles.highlightedText}>Câu hỏi</span> thường gặp
        </h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          pharetra arcu at mi maximus, id placerat turpis fringilla. Vivamus
          fringilla sem scelerisque auctor interdum.
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.columns}>
          <div className={styles.column}>
            {leftColumnItems.map(item => (
              <FaqCard
                key={item.id}
                question={item.question}
                answer={item.answer}
                iconSrc={item.iconSrc}
                isHighlighted={item.isHighlighted}
              />
            ))}
          </div>

          <div className={`${styles.column} ${styles.columnRight}`}>
            {rightColumnItems.map(item => (
              <FaqCard
                key={item.id}
                question={item.question}
                iconSrc={item.iconSrc}
                isHighlighted={item.isHighlighted}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
