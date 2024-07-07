function MainHeading({ children, type }) {
  return (
    <h2
      className={`text-5xl text-[#303030] font-['Roboto'] font-bold ${
        type === "black" ? null : "text-white"
      } ${type === "footer" ? "text-[30px]" : null}`}
    >
      {children}
    </h2>
  );
}

export default MainHeading;
