import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import { Button } from './index';

describe('<Button />', () => {
  it('버튼 컴포넌트 렌더링 테스트', () => {
    const { container } = render(<Button label="Button Test" />);

    const label = screen.getByText('Button Test');
    expect(label).toBeInTheDocument();
    const parent = label.parentElement;
    expect(parent).toHaveStyleRule('background-color', '#304FFE');
    expect(parent).toHaveStyleRule('background-color', '#1E40FF', {
      modifier: ':hover',
    });

    expect(container).toMatchSnapshot();
  });

  it('backgroundColor 및 hoverColor Props 변경 테스트', () => {
    const backgroundColor = '#FF1744';
    const hoverColor = '#F01440';
    render(
      <Button label="Button Test" backgroundColor={backgroundColor} hoverColor={hoverColor} />,
    );

    const parent = screen.getByText('Button Test').parentElement;
    expect(parent).toHaveStyleRule('background-color', backgroundColor);
    expect(parent).toHaveStyleRule('background-color', hoverColor, {
      modifier: ':hover',
    });
  });

  it('버튼 클릭 테스트', () => {
    const handleClick = jest.fn();
    render(<Button label="Button Test" onClick={handleClick} />);

    const label = screen.getByText('Button Test');
    expect(handleClick).toHaveBeenCalledTimes(0);
    fireEvent.click(label);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});