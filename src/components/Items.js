import BigBreaker from "./BigBreaker";
import SubHeading from "./SubHeading";

function Items({ type, image, text }) {
  return (
    <a
      href="/"
      className={`flex flex-col  ${
        type === "products" ? "bg-white lg:pl-8" : null
      }`}
    >
      <img src={image} alt={text} className="lg:h-70" />
      <div className="px-4 lg:px-0 pt-6">
        <SubHeading>{text}</SubHeading>
        <BigBreaker type="small" />
      </div>
    </a>
  );
}

export default Items;
