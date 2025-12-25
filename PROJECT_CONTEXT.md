# PROJECT CONTEXT

## Project Type
- Frontend Web App
- Dashboard style
- Real users (MVP first)

## Tech Stack
- Vue 3
- Nuxt 3
- Composition API
- TypeScript
- Tailwind CSS

## Architecture
- Module-Based Structure
- Each feature is a separate module
- No global feature logic outside modules

## Module Rules
Each module can contain:
- pages/
- components/
- api/
- types/
- mappers/
- index.ts (public exports only)

Modules must be:
- Independent
- Reusable
- Easy to remove or extend

## Coding Rules
- <script setup> only
- Composition API only
- No React
- No over-engineering
- Clean and readable code
- Minimal logic

## API & Types
- Backend schema can change
- Frontend must NOT depend directly on backend schema
- Always use:
  DTO → Mapper → Frontend Model

## Editing Rules
- Do NOT rewrite full files unless asked
- Show only changed lines
- Respect existing structure

## UI & Design
- Based on Figma
- Dark / Light mode supported
- RTL supported
- Follow existing styles exactly

## Language & Output
- Simple English
- Short answers
- Code first
- No long explanations
