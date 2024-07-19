'use client';

// prisma provices a type for the Snippet model
import type { Snippet } from '@prisma/client';

interface SnippetEditFormProps {
  snippet: any;
}
export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  return <div>Client component has snippet with title {snippet.title}</div>;
}
