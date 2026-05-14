interface ErrorProps {
  titleContent: string;
  content: string;
}

export default function ErrorMEssage({ titleContent, content }: ErrorProps) {
  return (
    <div
      className="bg-slate-900 text-slate-200 min-h-95 flex flex-col items-center justify-center gap-4
     p-8 rounded-xl"
    >
      <h1 className="text-7xl font-extrabold">{titleContent}</h1>
      <p>{content}</p>
    </div>
  );
}
