import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

interface Props {
  title: string;
  createdAt: string;
  description: string;
  instruments: { name: string; isSec?: boolean }[];
  link: string;
  videoSrc?: string;
}

export default function ReadMore(props: Props) {
  const { title, createdAt, description, instruments, link, videoSrc } = props;

  return (
    <Dialog>
      <DialogTrigger className="liquid-glass w-full py-2 px-4 border rounded-md liquid-button">
        Read more
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl max-h-11/12 overflow-y-auto">
        <DialogTitle asChild>
          <div className="flex flex-col gap-2 justify-between md:flex-row md:items-end">
            <h1 className="md:text-4xl">{title}</h1>
            <Badge>{createdAt}</Badge>
          </div>
        </DialogTitle>
        <DialogDescription asChild>
          <div className="flex flex-col items-center justify-center gap-5">
            <h4 className="md:text-base text-gray-300">{description}</h4>
            {videoSrc && (
              <video src={videoSrc} className="h-96 rounded-2xl" controls />
            )}
            <div className="flex flex-wrap gap-2">
              {instruments.map((instrument, ii) => (
                <Badge
                  key={ii}
                  variant={instrument.isSec ? "secondary" : "outline"}
                >
                  {instrument.name}
                </Badge>
              ))}
            </div>
            <Link
              href={link}
              target="_blank"
              className="underline external-link"
            >
              Open Source on GitHub
            </Link>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
