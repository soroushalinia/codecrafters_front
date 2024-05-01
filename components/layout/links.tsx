import Link from "next/link";

interface NavLinksProp {
  align: "row" | "col";
}

const NavLinks: React.FC<NavLinksProp> = ({ align }) => {
  if (align == "row") {
    return (
      <div className="flex flex-row gap-2 items-center text-primary justify-center font-semibold">
        <Link
          className="hover:bg-primary hover:text-white p-2 rounded-full"
          href="/about"
        >
          درباره‌ما
        </Link>
        <Link
          className="hover:bg-primary hover:text-white p-2 rounded-full"
          href="/teacher"
        >
          نویسندگان
        </Link>
        <Link
          className="hover:bg-primary hover:text-white p-2 rounded-full"
          href="/topic"
        >
          موضوعات
        </Link>
        <Link
          className="hover:bg-primary hover:text-white p-2 rounded-full"
          href="/blog"
        >
          وبلاگ
        </Link>
        <Link
          className="hover:bg-primary hover:text-white p-2 rounded-full"
          href="/realpython-farsi"
        >
          Realpython فارسی
        </Link>
        <Link
          className="hover:bg-primary hover:text-white p-2 rounded-full"
          href="/contact"
        >
          ارتباط با ما
        </Link>
      </div>
    );
  } else if (align == "col") {
    return (
      <div className="flex flex-col gap-2 items-center text-primary justify-center font-semibold p-4">
        <Link
          className="hover:bg-primary hover:text-white p-2 rounded-full"
          href="/"
        >
          درباره‌ما
        </Link>
        <Link
          className="hover:bg-primary hover:text-white p-2 rounded-full"
          href="/"
        >
          نویسندگان
        </Link>
        <Link
          className="hover:bg-primary hover:text-white p-2 rounded-full"
          href="/"
        >
          موضوعات
        </Link>
        <Link
          className="hover:bg-primary hover:text-white p-2 rounded-full"
          href="/"
        >
          وبلاگ
        </Link>
        <Link
          className="hover:bg-primary hover:text-white p-2 rounded-full"
          href="/"
        >
          Realpython فارسی
        </Link>
        <Link
          className="hover:bg-primary hover:text-white p-2 rounded-full"
          href="/"
        >
          ارتباط با ما
        </Link>
      </div>
    );
  }
};

export default NavLinks;
