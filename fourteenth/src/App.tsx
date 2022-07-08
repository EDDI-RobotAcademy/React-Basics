import React, { Component } from 'react';
import type { IScriptSnapshot } from 'typescript';
import Styled from 'styled-components';

import { Button, Input, TodoItem } from 'Component';

const Container = Styled.div`
  min-height: 100vh;
  background-color: #EEEEEE;
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
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;
const TodoListContainer = Styled.div`
  min-width: 350px;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #BDBDBD;
  margin-bottom: 20px;
`;
const InputContainer = Styled.div`
  display: flex;
`;

interface Props {}

interface State {
  readonly todo: string;
  readonly todoList: string[];
  readonly error: boolean;
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      todo: '',
      todoList: [],
      error: false,
    };
  }

  private addTodo = (): void => {
    const { todo, todoList } = this.state;
    if (todo) {
      this.setState({
        todo: '',
        todoList: [...todoList, todo],
      });
    }
  };

  private deleteTodo = (index: number): void => {
    let list = [...this.state.todoList];
    list.splice(index, 1);
    this.setState({
      todoList: list,
    });
  };

  render() {
    const { todo, todoList, error } = this.state;

    return (
      <Container>
        {!error && (
          <Contents>
            <TodoListContainer data-testid="todoList">
              {todoList.map((item, index) => (
                <TodoItem key={item} label={item} onDelete={() => this.deleteTodo(index)} />
              ))}
            </TodoListContainer>
            <InputContainer>
              <Input
                placeholder="할 일을 입력해 주세요"
                value={todo}
                onChange={(text) => this.setState({ todo: text })}
              />
              <Button label="추가" onClick={this.addTodo} />
            </InputContainer>
          </Contents>
        )}
      </Container>
    );
  }

  // static getDerivedStateFromProps(nextProps: Props, prevState: State) {
  //   console.log('getDerivedStateFromProps');

  //   return null;
  // }

  // componentDidMount() {
  //   console.log('componentDidMount');
  // }

  // getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
  //   console.log('getSnapshotBeforeUpdate');

  //   return {
  //     testData: true,
  //   };
  // }

  // componentDidUpdate(prevProps: Props, prevState: State, snapshot: IScriptSnapshot) {
  //   console.log('componentDidUpdate');
  // }

  // shouldComponentUpdate(nextProps: Props, nextState: State) {
  //   console.log('shouldComponentUpdate');
  //   return true;
  // }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount');
  // }

  // componentDidCatch(error: Error, info: React.ErrorInfo) {
  //   this.setState({
  //     error: true,
  //   });
  // }
}
export default App;
