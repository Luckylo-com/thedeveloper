
"use client";

import { useCallback, useEffect, useState } from "react";
import MaterialSymbolsCancel from "@/app/icons/MaterialSymbolsCancel";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit?: () => void;
  body?: React.ReactElement;
  disabled?: boolean;
}

export function Modal({ isOpen, onClose, body, disabled }: ModalProps) {

  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  if (!isOpen) {
    return null;
  }
  // {className="fixed w-full h-full justify-center items-center flex overflow-x-hidden overflow-y-scroll
  //     inset-0 z-[10000] outline-none bg-black/70"}

  return (
    <>
      <div
        className="fixed w-full h-full justify-center items-center flex overflow-x-hidden overflow-y-scroll
      inset-0 z-[10000] outline-none bg-black/70"
      >
        <div
          className="relative bg-white mx-auto h-auto w-[540px] top-0 rounded-2xl
        max-s393:w-[325px]"
        >
          {/* {content} */}
          <div
            className={`
            translate duration-300 h-full
            ${showModal ? "translate-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}
            `}
          >
            <div
              className="flex flex-col justify-center self-center translate
            h-auto border-0 rounded-lg shadow-lg relative
            left-0 right-0 mx-auto outline-none focus:outline-none"
            >
              {/* {header} */}
              <div className="flex items-center p-6 rounded-t justify-center relative">
                <button
                  onClick={handleClose}
                  className="p-1 hover:opacity-70 transition absolute right-4 top-4 text-3xl
                  text-blue/30 cursor-pointer"
                >
                  <MaterialSymbolsCancel />
                </button>
              </div>
              {/* {body} */}
              <div className="relative h-auto px-6 flex-auto justify-between items-center">
                {body}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}