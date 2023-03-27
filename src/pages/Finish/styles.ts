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
    }

    > button {
        margin-top: 32px;
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