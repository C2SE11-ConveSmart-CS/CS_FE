/**
 * This code was generated by Builder.io.
 */
import React from 'react'
import styles from './ProfileCard.module.css'
import ProfileImage from './ProfileImage'
import UserInfo from './UserInfo'
import Divider from './Divider'
import MenuList from './MenuList'

const ProfileCard = () => {
  return (
    <section className={styles.profileCard}>
      <ProfileImage
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1815b0a7e53471ac32c7aae0676a85b02abeb113bbcab0dba8d37893fd30cb01?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
        alt="User profile"
      />
      <UserInfo name="Duc Giang" phone="0123456789" />
      <Divider />
      <Divider />
      <MenuList />
    </section>
  )
}

export default ProfileCard
