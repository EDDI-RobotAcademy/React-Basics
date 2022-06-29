import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App/>', () => {
  it('컴포넌트 렌더링 테스트', function () {
    const { container } = render(<App />)
    const linkElement = screen.getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()

    expect(container.getElementsByClassName('App-logo')).toHaveLength(1)
    expect(container.getElementsByClassName('App-logo')[0]).toHaveAttribute('src', 'logo.svg')
  });

  it('p 태그가 잘 동작하는지 여부', function () {
    const { container } = render(<App />)

    expect(container.getElementsByTagName('p')).toHaveLength(1)
    // 실제 App.js에 적혀 있는 p 태그의 글자를 배치해야 확인 가능
    expect(container.getElementsByTagName('p')[0]).toHaveTextContent('Edit src/App.js and save to reload.')
  });

  it('화면에 표시되는 내용이 변경되었는지 여부', function () {
    const { container } = render(<App />)
    // src/__snapshots__/App.test.js.snap이 생성됨
    // 실제 내용이 변경되면 fail 이 발생하므로
    // 작업시 화면 표시의 변경이 발생하는지 여부를 파악할 수 있다.
    expect(container).toMatchSnapshot()
  });
});
