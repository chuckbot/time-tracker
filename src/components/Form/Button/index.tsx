import { IButton } from "./button-model";
import { ButtonWrapper } from "./styles";

export const Button = ({ label, onClick, type, variant }: IButton) => {
  return (
    <ButtonWrapper onClick={onClick && onClick} type={type} className={variant}>
      {label}
    </ButtonWrapper>
  );
};
