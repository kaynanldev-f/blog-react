import clsx from "clsx";

interface SpinProps {
  className?: string;
}
export default function SpinLoading({ className = "" }: SpinProps) {
  return (
    <div className={clsx("flex items-center justify-center", className)}>
      <div
        className={clsx(
          "h-10 w-10",
          "border-4 border-t-transparent border-red-600 rounded-full",
          "animate-spin",
        )}
      ></div>
    </div>
  );
}
