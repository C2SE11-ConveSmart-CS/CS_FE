import React, { useContext, useState } from 'react';
import styles from './ChatNotes.module.css';
import { ChatContext } from '../../contexts/ChatsContext'; // Import context

const initialNotes = [
  {
    id: 1,
    author: 'Sam Sam',
    time: '15:22',
    content: 'Địa chỉ thứ 2: Xã Cao Sơn, Huyện Bạch Thông, Bắc Kạn',
  },
  {
    id: 2,
    author: 'Jasmin',
    time: '26/09',
    content: 'Khách cần chăm sóc kỹ!!!',
  },
];

function ChatNotes() {
  const { selectedCustomer } = useContext(ChatContext); // Lấy thông tin khách hàng
  const [notes, setNotes] = useState(initialNotes); // Lưu trữ danh sách ghi chú
  const [newNote, setNewNote] = useState(''); // Lưu trữ nội dung ghi chú mới

  // Nếu không có khách hàng được chọn, không hiển thị
  if (!selectedCustomer) return null;

  // Xử lý thêm ghi chú khi nhấn Enter
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && newNote.trim()) {
      e.preventDefault(); // Ngăn chặn hành vi mặc định của phím Enter

      const newNoteObj = {
        id: notes.length + 1, // ID mới
        author: 'Bạn', // Tạm thời gán "Bạn" làm tác giả
        time: new Date().toLocaleTimeString('vi-VN', {
          hour: '2-digit',
          minute: '2-digit',
        }),
        content: newNote.trim(),
      };

      setNotes([newNoteObj, ...notes]); // Thêm ghi chú mới vào đầu danh sách
      setNewNote(''); // Xóa nội dung nhập sau khi thêm
    }
  };

  return (
    <section className={styles.chatNotes}>
      <header className={styles.notesHeader}>
        <h3 className={styles.notesTitle}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f484a34558a6a2d06ce76db94c70cf645271f57debb2e170ebbf2e0a50df95b?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
            alt=""
            className={styles.notesIcon}
          />
          Ghi chú ({notes.length})
        </h3>
        <button className={styles.addNoteButton}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d3a49b4eb005064b0c26b8f024eed539c640d94cfaf382ec26d26e877788e95?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
            alt="Add note"
            className={styles.addIcon}
          />
        </button>
      </header>
      <div className={styles.notesList}>
        {notes.map((note) => (
          <div key={note.id} className={styles.noteItem}>
            <div className={styles.noteHeader}>
              <span className={styles.noteAuthor}>{note.author}</span>
              <span className={styles.noteTime}>{note.time}</span>
            </div>
            <p className={styles.noteContent}>{note.content}</p>
          </div>
        ))}
      </div>
      <textarea
        className={styles.newNoteInput}
        placeholder="Nhập ghi chú (Enter để gửi)"
        aria-label="Enter a new note"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)} // Cập nhật giá trị nhập
        onKeyDown={handleKeyDown} // Xử lý khi nhấn phím
      />
    </section>
  );
}

export default ChatNotes;
