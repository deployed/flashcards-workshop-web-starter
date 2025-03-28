import { createFileRoute } from '@tanstack/react-router';

import { WaveBackground } from '@/components/backgrounds/WaveBackground';

export const Route = createFileRoute('/')({
  component: HomeRoute,
});

function HomeRoute() {
  return (
    <>
      <WaveBackground variant="home" />
      <main className="mx-content my-15 flex h-full flex-col items-center justify-between laptop:justify-start"></main>
    </>
  );
}
