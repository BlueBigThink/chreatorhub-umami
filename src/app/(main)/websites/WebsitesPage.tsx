'use client';
import { useEffect } from 'react';
import WebsitesHeader from 'app/(main)/settings/websites/WebsitesHeader';
import WebsitesDataTable from 'app/(main)/settings/websites/WebsitesDataTable';
import { useTeamUrl } from 'components/hooks';
import { notifyEvent } from './[websiteId]/realtime/reporter';
export default function WebsitesPage() {
  const { teamId } = useTeamUrl();

  useEffect(() => {
    notifyEvent('website');
  }, []);

  return (
    <>
      <WebsitesHeader teamId={teamId} allowCreate={false} />
      <WebsitesDataTable teamId={teamId} allowEdit={false} />
    </>
  );
}
