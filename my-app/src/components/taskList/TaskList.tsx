import { FC } from 'react';
import { ContentContainer, CardTask } from '../index';
import { ITaskList } from '../../lib/types';
import styled from 'styled-components';

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
  margin-top: 1.5rem`;

const TaskList: FC<ITaskList> = ({ tasks}) => {

  return (
    <ContentContainer>
      <List>
        {tasks.map((task) => (
          <CardTask
            key={task.id}
            task={task}/>
        ))}
      </List>
    </ContentContainer >
  );
}
export default TaskList;