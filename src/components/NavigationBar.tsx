import IconButton from "./IconButton";

import backArrow from "../stories/assets/back-arrow.svg";
import close from "../stories/assets/delete.svg";

interface NavigationBarProps {
  showBackButton: boolean;
  showCloseButton: boolean;
  showTitle: boolean;
  title?: string;
  onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NavigationBar({
  showBackButton,
  showCloseButton,
  showTitle,
  title = "",
  onBackButtonClick = () => {},
  onCloseButtonClick = () => {},
}: NavigationBarProps) {
  return (
    <div className="w-full flex justify-between">
      <div className="navigation-title-wrapper flex">
        {showBackButton && (
          <IconButton
            alt="back-arrow"
            iconPath={backArrow}
            onClick={onBackButtonClick}
          />
        )}
        {showTitle && <h1 className="text-2xl">{title}</h1>}
      </div>
      {showCloseButton && (
        <IconButton alt="close" iconPath={close} onClick={onCloseButtonClick} />
      )}
    </div>
  );
}
