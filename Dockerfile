# Sử dụng hình ảnh Node.js làm hình ảnh cơ sở
FROM node:21.1.0

# Đặt thư mục làm việc
WORKDIR /app

# Sao chép file package.json và package-lock.json
COPY package*.json ./

# Cài đặt các phụ thuộc
RUN npm install

# Sao chép mã nguồn vào container
COPY . .

# Expose port cho ứng dụng (mặc định là 3000)
EXPOSE 3000

# Chạy ứng dụng trong chế độ phát triển
CMD ["npm", "start"]
