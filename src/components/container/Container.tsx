interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="bg-slate-100 text-slate-900 min-h-screen">
      <div className="max-w-screen-lg mx-auto px-8">{children}</div>
    </div>
  );
}
