import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import { Input } from './index';

describe('<Input />', () => {
  it('Input 컴포넌트 렌더링 테스트', () => {
    const { container } = render(<Input value="default value" />);

    const input = screen.getByDisplayValue('default value');
    expect(input).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('placeholder 렌더링 테스트', () => {
    render(<Input placeholder="default placeholder" />);

    const input = screen.getByPlaceholderText('default placeholder');
    expect(input).toBeInTheDocument();
  });

  it('데이터 변경 테스트', () => {
    render(<Input placeholder="default placeholder" />);

    const input = screen.getByPlaceholderText('default placeholder') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'study react' } });
    expect(input.value).toBe('study react');
  });
});