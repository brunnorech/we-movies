import styled from "styled-components";

export const ContainerData = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    margin-top: 21px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            flex-direction: row;
        }

    > div {
        display: flex;
        flex-direction: column;
        margin-left: 52px;
        align-items: flex-start;

        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            flex-direction: row;
            margin-left: 0;
        }
    }
`;

export const Price = styled.span`
    font-family:${props => props.theme.typography.fontFamily};
    font-weight: ${props => props.theme.typography.fontWeight.bold700};
    font-size: ${props => props.theme.typography.fontSize.large};
    line-height: 1rem;
    text-align: center;
    color: ${props => props.theme.colors.main};
`;

export const Title = styled.span`
    font-family:${props => props.theme.typography.fontFamily};
    font-weight: ${props => props.theme.typography.fontWeight.bold700};
    font-size: ${props => props.theme.typography.fontSize.medium};
    line-height: 1rem;
    text-align: center;
    color: ${props => props.theme.colors.main};
    margin-bottom: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        text-align: left;
        }
`;

export const Image = styled.img`
    width: 89px;
    height: 114px;
`;


//mobile component

export const ContainerMobile = styled.div`
    display: flex;
    flex-direction: row;
    width: 100% !important;
    flex: 1;
    margin-bottom: 32px;
`;

export const ContainerMobileImage = styled.div`
    display: flex;
`;

export const MobileImage = styled.img`
    width: 64px;
    height: 82px;
`;

export const ContainerMobileItemData = styled.div`
    display: flex;
    width: 100%;
    flex: 5;
    flex-direction: row;
`;

export const ContainerMobileTitle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    padding-left: 14px;

    > span {
        margin-bottom: 23px;
    }
`;

export const ContainerPrices = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;

    align-items: flex-end;

    > div {
        display: flex;
        flex-direction: row;

        &:last-child {
            flex-direction: column;
            margin-top: 16px;
        }

        > img {
            margin-left: 16px;
            cursor: pointer;
        }
    }
`;

export const SubTotal = styled.div`
    display: flex;
    flex-direction: column-reverse;
    background-color: red;
    margin-top: 16px;
`;

export const SubTotalLabel = styled.span`
        color: ${props => props.theme.colors.gray60};
        font-weight: ${props => props.theme.typography.fontWeight.bold700};
        font-size: ${props => props.theme.typography.fontSize.small};
        font-family: ${props => props.theme.typography.fontFamily};
        text-align: right;
`;