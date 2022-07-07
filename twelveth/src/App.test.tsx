import React from 'react';
import { render, screen } from '@testing-library/react';
import App from 'App';

describe('<App/>', () => {
  it('컴포넌트 렌더링 테스트', function () {
    const { container } = render(<App />)
    const linkElement = screen.getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()

    const appLogo = screen.getByAltText('logo')
    expect(appLogo).toBeInTheDocument()
    expect(appLogo).toHaveAttribute('src', 'logo.svg')
  });

  it('p 태그가 잘 동작하는지 여부', function () {
    const { container } = render(<App />)

    expect(container.getElementsByTagName('p')).toHaveLength(1)
    expect(container.getElementsByTagName('p')[0]).toHaveTextContent('Edit src/App.tsx and save to reload.')
  });

  it('화면에 표시되는 내용이 변경되었는지 여부', function () {
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  });
})