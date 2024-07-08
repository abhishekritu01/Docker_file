FROM node:20

# Create app directory in the container 
WORKDIR /myapp           

COPY . .

RUN npm install

EXPOSE  3000

CMD ["npm", "start"]

