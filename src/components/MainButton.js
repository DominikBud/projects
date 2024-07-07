function MainButton({ children }) {
  return (
    <button className="bg-[#BF0F0F] font-['Roboto'] w-fit hover:bg-white hover:text-[#BF0F0F] border-2 hover:border-[#BF0F0F] transition-colors  p-4 rounded-md mt-16  text-white text-[24px]">
      {children}
    </button>
  );
}

export default MainButton;
