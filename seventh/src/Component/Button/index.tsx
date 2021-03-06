// @ts-ignore
import Styled from 'styled-components';

interface ContainerProps {
    readonly backgroundColor: string;
    readonly hoverColor: string;
}

const Container = Styled.div<ContainerProps>`
  text-align: center;
  background-color: ${(props) => props.backgroundColor};
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Label = Styled.div`
    color: #FFFFFF;
    font-size: 16px;
`;

interface Props {
    readonly label: String;
    readonly backgroundColor?: string;
    readonly hoverColor?: string;
}

export const Button = ({ label, backgroundColor = '#304FFE', hoverColor = '#1E40FF' }: Props) => {
    return (
        <Container backgroundColor={backgroundColor} 
                    hoverColor={hoverColor}
                    onClick={() => alert('테스트!')}>
            <Label>{ label }</Label>
        </Container>
    );
}