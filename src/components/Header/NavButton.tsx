import { FC } from "react";

interface NavButtonProps {
  label: string;
  handler?: () => void;
  className?: string;
}

const NavButton: FC<NavButtonProps> = ({
  label,
  handler,
  className,
}: NavButtonProps) => {
  return (
    <button onClick={handler} className={`font-medium text-base ${className}`}>
      {label}
    </button>
  );
};

export default NavButton;
