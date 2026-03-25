import clsx from "clsx";

interface SpinProps {
  classD?: string;
}
export default function SpinLoading({ classD = "" }: SpinProps) {
  return (
    <div className={clsx("flex items-center justify-center", classD)}>
      <div
        className={clsx(
          "h-10 w-10",
          "border-4 border-t-transparent border-slate-600 rounded-full",
          "animate-spin",
        )}
      ></div>
    </div>
  );
}
