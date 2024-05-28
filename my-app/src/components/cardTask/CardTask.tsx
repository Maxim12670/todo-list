import styled from 'styled-components';
import { DeleteOutlined, HeartOutlined, CheckOutlined } from '@ant-design/icons';
import { ITask } from '../../lib/types';
import { FC } from 'react';
import { useTaskStore } from '../../store/taskStore';

const Task = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0.5rem;
  width: 30rem;
  height: max-content;
  border-radius: 1.25rem;
  border: 1px solid black;
  background-color: #fff;
  font-size: 1.8rem`;

const TaskHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;`;

const TaskButton = styled.button`
  width: 3rem;
  height: 3rem;
  margin-left: 0.5rem;
  background-color: rgba(28,28,28,0);
  border: none;
  font-size: 2rem;
  cursor: pointer`;

interface CardTaskProps {
  task: ITask;
}

const CardTask: FC<CardTaskProps> = ({ task }) => {

  const {
    removeTask,
    changeFavorite,
    changeStatus
  } = useTaskStore();

  return (
    <Task>
      <TaskHeader>
        {task.attributes.title}
        <div>
          <TaskButton>
            <HeartOutlined onClick={() => changeFavorite(task.id)} style={{ color: task.favorite == 'favorite' ? '#FFD700' : '#000000' }} />
          </TaskButton>
          <TaskButton>
            <CheckOutlined onClick={() => changeStatus(task.id)} style={{ color: task.attributes.status !== 'active' ? '#228B22' : '#000000' }} />
          </TaskButton>
          <TaskButton>
            <DeleteOutlined style={{ color: '#FF0000' }} onClick={() => removeTask(task.id)} />
          </TaskButton>
        </div>
      </TaskHeader>
      {task.attributes.description}
    </Task>
  );
}

export default CardTask;