import { Endpoints } from '../endpoints';
import type { BackendFlashcardSet, FlashcardSet } from '../schema';
import type { QueryFnParams } from '../types';

export async function flashcardSetsQuery({
  client,
  signal,
}: QueryFnParams): Promise<FlashcardSet[]> {
  const response = await client.get<BackendFlashcardSet[]>(Endpoints.flashcardSets.list(), {
    signal,
  });

  return response.data;
}

export type FlashcardDetailsQueryParams = {
  id: string;
};

export async function flashcardSetDetails({
  client,
  signal,
  id,
}: QueryFnParams<FlashcardDetailsQueryParams>): Promise<FlashcardSet> {
  const response = await client.get<BackendFlashcardSet>(Endpoints.flashcardSets.details(id), {
    signal,
  });

  return response.data;
}

// Do zrobienia:
// - flashcardSetCounters
