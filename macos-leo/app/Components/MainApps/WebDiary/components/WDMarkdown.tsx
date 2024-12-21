import { useState, useCallback, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeExternalLinks from 'rehype-external-links';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { WDMarkdownProps,CodeProps } from './types/WDType';
import { UserThemeStore } from "@/app/state/store";

const Highlighter = (dark: boolean) => {
  return {
    code({ node, inline, className, children, ...props }: CodeProps) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          style={prism}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className}>{children}</code>
      );
    }
  };
};


function WDMarkdown({ selectedMd  }: WDMarkdownProps) {
  const { isDark } = UserThemeStore()
  if (!selectedMd) {
    return (
      <div className="w-full h-full flex items-center justify-center text-gray-500">
        Select a document to view
      </div>
    );
  }

    return (
      <div className="w-full h-full overflow-auto">
      <div className="markdown w-2/3 mx-auto px-2 py-6 prose max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[
            rehypeKatex,
            [rehypeExternalLinks, { target: "_blank", rel: "noopener noreferrer" }]
          ]}
          components={Highlighter(isDark)}
        >
          {selectedMd || 'Loading...'}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default WDMarkdown
