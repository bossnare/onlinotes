#!/bin/sh

# Run migration (prod)
echo "Running Prisma migrations..."
npx prisma migrate deploy

# Run the prod app
echo "Starting NestJS app..."
node dist/src/main.js