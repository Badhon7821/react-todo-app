import { HiDocumentText } from "react-icons/hi";

const Header = () => {
  return (
    <header className="header bg-gray-900 p-10 container mx-auto border-b border-dashed border-teal-300 rounded-tl-xl rounded-tr-xl">
      <h2 className="flex items-center gap-2 uppercase font-semibold text-teal-500 tracking-wider">
        <span>
          <HiDocumentText />
        </span>
        <span>Todo app</span>
      </h2>
    </header>
  );
};

export default Header;
