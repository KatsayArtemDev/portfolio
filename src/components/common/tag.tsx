import { cn } from "@/lib/utils";

interface Props {
  title: string;
}

const GRADIENT = "bg-gradient-to-r from-purple-500 to-cyan-500";

export default function Tag(props: Props) {
  const hashTag = props.title.split(" ")[0].toLowerCase();

  return (
    <a
      href={hashTag}
      className="group text-5xl font-bold text-center relative pb-5"
    >
      <span
        className={cn(
          "group-hover:text-transparent bg-clip-text transition-all duration-300",
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
    </a>
  );
}
