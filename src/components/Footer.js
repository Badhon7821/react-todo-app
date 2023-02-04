const Footer = () => {
  return (
    <footer className="bg-gray-900 container mx-auto border-t border-dashed border-teal-300 p-10 text-teal-600  text-center text-md rounded-bl-xl rounded-br-xl">
      <p>&copy; {new Date().getFullYear()} Todo app. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
