import styled from 'styled-components';
import { ReactNode, FC } from 'react';

const Container = styled.div`
  display: block;
  margin: 0 auto;
  width: 102.4rem;
  height: 100%;`;

interface ContentContainerProps {
  children?: ReactNode;
}

const ContentContainer: FC<ContentContainerProps> = ({ children }) => {
  return (
    <Container>{children}</Container>
  );
}

export default ContentContainer;