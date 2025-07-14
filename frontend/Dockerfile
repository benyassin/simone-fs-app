FROM node:18 as builder

WORKDIR /app
COPY . .
RUN npm install
RUN npx ng build simone --configuration=production
# RUN ls -l /app/dist/simone  # ✅ Debug

FROM nginx:alpine

# Copie build Angular
COPY --from=builder /app/dist/simone/browser /usr/share/nginx/html

# Copie ta config nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf
