import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'


import remarkHtml from 'remark-html'
import remarkBreaks from 'remark-breaks'
import remarkSlug from 'remark-slug'
import remarkMath from 'remark-math'
import remarkRehype from 'remark-rehype'
import remarkParse from 'remark-parse'
import stripMarkdown from 'strip-markdown'

import rehypeKatex from 'rehype-katex'
import rehypeStringify from 'rehype-stringify'
import rehypeRaw from 'rehype-raw'

const MarkdownContainer = styled.div`
    flex: 1;
`

export default function Markdown({ content }) {
    return (
        <MarkdownContainer className="markdown-body">
            <ReactMarkdown
                remarkPlugins={[remarkHtml, remarkBreaks, remarkSlug, remarkMath, remarkRehype, remarkParse, stripMarkdown]} /* remarkGfm, remarkGemoji, */
                rehypePlugins={[rehypeKatex, rehypeStringify, rehypeRaw]}
                children={content}
                components={{
                    code: Code,
                }}
            />
        </MarkdownContainer>
    );
}


export function Code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
        <SyntaxHighlighter
            children={String(children).replace(/\n$/, '')}
            style={atomOneDark}
            language={match[1]}
            {...props}
        />
    ) : (
        <code className={className} {...props}>
            {children}
        </code>
    )
}