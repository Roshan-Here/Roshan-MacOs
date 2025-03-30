import { UserThemeStore } from "@/app/state/store";
import ReactMarkdown, { Components } from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import Image from "next/image";
import { WDMarkdownProps } from './types/WDType';
import React from 'react';


const Highlighter = (dark: boolean): Components => {
  return {
    code(props) {
      // https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/479#issuecomment-1267772279
      // thnkx to him -- https://github.com/void-index 

      const { className, children,style, ...rest } = props;
      console.log(style)
      const match = /language-(\w+)/.exec(className || '');  
      // Check if this is a code block with a language
      if (match) {
        return (
        <SyntaxHighlighter
          style={dark ? dracula : prism} 
          PreTag="div"
          {...rest}
          ref={null}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>

        );
      }
      
      // Otherwise render as inline code
      return (
        <code className={className} {...rest}>
          {children}
        </code>
      );
    },
    img(props) {
      const { src, alt, width, height, ...rest } = props;
      if (!src) return null;
      
      // Check if it's a shields.io badge or komarev.com badge
      const isShieldsBadge = src.includes('img.shields.io');
      const isKomarevBadge = src.includes('komarev.com/ghpvc');
      const isBadge = isShieldsBadge || isKomarevBadge;
      const isGif = src.toLowerCase().endsWith('.gif');
      
      // Handle both absolute and relative GitHub image paths
      const absoluteSrc = src.startsWith("http") ? src : `https://raw.githubusercontent.com${src}`;

      const imgStyle: React.CSSProperties = {};
      if (width) imgStyle.width = width;
      if (height) imgStyle.height = height;
      
      // For badges, use special styling
      if (isBadge) {
        return (
          <Image
            src={absoluteSrc}
            alt={alt || ''}
            className="inline-block h-7 mr-2"
            style={{ marginBottom: '8px' }}
            draggable={false}
            unoptimized
            {...rest}
          />
        );
      }

      if (isGif) {
        return (
          <Image
            src={absoluteSrc} 
            alt={alt || ''} 
            style={imgStyle}
            className="inline-block" 
            draggable={false}
            {...rest} 
          />
        );
      }
      
      // For regular images, use Next.js Image component
      return (
        <Image
          src={absoluteSrc} 
          alt={alt || ''} 
          style={imgStyle}
          width={300}
          height={300}
          draggable={false}
          className="inline-block max-w-full h-auto" 
          {...rest} 
        />
      );
    },
    a(props) {
      const { children, href, ...rest } = props;
      

      const isBadgeLink = React.Children.toArray(children).some(child => {
        if (!React.isValidElement(child)) return false;
        
        // img element
        if (child.type !== 'img') return false;
        
        // src property
        const imgProps = child.props as { src?: string };
        const src = imgProps.src;
        
        // badge shields.io or komarev.com
        return src && (src.includes('img.shields.io') || src.includes('komarev.com/ghpvc'));
      });
      
      if (isBadgeLink) {
        return (
          <a 
            href={href} 
            className="inline-block no-underline hover:opacity-80" 
            target="_blank"
            rel="noopener noreferrer"
            {...rest}
          >
            {children}
          </a>
        );
      }
      
      // Regular links
      return (
        <a 
          href={href} 
          className="no-underline hover:opacity-80" 
          {...rest}
        >
          {children}
        </a>
      );
    },
    p(props) {
      const { children, ...rest } = props;
      interface ParagraphAttributes {
        align?: 'left' | 'center' | 'right';
        [key: string]: string | number | boolean | undefined; 
      }
      
      const { align: alignment } = rest as ParagraphAttributes;
    
      
      // Fix TypeScript errors by safely checking for badge links
      const containsBadges = React.Children.toArray(children).some(child => {
        if (!React.isValidElement(child)) return false;
        if (child.type !== 'a') return false;
        
        const childProps = child.props as { children?: React.ReactNode };
        
        return React.Children.toArray(childProps.children || []).some(innerChild => {
          if (!React.isValidElement(innerChild)) return false;
          if (innerChild.type !== 'img') return false;
          
          const imgProps = innerChild.props as { src?: string };
          const src = imgProps.src;
          
          return src && (src.includes('img.shields.io') || src.includes('komarev.com/ghpvc'));
        });
      });
      
      if (containsBadges) {
        return (
          <div className="flex flex-wrap items-center gap-2 my-4">
            {children}
          </div>
        );
      }
      
      return (
        <p 
          className={`${
            alignment === 'center' ? 'text-center' : 
            alignment === 'right' ? 'text-right' : 
            'text-left'
          } my-4`}
          {...rest}
        >
          {children}
        </p>
      );
    },
    details(props) {
      const { children, ...rest } = props;
      
      return (
        <details 
          className={`my-4 p-4 rounded-lg ${
            dark ? 'bg-gray-800' : 'bg-gray-50'
          }`} 
          {...rest}
        >
          {children}
        </details>
      );
    },
    summary(props) {
      const { children, ...rest } = props;
      
      return (
        <summary className="cursor-pointer font-medium" {...rest}>
          {children}
        </summary>
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