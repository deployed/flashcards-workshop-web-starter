import { createFileRoute } from '@tanstack/react-router';

import { WaveBackground } from '@/components/backgrounds/WaveBackground';
import { Page } from '@/components/base/Page';

export const Route = createFileRoute('/sets/$setId/')({
  component: SetDetailsRoute,
});

function SetDetailsRoute() {
  const { setId } = Route.useParams();

  console.log(`Wybrany zestaw flashcardów: ${setId}`);

  return (
    <>
      <WaveBackground variant="bottom" />
      <Page>Widok dla zestawu flashcardów</Page>
    </>
  );
}
