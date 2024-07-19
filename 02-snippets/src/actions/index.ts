'use server';

import { redirect } from 'next/navigation';
import { db } from '@/db';

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });

  redirect('/');
}

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  try {
    // Check the user's inputs and make sure they're valid
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    if (typeof title !== 'string' || title.length < 3) {
      return {
        message: 'Title must be at least 3 characters long',
      };
    }
    if (typeof code !== 'string' || code.length < 10) {
      return {
        message: 'Code must be at least 10 characters long',
      };
    }

    // Create a new record in the database
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    // try to throw an error
    // throw new Error('Failed to save to database.');
  } catch (error: unknown) {
    // Handle any errors that occur during the create operation
    if (error instanceof Error) {
      return {
        message: error.message,
      };
    } else {
      return {
        message: 'Something went wrong...',
      };
    }
  }

  // Redirect the user back to the root route
  redirect('/');
}
