const Header = () => {
  return (
    <header className="flex justify-between border-2 border-fuchsia-100 h-20">
      <div className="py-7 px-3 flex justify-between">
        <a href="" className="px-2 hidden md:block transition-all">
          <code className="font-extrabold sm:font-semibold sm:text-3xl text-cyan-400">
            Coded@
          </code>
        </a>
        <a href="/" className="">
          <span className="font-bold sm:font-light sm:text-3xl text-fuchsia-400">
            Oluwasegun Salami
          </span>
        </a>
      </div>
      <div id="blog" className="py-7 px-5">
        <a
          className="font-bold text-fuchsia-500 transition-all hover:text-fuchsia-300 hover:underline"
          href="/blog"
        >
          blog
        </a>
      </div>
    </header>
  );
};

export default Header;
