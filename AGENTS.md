# AGENTS.md — test-new-or

This file describes the project for AI agents working on implementation issues.

## Project Context

Project: test-new-or

## Architecture

# System Architecture

## System Overview

This is a minimal REST API service built with Node.js, Express, and TypeScript. The system provides a single endpoint that returns a greeting message. The architecture follows a simple, single-file design pattern suitable for microservices, health checks, or starter projects.

## Components

### 1. Server Entry Point (`src/index.ts`)
- **Responsibility**: Application bootstrap, Express configuration, route registration, and server startup
- **Interfaces**: 
  - Express HTTP server listening on configurable port
  - Exports Express app instance for testing

### 2. Route Handler (embedded in `src/index.ts`)
- **Responsibility**: Handle GET requests to `/hello` endpoint
- **Interfaces**: Express request/response interface

## Data Model

This minimal API does not require persistent data storage or complex data models. The only data entity is:

| Entity | Fields | Description |
|--------|--------|-------------|
| HelloResponse | message: string | Static response containing greeting text |

**Relationships**: None - single endpoint with no data dependencies.

## API Contracts

### GET /hello

**Request:**
- Method: `GET`
- Path: `/hello`
- Headers: None required
- Query Parameters: None
- Body: None

**Response (200 OK):**
```json
{
  "message": "Hello, World!"
}
```

**Response Codes:**
- `200 OK` - Successful response
- `404 Not Found` - If endpoint not found (default Express behavior)
- `500 Internal Server Error` - Server error handling

## Technology Stack

| Technology | Version | Justification |
|------------|---------|---------------|
| Node.js | 18.x LTS | Long-term support, stable, widely adopted for server-side JavaScript |
| Express | 4.x | Minimal, flexible middleware framework; industry standard for Node.js APIs |
| TypeScript | 5.x | Type safety, improved developer experience, compile-time error detection |

**Additional Dependencies:**
- `@types/express` - Type definitions for Express
- `@types/node` - Node.js type definitions
- `ts-node` - TypeScript execution for development
- `nodemon` - Auto-restart during development

## Data Flow

### Request Lifecycle

1. **Client Request**: HTTP client sends GET request to `/hello` endpoint
2. **Express Router**: Express receives request and matches route pattern `/hello`
3. **Route Handler**: Handler function executes, constructs response object
4. **JSON Serialization**: Response object serialized to JSON
5. **HTTP Response**: Server sends 200 OK with JSON payload
6. **Client Receives**: Client parses JSON and displays message

```
┌─────────┐     GET /hello      ┌──────────┐     JSON      ┌─────────┐
│ Client  │ ──────────────────► │  Express │ ────────────► │ Client  │
└─────────┘                     └──────────┘               └─────────┘
                                   │  ↑
                                   │  │ response:
                                   │  │ { message: "Hello, World!" }
                                   ▼  │
              

[... truncated for brevity ...]

## Working Guidelines

- Read this file and README.md before starting any work
- Follow existing code patterns and conventions
- Write clean, production-quality code with proper error handling
- Create or update tests if a testing setup exists
- Do NOT run git commands — the pipeline handles commits and pushes
- Do NOT ask questions — you are running in an automated pipeline