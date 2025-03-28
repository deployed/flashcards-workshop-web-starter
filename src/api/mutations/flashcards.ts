import { Endpoints } from '@/api/endpoints';
import type { BackendFlashcard, CreateFlashcardPayload } from '@/api/schema';
import type { QueryFnParams } from '@/api/types';

export type CreateFlashcard = Omit<CreateFlashcardPayload, 'flashcardSet'>;
export type CreateFlashcardParams = {
  data: CreateFlashcard;
  setId: string;
};

export async function createFlashcard({
  client,
  signal,
  data,
  setId,
}: QueryFnParams<CreateFlashcardParams>) {
  const response = await client.post<BackendFlashcard>(
    Endpoints.flashcardSets.for(setId).flashcards.create(),
    {
      ...data,
      flashcardSet: setId,
    } satisfies CreateFlashcardPayload,
    { signal },
  );

  return response.data;
}

// Do zrobienia:
// - deleteFlashcard
// - updateFlashcard
// - markFlashcardAsLearned
// - markFlashcardAsUnknown
