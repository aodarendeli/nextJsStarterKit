# Node.js 16.0.0 sürümü üzerine inşa edilmiş alpine tabanlı bir imaj kullanıyor$
FROM node:20-alpine3.18 

# Çalışma dizinini /app olarak belirliyoruz
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyalıyoruz
COPY package.json .

# Bağımlılıkları yüklüyoruz
RUN yarn install --ignore-engines

# Tüm proje dosyalarını kopyalıyoruz
COPY . .

ENV PORT 3004

EXPOSE 3004

# Uygulamayı başlatıyoruz
CMD ["yarn" ,"dev"]