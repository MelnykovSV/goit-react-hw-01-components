import styled from '@emotion/styled';

export const StatListItemContainer = styled.li`
  background-color: ${props => {
    switch (props.id) {
      case 'id-1':
        return '#00ff88';
      case 'id-2':
        return '#0095ff';
      case 'id-3':
        return '#902a97';
      case 'id-4':
        return '#a03b1c';
      case 'id-5':
        return '#20bfa7';
    }
    return 'blue';
  }};
  font-weight: 700;
  color: white;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;

  span {
    display: block;
  }
`;
