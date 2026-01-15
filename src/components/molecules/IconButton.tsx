import Button from "../atoms/Button";
import Icon from "../atoms/Icon";

type IconButtonProps = {
  text: string;
  icon: string;
  onClick?: () => void;
};
export default function IconButton({ text, icon, onClick }: IconButtonProps) {
  return (
    <Button onClick={onClick}>
      <Icon name={icon} />
      <span>{text}</span>
    </Button>
  );
}
