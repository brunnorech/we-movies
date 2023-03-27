import styled from "styled-components";

export const Title = styled.h1`
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold700};
    font-size: ${({ theme }) => theme.typography.fontSize.title};
    line-height: 1.68rem;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
`;

export const Container = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 10px;
    height: 74px;
    flex-direction: row;
    justify-content: space-between;
`;

export const MyCartContainer = styled.div`
    display: flex;
    cursor: pointer;
    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding-right: 10px
    }
`;

export const MyCartLabel = styled.span`
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold600};
    font-size: ${({ theme }) => theme.typography.fontSize.medium};
    line-height: 1.18rem;
    color: ${({ theme }) => theme.colors.white};
`;

export const MyItemsLabel = styled.span`
    font-weight: 600;
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    line-height: 1rem;
    color: ${({ theme }) => theme.colors.gray60};
`;