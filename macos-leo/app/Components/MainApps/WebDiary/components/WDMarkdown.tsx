// WDMarkdown.tsx
import { UserThemeStore } from "@/app/state/store";
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import { CodeProps, WDMarkdownProps } from './types/WDType';

const Highlighter = (dark: boolean) => {
  return {
    code({ node, inline, className, children, ...props }: CodeProps) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          style={dark ? dracula : prism}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className}>{children}</code>
      );
    },
    img({ src, alt, width, height, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
      // Handle both absolute and relative GitHub image paths
      const imgStyle: React.CSSProperties = {};
      if (width) imgStyle.width = width;
      if (height) imgStyle.height = height;
      
      return (
        <img 
          src={src} 
          alt={alt} 
          style={imgStyle}
          className="inline-block max-w-full h-auto" 
          {...props} 
        />
      );
    },
    p({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
      const alignment = (props as any)['align'];
      return (
        <p 
          className={`${
            alignment === 'center' ? 'text-center' : 
            alignment === 'right' ? 'text-right' : 
            'text-left'
          } my-4`}
          {...props}
        >
          {children}
        </p>
      );
    },
    // Support for GitHub-style details/summary
    details({ children, ...props }: React.HTMLAttributes<HTMLDetailsElement>) {
      return (
        <details 
          className={`my-4 p-4 rounded-lg ${
            dark ? 'bg-gray-800' : 'bg-gray-50'
          }`} 
          {...props}
        >
          {children}
        </details>
      );
    },
    summary({ children, ...props }: React.HTMLAttributes<HTMLElement>) {
      return (
        <summary className="cursor-pointer font-medium" {...props}>
          {children}
        </summary>
      );
    },
    // Support for badges and shields.io images
    a({ children, href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
      return (
        <a 
          href={href} 
          className="no-underline hover:opacity-80" 
          {...props}
        >
          {children}
        </a>
      );
    }
  };
};

function WDMarkdown({ selectedMd }: WDMarkdownProps) {
  const { isDark } = UserThemeStore();

  if (!selectedMd) {
    return (
      <div className="w-full h-full flex items-center justify-center text-gray-500">
        Select a document to view
      </div>
    );
  }

  return (
    <div className={`w-full h-full overflow-auto ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className={`markdown w-2/3 mx-auto px-2 py-6 prose ${isDark ? 'prose-invert' : ''} max-w-none`}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[
            rehypeKatex,
            rehypeRaw,
            [rehypeExternalLinks, { target: "_blank", rel: "noopener noreferrer" }]
          ]}
          components={Highlighter(isDark)}
        >
          {selectedMd || 'Loading...'}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default WDMarkdown;