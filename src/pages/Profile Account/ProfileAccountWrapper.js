import styled from 'styled-components'
export const ProfileAccountWrapper = styled.div`
display: flex;
  justify-content: center; /* Căn giữa ngang */
  align-items: center; /* Căn giữa dọc */
  min-height: 100vh; /* Chiều cao tối thiểu là 100% của màn hình */
  background-color: #f5f5f5; /* Màu nền để tạo sự phân biệt */

  & .container {
    width: 700px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    display: flex;
    position: relative;
  }

  & .exit-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: #333;
  }

  & .exit-btn:hover {
    color: #ff0000;
  }

  & .sidebar {
    width: 200px;
    background-color: #f0f2f5;
    padding: 20px;
    border-right: none;
  }

  & .sidebar h2 {
    font-size: 18px;
    margin-bottom: 20px;
  }

  & .sidebar ul {
    list-style: none;
    padding: 0;
  }

  & .sidebar ul li {
    margin-bottom: 10px;
  }

  & .sidebar ul li a {
    text-decoration: none;
    color: #333;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  & .sidebar ul li a i {
    margin-right: 10px;
  }

  & .sidebar ul li a.active,
  & .sidebar ul li a:hover {
    background-color: #e0e7ff;
    color: #1a73e8;
    font-weight: bold;
  }

  & .content {
    padding: 20px;
    width: calc(100% - 200px);
    border-left: none;
  }

  & .content h2 {
    font-size: 20px;
    margin-bottom: 20px;
  }

  & * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .profile-pic {
            text-align: center;
            margin-bottom: 20px;
        }
        .profile-pic img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
        .profile-pic h3 {
            margin: 10px 0 5px;
            font-size: 18px;
        }
        .profile-pic p {
            color: #666;
            margin: 0;
        }
        .profile-pic .upload-btn {
            margin-top: 10px;
            padding: 5px 10px;
            background-color: #1a73e8;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        .profile-pic .upload-btn:hover {
            background-color: #155ab6;
        }
        .form-group {
            margin-bottom: 15px;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
            color: #333;
        }
        .form-group input {
            width: 95%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .form-group input[disabled] {
            background-color: #f0f0f0;
        }
        .form-actions {
            text-align: center;
            margin-top: 20px;
        }
        .form-actions button {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        .form-actions .cancel-btn {
            background-color: #f0f0f0;
            color: #333;
            margin-right: 10px;
        }
        .form-actions .cancel-btn:hover {
            background-color: #e0e0e0;
        }
        .form-actions .save-btn {
            background-color: #1a73e8;
            color: #fff;
        }
        .form-actions .save-btn:hover {
            background-color: #155ab6;
        }
`;
