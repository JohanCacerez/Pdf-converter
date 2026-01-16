import { IconType } from "react-icons";
import { HiFolder } from "react-icons/hi";
import { MdAutoFixHigh, MdOutlineSettings } from "react-icons/md";

const iconMap = {
  Folder: HiFolder,
  Trick: MdAutoFixHigh,
  Settings: MdOutlineSettings,
};

export type IconName = keyof typeof iconMap;

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

export default function Icon({ name, size = 24, className }: IconProps) {
  const SelectedIcon: IconType = iconMap[name];

  return <SelectedIcon size={size} className={className} />;
}
