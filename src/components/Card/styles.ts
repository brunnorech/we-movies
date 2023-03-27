import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 10px 11px;
    width: 309.33px;
    align-items: center;
    flex-direction: column;
    background: ${(props) => props.theme.colors.white};
    border-radius: 4px;

    > img {
        width: 147px;
        height: 188px;
    }

    @media (max-width: 970px) {
        width: 100%;
    }   
`;

export const Title = styled.span`
    font-family:${props => props.theme.typography.fontFamily};
    font-weight: ${props => props.theme.typography.fontWeight.bold700};
    font-size: ${props => props.theme.typography.fontSize.small};
    line-height: 1rem;
    text-align: center;
    color: ${props => props.theme.colors.mainLabel};
    padding-top: 7px;
`;

export const Price = styled.span`
    font-family:${props => props.theme.typography.fontFamily};
    font-weight: ${props => props.theme.typography.fontWeight.bold700};
    font-size: ${props => props.theme.typography.fontSize.large};
    line-height: 1rem;
    text-align: center;
    color: ${props => props.theme.colors.main};
    padding-top: 2px;
    margin-bottom: 8px;
`;