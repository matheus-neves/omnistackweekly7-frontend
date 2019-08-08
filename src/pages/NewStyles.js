import styled from 'styled-components';

export const NewPost = styled.form`
  background: #fff;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  margin: 30px auto 0;
  max-width: 580px;
  padding: 30px;
  width: 100%;

  input {
    margin-bottom: 10px;

    &[type="text"] {
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
      height: 38px;
      padding: 0 20px;
    }

  }

  button {
    background: #7159c1;
    border: 0;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    padding: 10px 20px;
  }



`;
