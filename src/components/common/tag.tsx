interface Props {
  title: string;
}

export default function Tag(props: Props) {
  const hashTag = props.title.split(" ")[0].toLowerCase();

  return (
    <a
      href={hashTag}
      className="group text-5xl font-bold text-center relative pb-5"
    >
      <span className="text-white group-hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300">
        {props.title}
      </span>
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded transition-all duration-500 w-full"></span>
    </a>
  );
}
