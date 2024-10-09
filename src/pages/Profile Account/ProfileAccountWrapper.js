import styled from 'styled-components'
export const ProfileAccountWrapper = styled.div`
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
`;
