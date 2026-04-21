## Overview

This project implements a minimal REST API service using Node.js, Express, and TypeScript. The API provides a single endpoint (GET /hello) that returns a JSON response with a greeting message. The implementation follows a single-file architecture pattern suitable for microservices, health checks, or starter projects, with proper TypeScript configuration and development tooling.

## Tasks

### 1. Initialize Project Structure and Dependencies
**Description:** Set up the Node.js project with package.json, TypeScript configuration, and all necessary dependencies. Install Express with TypeScript type definitions, ts-node for development execution, and nodemon for auto-restart functionality. Configure npm scripts for development (start:dev) and production (start) modes. Create the basic directory structure with src folder for source code and artifacts folder for generated files.
**Files to create:**
- package.json
- tsconfig.json
- .gitignore
**Files to modify:**
- None
**Complexity:** Low
**Dependencies:** None

### 2. Create Server Entry Point with Hello Endpoint
**Description:** Implement the Express server in src/index.ts with a single GET /hello endpoint. The endpoint must return a JSON response with the structure { "message": "Hello, World!" }. Configure Express to listen on a configurable port (default to 3000) and configurable host (default to localhost). Export the Express app instance for testing purposes. Add basic error handling middleware to catch unhandled errors and return appropriate HTTP status codes. The server should log startup information including the port and host it is listening on.
**Files to create:**
- src/index.ts
**Files to modify:**
- None
**Complexity:** Low
**Dependencies:** 1

### 3. Add Basic Error Handling Middleware
**Description:** Implement error handling middleware in src/index.ts to catch any errors that occur during request processing. The middleware should log errors to the console and return a 500 status code with a generic error message to prevent stack trace exposure in production. Ensure the error handler is registered after all route definitions as Express requires error handlers to be defined last.
**Files to create:**
- None
**Files to modify:**
- src/index.ts
**Complexity:** Low
**Dependencies:** 2

## File Structure

```
test-new-or/
├── artifacts/
│   └── plan.md
├── src/
│   └── index.ts
├── .gitignore
├── package.json
└── tsconfig.json
```

## Testing Strategy

### Unit Tests
- Test GET /hello endpoint returns 200 status code
- Test GET /hello endpoint returns correct JSON structure with message field
- Test GET /hello endpoint message value equals "Hello, World!"
- Test server exports Express app instance for testing

### Integration Tests
- Start server on test port and make HTTP request to /hello
- Verify response headers include Content-Type: application/json
- Test that unknown routes return 404 status code

### Manual Testing
- Run `npm run start:dev` to start development server
- Execute `curl http://localhost:3000/hello` and verify response
- Test server binds to configured port correctly

## Risks

1. **TypeScript Configuration Issues:** Incorrect tsconfig settings may cause compilation errors. Resolution: Use strict TypeScript configuration targeting ES2020 with module resolution for Node.js.

2. **Port Already in Use:** Default port 3000 may be occupied by another process. Resolution: Use environment variable PORT to allow configuration override.

3. **Express Type Definitions Missing:** @types/express may not install correctly causing TypeScript errors. Resolution: Ensure all @types packages are listed as devDependencies.

4. **Development vs Production Mode:** ts-node may not be suitable for production. Resolution: Use separate scripts - ts-node for development, compiled JavaScript for production.

5. **No Input Validation:** If /hello endpoint is extended with parameters, lack of validation could cause issues. Resolution: Deferred - not applicable for current static endpoint requirement.
