import React from 'react';
import Styled from 'styled-components';

import { Button, Input } from "Component";

const Container = Styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Contents = Styled.div`
  display: flex;
  background-color: #FFFFFF;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  border-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

const InputContainer = Styled.div`
  display: flex;
`;

function App() {
  return (
      <Container>
        <Contents>
          <InputContainer>
            <Input placeholder='해야할 일을 입력하세요' onChange={(text) => console.log(text)}/>
            <Button label="추가" onClick={() => alert('테스트')}/>
            <Button label="모두 삭제" backgroundColor='#FF1744' hoverColor='#F01440' onClick={() => alert('모두 삭제')}/>
          </InputContainer>
        </Contents>
      </Container>
  );
}

export default App;
