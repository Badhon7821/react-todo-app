const Footer = () => {
  return (
    <footer className="bg-gray-900 container mx-auto border-t border-dashed border-teal-300 p-7 text-teal-600 text-md rounded-bl-xl rounded-br-xl">
      <p className="text-center ">
        &copy; {new Date().getFullYear()} Todo app. All rights reserved.
      </p>
      <p className="text-sm text-gray-500 py-2 font-semibold text-right">
        Created by Badhon
      </p>
    </footer>
  );
};

export default Footer;
