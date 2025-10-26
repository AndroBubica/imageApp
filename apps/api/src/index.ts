/**
 * @imageapp/api
 * Fastify REST API for image processing
 */

import { validateEnv } from '@imageapp/common';

const env = validateEnv();

console.log('Image Processing API');
console.log(`Environment: ${env.NODE_ENV}`);
console.log(`Port: ${env.API_PORT}`);

// TODO: Implement Fastify server
// - Routes: /process, /outputs/:id, /healthz, /readyz
// - Middleware: CORS, helmet, rate limiting
// - Request validation
// - Error handling
// - Structured logging
