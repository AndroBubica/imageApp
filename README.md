# Image Processing Platform

> Deterministic, secure, and cacheable image transformation service

A production-grade image processing platform built with Node.js, TypeScript, and Sharp (libvips).
This platform provides a REST API and web UI for transforming images with preset-based pipelines,
cloud storage integration, and comprehensive security guardrails.

## Features

- **Deterministic Processing**: Same input + preset = same output, always
- **Secure by Design**: SSRF protection, input validation, resource limits
- **High Performance**: Stream-based I/O, intelligent caching, concurrent processing
- **Flexible Storage**: Local filesystem or S3-compatible storage
- **Preset System**: JSON-based transformation pipelines with versioning
- **Production Ready**: Structured logging, metrics, health checks

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Monorepo Structure                       │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  apps/                                                        │
│  ├── api/          → Fastify REST API                        │
│  └── ui/           → Vite + React SPA                        │
│                                                               │
│  packages/                                                    │
│  ├── core/         → Image processing engine (Sharp)         │
│  ├── storage/      → Storage adapters (local, S3)            │
│  ├── presets/      → Preset system & validation              │
│  ├── common/       → Shared types, utilities, schemas        │
│  └── config/       → Shared configs (TS, ESLint, etc.)       │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

### Technology Stack

- **Runtime**: Node.js 20+ LTS
- **Language**: TypeScript 5.3+
- **Build System**: Turborepo
- **Package Manager**: npm workspaces
- **API Framework**: Fastify 4.x
- **Image Processing**: Sharp 0.33+ (libvips)
- **Frontend**: Vite + React 18
- **Validation**: Zod
- **Code Quality**: ESLint, Prettier, Husky, lint-staged

## Quick Start

### Prerequisites

- Node.js >= 20.0.0
- npm >= 10.0.0
- libvips (installed via Sharp)

### Installation

```bash
# Clone the repository
git clone https://github.com/AndroBubica/imageApp.git
cd imageApp

# Install dependencies
npm install

# Copy environment configuration
cp .env.example .env

# Build all packages
npm run build
```

### Development

```bash
# Run all services in development mode
npm run dev

# Run specific workspace
npm run dev --workspace=@imageapp/api
npm run dev --workspace=@imageapp/ui

# Lint all code
npm run lint

# Type check
npm run typecheck

# Run tests
npm test
```

### API Server

The API server will be available at `http://localhost:3000`

- `GET /healthz` - Health check
- `GET /readyz` - Readiness check
- `POST /process` - Process image with preset
- `GET /outputs/:id` - Retrieve processed image

### Web UI

The web UI will be available at `http://localhost:5173`

- Drag & drop image upload
- Preset selection
- Before/after preview
- Download processed images

## Environment Configuration

See `.env.example` for all available configuration options. Key variables:

```env
# Server
API_PORT=3000
UI_PORT=5173

# Storage
STORAGE_TYPE=local
STORAGE_PATH=./data

# Image Processing
MAX_IMAGE_SIZE_MB=50
MAX_MEGAPIXELS=100
MAX_CONCURRENT_JOBS=4

# Security
CORS_ALLOWED_ORIGINS=http://localhost:5173
SSRF_PROTECTION_ENABLED=true
```

## Project Structure

```
.
├── apps/
│   ├── api/                # REST API service
│   │   ├── src/
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── ui/                 # Web UI
│       ├── src/
│       ├── package.json
│       └── tsconfig.json
├── packages/
│   ├── common/             # Shared utilities
│   ├── config/             # Shared configs
│   ├── core/               # Image processing
│   ├── presets/            # Preset system
│   └── storage/            # Storage adapters
├── .github/
│   └── workflows/          # CI/CD pipelines
├── .husky/                 # Git hooks
├── turbo.json              # Turborepo config
├── package.json            # Root package
└── tsconfig.json           # Root TS config
```

## Scripts

- `npm run build` - Build all packages
- `npm run dev` - Start development servers
- `npm run lint` - Lint all code
- `npm run lint:fix` - Fix linting issues
- `npm run format` - Format code with Prettier
- `npm run typecheck` - Type check all packages
- `npm test` - Run all tests
- `npm run clean` - Clean build artifacts

## Code Quality

This project enforces strict code quality standards:

- **TypeScript**: Strict mode with comprehensive type checking
- **ESLint**: Airbnb TypeScript config + custom security rules
- **Prettier**: Consistent code formatting
- **Husky**: Pre-commit hooks for linting and formatting
- **Commitlint**: Conventional commit messages
- **Turborepo**: Optimized build caching

## Development Workflow

1. Create a feature branch
2. Make your changes
3. Run `npm run lint` and `npm run typecheck`
4. Commit with conventional commit format
5. Push and create a pull request

Pre-commit hooks will automatically:
- Lint and format staged files
- Validate commit message format
- Run type checks

## Testing

```bash
# Run all tests
npm test

# Run tests in CI mode with coverage
npm run test:ci

# Run tests for specific package
npm test --workspace=@imageapp/core
```

## Documentation

- [ARCHITECTURE.md](./ARCHITECTURE.md) - Detailed architecture and design decisions
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Contributing guidelines
- [APPidea.md](./APPidea.md) - Full implementation checklist and roadmap

## Roadmap

See [APPidea.md](./APPidea.md) for the complete phased implementation plan:

- **Phase 1 (MVP)**: Core engine, presets, REST API, basic UI
- **Phase 2 (v1.1)**: Quality filters, S3 storage, metrics, worker queue
- **Phase 3 (v2)**: Multi-tenancy, RBAC, webhooks, preset manager
- **Phase 4**: Advanced ops, monitoring, SLOs
- **Phase 5**: Security hardening
- **Phase 6**: Documentation & DX

## License

MIT

## Support

For issues and questions, please open an issue on GitHub.
