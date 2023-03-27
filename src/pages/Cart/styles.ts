import styled from "styled-components";


export const Content = styled.div`
    padding: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: #FFFFFF;
    border-radius: 4px;

    
    > div {
        display: flex;
        justify-content: center;
        width: 447px;

        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
             width: 100%;
        }  
    }

    
    > h1 {
        color: ${props => props.theme.colors.main};
        font-weight: ${props => props.theme.typography.fontWeight.bold700};
        font-size: ${props => props.theme.typography.fontSize.title};
        font-family: ${props => props.theme.typography.fontFamily};
        line-height: 1.68rem;
        padding-bottom: 32px;
        text-align: center;

        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            padding-bottom: 32px;
        }  
    }

`;

export const Border = styled.div`
    width: 447px;
    border-bottom: 1.36px solid ${({ theme }) => theme.colors.borderColor};
    margin-bottom: 32px;


    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
             width: 100% !important;
        }  
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 960px;

    padding: 0 16px;


    @media (max-width: 970px) {
        width: 100%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 100%;
    }  

`;

export const ContainerRows = styled.div`
    display: flex;
    background-color: #fff;
    padding: 24px;
    border-radius: 4px;
    flex-direction: column;
    margin: 0 16px;
    margin-bottom: 16px;
`;

export const ContainerItems = styled.div`
    display: grid;
    grid-template-columns: 4fr 2fr 2fr 1fr;
    background-color: ${props => props.theme.colors.white};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            display: flex;
            flex-direction: column;
            width: 100% !important;
        }
`;

export const ColumnTitle = styled.span`
        color: ${props => props.theme.colors.gray60};
        font-weight: ${props => props.theme.typography.fontWeight.bold700};
        font-size: ${props => props.theme.typography.fontSize.medium};
        font-family: ${props => props.theme.typography.fontFamily};
        line-height: 1.18rem;
        text-align: left;

        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            display: none;
        }
`;

export const TotalLabel = styled.span`
        color: ${props => props.theme.colors.gray60};
        font-weight: ${props => props.theme.typography.fontWeight.bold700};
        font-size: ${props => props.theme.typography.fontSize.medium};
        font-family: ${props => props.theme.typography.fontFamily};
        line-height: 1.18rem;
        text-align: left;
`;

export const CartFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 21px;
    padding-top: 21px;
    border-top: 1px solid ${props => props.theme.colors.gray60};
    width: 100%;

    > div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    > button {
        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            margin-top: 16px;
        }  
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-top: 100%;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }  

`;

export const TotalPrice = styled.span`
        color: ${props => props.theme.colors.main};
        font-weight: ${props => props.theme.typography.fontWeight.bold700};
        font-size: ${props => props.theme.typography.fontSize.largeTitle};
        font-family: ${props => props.theme.typography.fontFamily};
        line-height: 2.06rem;
        padding-left: 24px;

    
`;