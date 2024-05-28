import { useState } from 'react';
import { ContentContainer } from '../index';
import { Flex, Select, Button } from 'antd';

const selectStyle = {
  width: '15rem'
};

const buttonStyle = {
  backgroundColor: 'green'
};

const NavMenu = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const handleChangeSelect = (value: string) => {
    setFilter(value);
    console.log('current value:', filter);
  }

  return (
    <ContentContainer>
      <Flex justify='center' align='center' gap="middle">
        <Select
          onChange={handleChangeSelect}
          style={selectStyle}
          defaultValue='all'
          options={[
            { value: 'all', label: 'all' },
            { value: 'completed', label: 'completed' },
            { value: 'not completed', label: 'not completed' },
            { value: 'favorites', label: 'favorites' },
          ]}
        />
        <Button type='primary' style={buttonStyle}>add new task</Button>
      </Flex>
    </ContentContainer>
  );
};

export default NavMenu;