import { ButtonContainer, LabelButton } from "./styles"

interface IButton {
    label?: string;
    component?:  any;
    onClick: () => void;
    added?: boolean;
    width?: string;
}

export const Button = ({ label, component, onClick, added = false, width }: IButton) => {
    const Component = component;
    return (
        <ButtonContainer onClick={onClick} added={added} width={width}>
            {component && <Component />}
            <LabelButton>{label}</LabelButton>
        </ButtonContainer>
    )
}