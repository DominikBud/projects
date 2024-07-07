function BigBreaker({ type }) {
  return (
    <div
      className={`
       mt-4 mb-8 bg-red-500  ${type === "small" ? "h-0.5 w-14" : "h-1 w-32"}`}
    ></div>
  );
}

export default BigBreaker;
