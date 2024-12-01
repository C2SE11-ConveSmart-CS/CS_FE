import React from 'react'
import { ServiceCard } from './ServiceCard'
import styles from './Services.module.css'

const servicesData = [
  {
    title: 'Tích hợp Đa nền tảng',
    description:
      '"Tích hợp Đa nền tảng giúp bạn kết nối dữ liệu và đồng bộ công việc trên mọi thiết bị. Quản lý dễ dàng, làm việc hiệu quả, bảo mật tối ưu. Tất cả chỉ trong một cú nhấp chuột!"',
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/5af29bbd14b5b358d29e3efd5532c78d9ad5c112818cd326f691e0ce6ba3c579?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    imageAlt: 'Multi-platform integration illustration',
    variant: 'accent',
  },
  {
    title: 'Thống kế số liệu',
    description:
      '"Chức năng Thống kê Số liệu giúp bạn dễ dàng thu thập, phân tích và hiển thị dữ liệu một cách trực quan. Nhờ đó, bạn có thể theo dõi hiệu quả công việc và đưa ra quyết định thông minh, nhanh chóng."',
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/8d3090d91b2541d50124342af624da2006032573fafebafabb04b31312b35809?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    imageAlt: 'Statistics analysis illustration',
  },
  {
    title: 'Chatbot',
    description: '"Chức năng Chatbot giúp bạn tự động hóa giao tiếp với khách hàng 24/7. Chatbot trả lời nhanh chóng, chính xác, giải quyết các câu hỏi thường gặp và hỗ trợ người dùng ngay lập tức, nâng cao trải nghiệm khách hàng và tiết kiệm thời gian cho bạn."',
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/cb62a247ea2e891dedd93885cf583d8c2a4f1f631b6566fccffd5902a0fe4bba?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    imageAlt: 'Chatbot support illustration',
  },
  {
    title: 'Phân tích cảm xúc tin nhắn',
    description:
      '"Chức năng Phân tích Cảm xúc Tin nhắn giúp bạn hiểu rõ hơn về cảm xúc của người gửi thông qua từng tin nhắn. Tính năng này tự động nhận diện cảm xúc tích cực, tiêu cực hay trung lập, giúp bạn quản lý cuộc trò chuyện một cách thông minh và hiệu quả."',
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/421601e64baa9c978a32bcd576ea68e7efbe24e329e238fe5890888d48929b7a?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    imageAlt: 'Message sentiment analysis illustration',
  },
]


export const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>Dịch vụ của chúng tôi</h2>
      <div className={styles.servicesGrid}>
        <div className={styles.servicesRow}>
          {servicesData.slice(0, 2).map((service, index) => (
            <div key={index} className={styles.serviceColumn}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
        <div className={styles.servicesRow}>
          {servicesData.slice(2, 4).map((service, index) => (
            <div key={index} className={styles.serviceColumn}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
