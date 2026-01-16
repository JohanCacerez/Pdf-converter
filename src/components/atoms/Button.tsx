type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};
export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button className=" hover:cursor-pointer" onClick={onClick}>
      {children}
    </button>
  );
}
