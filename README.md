### Next 16 Modal Interception Bug

Trailing slash breaks Next.js modal interception.

1. npm install
2. npm run dev
3. Go to http://localhost:3000/parent/other/
4. Click on the "Click me" text to open modal
5. Hard redirect to http://localhost:3000/parent/child/test/ will happen
6. Change "trailingSlash" to false in the next.config.ts
7. Go to http://localhost:3000/parent/other
8. Modal is rendered
