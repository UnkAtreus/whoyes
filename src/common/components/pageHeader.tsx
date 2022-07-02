import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import Logo from "../../asset/logo.png"

interface PageHeaderProps {
  title: string;
  handleBack: () => void;
  handleAction?: () => void;
  action?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  handleBack,
  handleAction,
  action,
}) => {
  return (
    <div className="sticky max-w-screen-sm m-auto top-0 left-0 w-full bg-white px-4 py-4 flex items-center justify-center">
      <div onClick={handleBack} className="absolute left-6 cursor-pointer">
        <BiChevronLeft className="w-6 h-6" />
      </div>
      {(title != "logo") ? <h1 className="m-0 font-medium text-base">{title}</h1> : <img src={Logo.src}/>}
      {handleAction && (
        <div onClick={handleAction} className="absolute right-6 cursor-pointer">
          {action}
        </div>
      )}
    </div>
  );
};

export default PageHeader;
