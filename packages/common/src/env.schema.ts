import { z } from 'zod';

/**
 * Base environment schema
 * Validates critical environment variables
 */
export const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),

  // API
  API_PORT: z.coerce.number().int().min(1).max(65535).default(3000),
  API_HOST: z.string().default('localhost'),
  API_BASE_URL: z.string().url().default('http://localhost:3000'),

  // Storage
  STORAGE_TYPE: z.enum(['local', 's3']).default('local'),
  STORAGE_PATH: z.string().default('./data'),

  // S3 (optional)
  S3_BUCKET: z.string().optional(),
  S3_REGION: z.string().optional(),
  S3_ACCESS_KEY_ID: z.string().optional(),
  S3_SECRET_ACCESS_KEY: z.string().optional(),
  S3_ENDPOINT: z.string().url().optional(),

  // Image Processing
  MAX_IMAGE_SIZE_MB: z.coerce.number().positive().default(50),
  MAX_MEGAPIXELS: z.coerce.number().positive().default(100),
  MAX_CONCURRENT_JOBS: z.coerce.number().int().positive().default(4),
  PROCESSING_TIMEOUT_MS: z.coerce.number().int().positive().default(30000),
  ALLOW_UPSAMPLING: z
    .string()
    .transform((val) => val === 'true')
    .default('false'),

  // Cache
  CACHE_ENABLED: z
    .string()
    .transform((val) => val === 'true')
    .default('true'),
  CACHE_MAX_SIZE_MB: z.coerce.number().positive().default(1000),
  CACHE_TTL_SECONDS: z.coerce.number().int().positive().default(2592000),

  // Security
  CORS_ALLOWED_ORIGINS: z.string().default('http://localhost:5173'),
  URL_INGEST_ENABLED: z
    .string()
    .transform((val) => val === 'true')
    .default('true'),
  URL_INGEST_ALLOWED_DOMAINS: z.string().optional(),
  SSRF_PROTECTION_ENABLED: z
    .string()
    .transform((val) => val === 'true')
    .default('true'),

  // Observability
  LOG_LEVEL: z.enum(['debug', 'info', 'warn', 'error']).default('info'),
  METRICS_ENABLED: z
    .string()
    .transform((val) => val === 'true')
    .default('true'),
  TRACING_ENABLED: z
    .string()
    .transform((val) => val === 'true')
    .default('false'),
});

export type EnvConfig = z.infer<typeof envSchema>;

/**
 * Validates environment variables and returns typed config
 * Throws error if validation fails
 */
export function validateEnv(env: NodeJS.ProcessEnv = process.env): EnvConfig {
  const result = envSchema.safeParse(env);

  if (!result.success) {
    const errors = result.error.format();
    throw new Error(`Environment validation failed:\n${JSON.stringify(errors, null, 2)}`);
  }

  return result.data;
}
