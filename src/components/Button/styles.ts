import styled from "styled-components"

type ButtonProps = {
    width?: string;
    added?: boolean;
};

export const ButtonContainer = styled.button<ButtonProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    width: ${({ width }) => width || '100%'};
    height: 40px;
    background: ${props => props.added ? props.theme.colors.green : props.theme.colors.pacificBlue};
    border-radius: 4px;
    border: 0;
    cursor: pointer;
`;

export const LabelButton = styled.span`
    font-family:${props => props.theme.typography.fontFamily};
    font-weight: ${props => props.theme.typography.fontWeight.bold700};
    font-size: ${props => props.theme.typography.fontSize.small};
    line-height: 1rem;
    text-align: center;
    color: ${props => props.theme.colors.white};
`;