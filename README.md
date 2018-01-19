## Reddit API 📡
REST API similar to reddit API for mobile and front apps.

### Stack 🚀
- Node js
- Mongo db

### Node Modules
- Express
- Mongoose
- Passport
- Bcrypt
- JWT

### Dependencies
Install the dependencies:
```ruby
npm install
```

### Run the server
To start the server
```ruby
npm start
```

### APIs
**Welcome**

get api
```
http://localhost:3000/api/
```

**User Management**

post api
```
http://localhost:3000/api/register
http://localhost:3000/api/login
http://localhost:3000/api/logout
```
**User Post**

post api
```
http://localhost:3000/api/post
```
get api
```
http://localhost:3000/api/posts
```

**User Comment**
post api
```
http://localhost:3000/api/comment
```

### API Usage
1. Register / Login to get the authorization token
2. Pass the token inside request header field 'access-token' for rest of the apis

**Note**: Authorization token expires in 10 mins in idle state.

### Author 🙏🏻
**Web**: [Khawaja Farooq](http://khawajafarooq.github.io)

**Twitter**: [@khfarooq](https://twitter.com/khfarooq)

**Medium**: [@khfarooq](https://medium.com/@khfarooq)
