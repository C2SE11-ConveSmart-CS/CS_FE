import React from 'react';
import styles from './ChatInterface.module.css';
import ChatSidebar from './ChatSidebar';
import ChatMain from './ChatMain';
import ChatInfo from './ChatInfo';
import Layout from '../../components/Layout/Layout'; // Import Layout

function ChatInterface() {
  return (
    <Layout>
      <div className={styles.container}> 
        {/* Bố trí phần chính của giao diện chat */}
        <div className={styles.chatContent}>
          <ChatSidebar className={styles.chatSidebar} />
          <ChatMain className={styles.chatMain} />
          <ChatInfo className={styles.chatInfo} />
        </div>
      </div>
    </Layout>
  );
}

export default ChatInterface;
