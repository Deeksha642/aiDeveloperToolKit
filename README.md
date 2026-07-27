# AI Developer Toolkit

AI-powered backend developer toolkit built with Node.js, TypeScript, Express, Swagger, and Groq LLM.

---

## Features

- AI Code Review
- SQL Generator
- Error Explainer
- Swagger API Documentation
- Zod Validation
- Docker Support

---

## Tech Stack

- Node.js
- TypeScript
- Express
- Groq API
- Swagger
- Zod
- Docker

---

## Installation

```bash
git clone <repo>

cd ai-developer-toolkit

npm install
```

Create a `.env` file.

```env
PORT=3000
GROQ_API_KEY=YOUR_KEY
AI_MODEL=llama-3.3-70b-versatile
```

Run

```bash
npm run dev
```

---

## Swagger

```
http://localhost:3000/api-docs
```

---

## APIs

POST /api/v1/ai/review-code

POST /api/v1/ai/generate-sql

POST /api/v1/ai/explain-error

---

## Folder Structure

```
src
 ├── config
 ├── controller
 ├── middlewares
 ├── prompts
 ├── routes
 ├── schemas
 ├── services
 ├── types
 └── utils
```

docker build --no-cache -t ai-toolkit .
docker run -p 3000:3000 --env-file .env ai-toolkit
docker ps
docker stop <container_id>