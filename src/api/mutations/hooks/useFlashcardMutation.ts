import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useApiClient } from '@/api/apiClient';
import { queryKeys } from '@/api/cache-keys';
import { type CreateFlashcard, createFlashcard } from '@/api/mutations/flashcards';
import type { MutationArgs } from '@/api/types';

export type FlashcardMutationParams = MutationArgs<{ setId: string }>;

export function useFlashcardCreate({ setId, onSettled, ...rest }: FlashcardMutationParams) {
  const client = useApiClient();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateFlashcard) => createFlashcard({ client, setId, data }),
    onSettled: async () => {
      await queryClient.invalidateQueries({
        ...queryKeys.flashcards.list({ setId }),
      });
      await onSettled?.();
    },
    ...rest,
  });
}

// Do zrobienia:
// - useFlashcardDelete
// - useFlashcardUpdate
