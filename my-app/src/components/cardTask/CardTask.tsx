import styled from 'styled-components';
import { DeleteOutlined, HeartOutlined, CheckOutlined } from '@ant-design/icons';


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

const CardTask = () => {

  return (
    <Task>
      <TaskHeader>
        Title
        <div>
          <TaskButton>
            <HeartOutlined style={{ color: '#FFD700' }} />
          </TaskButton>
          <TaskButton>
            <CheckOutlined style={{ color: '#228B22' }} />
          </TaskButton>
          <TaskButton>
            <DeleteOutlined style={{ color: '#FF0000' }} />
          </TaskButton>
        </div>
      </TaskHeader>
      hkfsdkjf
    </Task>
  );
}

export default CardTask;