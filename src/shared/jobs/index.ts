import { AgendaSponsorStatusJobService } from '@modules/sponsorPets/jobs/AgendaSponsorStatusJob';
import { container } from 'tsyringe';

import SynchronizeDatabasesServices from '@shared/infra/typesense/services/SynchronizeDatabasesServices';
import { AgendaPixJobProvider } from '@shared/container/providers/JobsProvider/implementations/AgendaPixJobProvider';
import { AgendaJobProvider } from '../container/providers/JobsProvider/implementations/AgendaJobProvider';

export default async function callJobs() {
  const jobs = container.resolve(AgendaJobProvider);
  const pixServiceJob = container.resolve(AgendaPixJobProvider);
  const signatures = container.resolve(AgendaSponsorStatusJobService);
  const syncTypeSense = container.resolve(SynchronizeDatabasesServices);
  await syncTypeSense.execute();
  signatures.checkPendingSignature();
  jobs.checkPendingPaid();
  pixServiceJob.checkingPixService();
}
