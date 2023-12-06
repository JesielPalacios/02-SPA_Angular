# ng build --prod

# docker run -d -p 3000:80 -v 'c:/Users/Jesiel Palacios/Desktop/Desarrollo Web/10. React/Replicas de proyectos de Angular en React/Z - Proyectos Angular 8+/02-SPA/dist/sap:/usr/share/nginx/htm

# Stage 0, based on Node.js
FROM node:15.9.0-alpine3.13 as node-server
WORKDIR /app
COPY ./ /app/
RUN npm install
RUN npm run build -- --prod

# Stage 1, based on Nginx
FROM nginx:1.19.7-alpine
COPY --from=node-server /app/dist/spa-angular /usr/share/nginx/html

# docker build . -t spa-angular:1.0
# docker run -d -p 3000:80 --name spa-angular spa-angular:1.0