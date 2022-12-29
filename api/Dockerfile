FROM node:17-alpine

WORKDIR /app
# COPY ./<src> . (if without WORKDIR & Isn't consider package.json)
COPY . . 

RUN npm install

EXPOSE 4000

CMD ["node", "app.js"]

