const Footer = () => {
  return (
    <footer className="bg-white  shadow-sm dark:bg-gray-900 ">
      <div className="w-full max-w-screen-xl mx-auto md:py-8">
     
        <hr className="my-6 border-gray-200 dark:border-gray-700 " />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
