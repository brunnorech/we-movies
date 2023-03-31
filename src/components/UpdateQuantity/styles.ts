import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    margin: 0 !important;
    padding: 0 !important;
    flex-direction: row !important;
    align-items: center !important;
    height: 26px;

    img {

        &:first-child {
            margin-right: 11px !important;
        }

        &:last-child {
            margin-left: 11px !important;
        }
    }
`;

export const CountView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 16px;
    width: 62px;
    height: 100%;
    border: 1px solid #D9D9D9;
    border-radius: 4px;
`;

export const Count = styled.span`
        color: ${props => props.theme.colors.main};
        font-weight: ${props => props.theme.typography.fontWeight.regular}; 
        font-size: ${props => props.theme.typography.fontSize.medium};
        font-family: ${props => props.theme.typography.fontFamily};
        line-height: 1.18rem;
`;