function NavigationItem({ type, destinationText, fillerText, link }) {
  return (
    <a
      className="flex flex-col items-center grow py-3 hover:bg-gray-100 transition-colors duration-300"
      href={link}
    >
      <p className="text-black text-[20px] font-['Roboto_Condensed']">
        {destinationText}
      </p>
      <p className="text-[16px] font-['Roboto']">{fillerText}</p>
    </a>
  );
}

export default NavigationItem;
