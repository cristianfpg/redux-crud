import styled from 'styled-components';

export const TaskWrapper = styled.div`
  background-color: #262933;
  color: white;
  border-radius: 10px;
  margin: 10px;
  display: flex;
  padding: 10px;
  align-items: center;
  & .task{
    width: calc(100% - 68px);
    display: inline-block;
  }
  & .icon{
    background-color: #4062FF;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    margin-left: 10px;
    font-size: 18px;
    padding: 8px;
  }
`;