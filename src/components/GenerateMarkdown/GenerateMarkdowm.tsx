import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
interface MarkdowmProps {
  content: string;
}

export default function GenerateMarkdowm({ content }: MarkdowmProps) {
  return (
    <div className="prose md:prose-lg prose-slate prose-h1:text-4xl">
      <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]}>
        {content}
      </Markdown>
    </div>
  );
}
