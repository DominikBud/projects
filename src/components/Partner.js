function Partner({ image, text }) {
  return (
    <div className="flex items-center justify-center  flex-col">
      <div className=" grid place-items-center h-28">
        <img src={image} alt={text} className=" " />
      </div>
      <p className="text-[#474747] text-[25px] font-['Inter']">{text}</p>
    </div>
  );
}

export default Partner;
