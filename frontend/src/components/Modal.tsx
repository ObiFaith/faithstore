import type { ModalChildProps } from "./type";
import { cloneElement, type ReactElement } from "react";

const Modal = ({
  style,
  isOpen,
  children,
  toggleModal,
}: ModalChildProps & {
  style: string;
  children: ReactElement<ModalChildProps>;
}) => {
  const modalChildren = cloneElement(children, { isOpen, toggleModal });

  return (
    <div className="fixed top-0 right-0 h-screen w-full z-50">
      {isOpen && (
        <div
          className="absolute top-0 left-0 w-full h-screen bg-black opacity-50"
          onClick={toggleModal}
        />
      )}
      <div
        className={`absolute transition-transform transform w-3/4 max-w-[32%] bg-white shadow-lg ${style} ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {modalChildren}
      </div>
    </div>
  );
};

export default Modal;
