FROM node:23-slim AS base
WORKDIR /app
COPY . .

RUN npm i -g pnpm

RUN pnpm config set auto-install-peers true
RUN pnpm config set auto-build true

RUN pnpm i

RUN npm run build

FROM node:23-slim AS runner
WORKDIR /app

COPY --from=base /app/public ./public
COPY --from=base /app/.next ./.next
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/node_modules ./node_modules

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "start"]
