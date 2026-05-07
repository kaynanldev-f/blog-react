import { formatRelativeDate, fulldateTime } from "@/src/utils/post-dateTime";

interface PostDateProps {
  date: string;
}

export default function PostDate({ date }: PostDateProps) {
  return (
    <time
      className="text-slate-600 block text-sm/tight"
      dateTime={date}
      title={formatRelativeDate(date)}
    >
      {fulldateTime(date)}
    </time>
  );
}
