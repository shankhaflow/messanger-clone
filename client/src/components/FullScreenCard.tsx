import { ReactNode } from "react";

type FullScreenChildrenProps = {
  children: ReactNode;
};

const FullScreenCard = ({ children }: FullScreenChildrenProps) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full">{children}</div>
    </div>
  );
};

FullScreenCard.Body = ({ children }: FullScreenChildrenProps) => {
  return <div className="shadow bg-white p-6 rounded-lg">{children}</div>;
};

FullScreenCard.BelowCard = ({ children }: FullScreenChildrenProps) => {
  return <div className="mt-2 flex justify-center gap-3">{children}</div>;
};

export default FullScreenCard;
