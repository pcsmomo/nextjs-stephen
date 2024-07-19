'use client';

// prisma provices a type for the Snippet model
import type { Snippet } from '@prisma/client';

import Editor from '@monaco-editor/react';
import { useState } from 'react';

interface SnippetEditFormProps {
  snippet: any;
}
export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = '') => {
    setCode(value);
  };

  async function editSnippet() {
    'use server';
  }

  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
    </div>
  );
}
