import { ReactMarkdown } from 'react-markdown/lib/react-markdown'


interface MarkdownViewerProps {
    content: string
    }

export default function MarkdownViewer({ content }: MarkdownViewerProps) {
    return (
        <div>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    )
}