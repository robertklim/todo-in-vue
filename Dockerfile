FROM node:9.11.2-jessie
WORKDIR /usr/src/todo-in-vue/todo-in-vue
RUN npm install -g @vue/cli
ADD . /usr/src/todo-in-vue/