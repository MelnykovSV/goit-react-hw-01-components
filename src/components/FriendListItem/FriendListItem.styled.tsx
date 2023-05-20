import styled from '@emotion/styled';
interface IProps {
  a: boolean;
}
export const Container = styled.li`
  width: 100%;
  display: flex;
  gap: 20px;
  box-sizing: border-box;
  align-items: center;
  border: 1px solid;
  padding: 10px 15px;
  span {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props: IProps) => {
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
