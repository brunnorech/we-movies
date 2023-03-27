import styled from "styled-components";


export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    padding: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: auto;
    }   
`;