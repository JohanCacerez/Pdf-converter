import Button from "../atoms/Button";
import Icon, { IconName } from "../atoms/Icon";

type IconButtonProps = {
  text: string;
  icon: IconName;
  onClick?: () => void;
  size?: number;
};
export default function IconButtonLink({
  text,
  icon,
  onClick,
  size = 24,
}: IconButtonProps) {
  return (
    <div className="m-1 w-full hover:bg-gray-500">
      <Button onClick={onClick}>
        <div className="flex gap-4 p-2">
          <Icon name={icon} size={size} />
          <span>{text}</span>
        </div>
      </Button>
    </div>
  );
}
