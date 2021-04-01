import { ButtonWrapper } from "./styles";
import { IButton } from "./models";

export const Button = ({ label, onClick, type, variant }: IButton) => {
  return (
    <ButtonWrapper onClick={onClick && onClick} type={type} className={variant}>
      {label}
    </ButtonWrapper>
  );
};
