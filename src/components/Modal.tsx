import { IModalProps } from "@/types/modal";

const Modal = ({ title, text, onClose = () => {} }: IModalProps) => {
  return (
    <div className="h-screen w-screen absolute top-0 left-0 flex flex-col items-center justify-center bg-black/70">
      <div className="w-[250px] p-5 flex flex-col gap-3 rounded-lg bg-main text-xl">
        <header className="relative">
          <h2>{title}</h2>
          <button
            aria-label="Close"
            onClick={onClose}
            className="h-[20px] w-[20px] flex items-center justify-center absolute top-0 right-0 p-4 bg-violet-400 rounded-full"
          >
            X
          </button>
        </header>
        <body>
          <p>{text}</p>
        </body>
      </div>
    </div>
  );
};

export default Modal;
