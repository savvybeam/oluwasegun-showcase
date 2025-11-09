const Container = ({ children }) => {
  return (
    <div className="relative w-screen h-screen border-cyan-100 flex flex-col ">
      {children}
    </div>
  );
};

export default Container;
