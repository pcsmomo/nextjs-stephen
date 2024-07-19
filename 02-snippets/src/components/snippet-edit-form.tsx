'use client';

import { useState } from 'react';

// prisma provices a type for the Snippet model
import type { Snippet } from '@prisma/client';

// components
import Editor from '@monaco-editor/react';

// actions
// import { editSnippet } from '@/actions';
import * as actions from '@/actions';

interface SnippetEditFormProps {
  snippet: any;
}
export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = '') => {
    setCode(value);
  };

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

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
      <form action={editSnippetAction}>
        <button type="submit" className="p-2 border rounded">
          Save
        </button>
      </form>
    </div>
  );
}
