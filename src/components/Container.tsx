import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[2500px] mx-auto xl:px-20 md:2px px-4">
      {children}
    </div>
  );
};

export default Container;
