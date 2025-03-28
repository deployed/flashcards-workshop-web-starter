import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

import { loadFlashcardSets, useFlashcardSetsQuery } from '@/api/query/hooks/useFlashcardSets';
import { WaveBackground } from '@/components/backgrounds/WaveBackground';
import { Page } from '@/components/base/Page';
import { Text } from '@/components/base/Text';

export const Route = createFileRoute('/sets/')({
  component: SetListRoute,
  loader: ({ context }) => loadFlashcardSets(context),
});

function SetListRoute() {
  const { data } = useFlashcardSetsQuery();
  const { t } = useTranslation('sets');

  return (
    <>
      <WaveBackground variant="bottom" />
      <Page>
        {/* Przykładowa translacja */}
        <Text>{t('title')}</Text>
        {/* Render listy zestawów flashcardów */}
        {data.map(({ id, title }) => (
          <div key={id}>{title}</div>
        ))}
      </Page>
    </>
  );
}
