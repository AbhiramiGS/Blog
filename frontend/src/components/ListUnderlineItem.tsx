import Link from "next/link";

export const ListUnderlineItem = ({
  text,
  href,
}: {
  text: string;
  href: string;
}) => {
  return (
    <div>
      <li className="text-md py-1 relative inline-block after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-current after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left text-[#9f9763]">
        <Link className="scroll-smooth" href={href}>
          {text}
        </Link>
      </li>
    </div>
  );
};
