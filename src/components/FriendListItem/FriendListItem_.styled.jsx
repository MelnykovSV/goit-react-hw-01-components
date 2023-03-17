import styled from '@emotion/styled';

export const FriendListItemContainer = styled.li`
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  border: 1px solid;
  padding: 10px 15px;
  span {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => {
      if (props.a) {
        return 'green';
      } else {
        return 'red';
      }
    }};
  }
  img {
    display: block;
    width: 80px;
  }
`;
