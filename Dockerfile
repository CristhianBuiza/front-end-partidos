# Etapa de construcción
FROM node:18.17 as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Etapa de ejecución
FROM node:18.17
WORKDIR /app
COPY --from=build /app/next.config.js ./
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

CMD ["npm", "start"]
