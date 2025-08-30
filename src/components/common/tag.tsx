import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  title: string;
}

const GRADIENT = "bg-gradient-to-r from-purple-500 to-cyan-500";

export default function Tag(props: Props) {
  const hashTag = props.title.split(" ")[0].toLowerCase();

  return (
    <Link
      href={hashTag}
      className="group text-5xl font-bold text-center relative pb-5"
    >
      <span
        className={cn(
          "external-link no-underline group-hover:text-transparent",
          GRADIENT
        )}
      >
        {props.title}
      </span>
      <span
        className={cn(
          "absolute bottom-0 left-1/2 -translate-x-1/2 h-1 rounded w-full",
          GRADIENT
        )}
      ></span>
    </Link>
  );
}
