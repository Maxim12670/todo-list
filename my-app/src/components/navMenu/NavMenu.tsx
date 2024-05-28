import { FC, useState } from 'react';
import { ContentContainer } from '../index';
import { Flex, Select, Button, Input } from 'antd';
import { TFilterTask } from '../../lib/types';
import { useTaskStore } from '../../store/taskStore';

const selectStyle = {
  width: '15rem'
};

const buttonStyle = {
  backgroundColor: 'green'
};

interface NavMenuProps {
  onChangeFilter: (value: TFilterTask) => void;
}

const NavMenu: FC<NavMenuProps> = ({ onChangeFilter }) => {

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const { addNewTask } = useTaskStore();

  const changeFilter = (value: TFilterTask) => {
    onChangeFilter(value);
  }

  const addTask = () => {
    addNewTask(title, description, 'active');
  }


  return (
    <ContentContainer>
      <Flex justify='center' align='center' gap="middle">
        <Select
          onChange={changeFilter}
          style={selectStyle}
          defaultValue='all'
          options={[
            { value: 'all', label: 'all' },
            { value: 'completed', label: 'completed' },
            { value: 'active', label: 'active' },
            { value: 'favorite', label: 'favorites' },
          ]}
        />
        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='title' style={{ width: '20rem' }} />
        <Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder='description' style={{ width: '20rem' }} />
        <Button onClick={addTask} type='primary' style={buttonStyle}>new task</Button>
      </Flex>
    </ContentContainer>
  );
};

export default NavMenu;