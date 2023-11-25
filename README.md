# L2-B2-Assignment-02

# Instructions to run the application locally.

# Clone the Github code and follow the following steps:

Github Link: https://github.com/tarequemusa/L2-B2-Assignment-02

# NPM Package for Visual Studio Code

# Step#1.

Install Package.json file: npm init -y

# Step#2.

npm install express

# Step#3.

npm install mongoose --save

# Step#4.

npm install typescript --save-dev

# Step#5.

npm i cors

# Step#6.

npm i dotenv

# Step#7.

tsc -init

# Step#8:

npm i --save-dev @types/express

# Step#9:

npm i --save-dev @types/cors

# Step#10:

Install the elslint by following:
→ npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
→ npx eslint --init

# Step#11:

Install prettier code formatter:
npm install --save-dev prettier

# Step#12:

Install two extension:
ESLint
Prettier Formatter for Visual Studio Code
Then reload the window. Ctrl+shift+p → Developer: Reload Window

# Step#13:

Install npm for eslint and prettier conflict remove:
npm install --save-dev eslint-config-prettier

# Step#14:

Install ts node dev:
→ npm i ts-node-dev --save-dev
→ ts-node-dev --respawn --transpile-only src/server.ts

# Step#15:

Run the server on vs code:
→ npm run start:dev

# Post Man Link for CRUD Operations:

1. Create User
   → http://localhost:5000/api/users/create-user
2. Get All Users
   → http://localhost:5000/api/users/
3. Get Single User by ID:
   → http://localhost:5000/api/users/userId
