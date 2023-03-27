import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
    margin-right: 12px;
    > img {
        padding-right: 5px;
    }

    > span {
        font-family:${props => props.theme.typography.fontFamily};
        font-weight: ${props => props.theme.typography.fontWeight.bold400};
        font-size: ${props => props.theme.typography.fontSize.small};
        line-height: 1rem;
        text-align: center;
        color: ${props => props.theme.colors.white};
    }
`; 