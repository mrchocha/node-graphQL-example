const express = require('express');
const mongoose = require('mongoose');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
//const User = require('./models/users');
const schema = require('./queryes/userquery')

const app = express();
const port = 3000;

mongoose.connection.on('connected', () => {
    console.log('connected');
});
mongoose.connection.on('disconnected', () => {
    console.log('disconnected');
});

mongoose.connect('mongodb+srv://rahul:123@cluster0.cruwu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});



app.get('/', async (req, res) => {
    const users = await User.find()
    res.json(users);
    ///res.json(User.find())
})
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})