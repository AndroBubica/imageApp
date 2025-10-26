/**
 * @imageapp/api
 * Fastify REST API for image processing
 */

import { validateEnv } from '@imageapp/common';

const env = validateEnv();

// eslint-disable-next-line no-console
console.warn('Image Processing API');
// eslint-disable-next-line no-console
console.warn(`Environment: ${env.NODE_ENV}`);
// eslint-disable-next-line no-console
console.warn(`Port: ${env.API_PORT}`);

// TODO: Implement Fastify server
// - Routes: /process, /outputs/:id, /healthz, /readyz
// - Middleware: CORS, helmet, rate limiting
// - Request validation
// - Error handling
// - Structured logging
