import { TaskRoutes } from './task.route.js';
import { UserRoutes } from './user.route.js';

export default function routes(app) {
  app.use('/api', UserRoutes);
  app.use('/api', TaskRoutes);
}
