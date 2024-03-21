import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const listURL = usePathname();
  const pathName = listURL.split("/");

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-500 duration-300 dark:text-gray-400 dark:hover:text-white my-2"
          >
            <svg
              className="w-2.5 h-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
          </Link>
        </li>
        {pathName.map((path, index) => {
          const routeTo = pathName.slice(0, index + 1).join("/");
          const isLast = index === pathName.length - 1;
          return isLast ? (
            <li className="flex items-center mb-[0.10rem] font-medium" key={index}>
              <small>{path}</small>
            </li>
          ) : (
            <li className="flex items-center" key={index}>
              <Link href={routeTo} className="text-gray-700 hover:text-gray-500 duration-300 dark:text-gray-400 dark:hover:text-white mb-[0.15rem] mr-[12px] font-medium">
                <small>
                  {path}
                </small>
              </Link>
              <span className="flex items-center">
                <svg
                  className="w-2 h-2 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
