import React, { useState } from 'react';
import Styled from 'styled-components';

import { Button, Input, TodoItem } from "Component";

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

const TodoListContainer = Styled.div`
  min-width: 350px;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #BDBDBD;
  margin-bottom: 20px;
`;

function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState<string[]>([]);

  const addTodo = (): void => {
    if (todo) {
      setTodoList([...todoList, todo]);
      setTodo('');
    }
  }

  const deleteTodo = (index: number): void => {
    let list = [...todoList];
    list.splice(index, 1);
    setTodoList(list);
  }

  return (
      <Container>
        <Contents>
          <TodoListContainer>
            { todoList.map((item, index) => 
              <TodoItem key={item} label={item} onDelete={() => deleteTodo(index)}/>
            )}
          </TodoListContainer>
          <InputContainer>
            <Input placeholder='해야할 일을 입력하세요' 
                    onChange={(text) => setTodo(text)}/>
            <Button label="추가" onClick={addTodo}/>
            <Button label="모두 삭제" backgroundColor='#FF1744' 
                    hoverColor='#F01440' onClick={() => alert('모두 삭제')}/>
          </InputContainer>
        </Contents>
      </Container>
  );
}

export default App;
