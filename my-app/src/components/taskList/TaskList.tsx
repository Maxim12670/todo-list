import { ContentContainer, CardTask } from '../index';
import styled from 'styled-components';

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
  margin-top: 1.5rem`;

const TaskList = () => {

  return (
    <ContentContainer>
      <List>
        <CardTask />
        <CardTask />
        <CardTask />
      </List>

    </ContentContainer >
  );
}
export default TaskList;