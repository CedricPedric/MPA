
const express = require("express");
const { Sequelize, Model, Datatypes } = require("sequelize");
const app = express();
const port = 5000;
app.use(express.json());


const sequelize = new Sequelize('music_database', 'root', 'mysql',{
    host:'localhost',
    dialect: 'mysql'
})
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });


class Music extends Model { }

Music.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    artist: {
        type: Sequelize.STRING
    },
    genre: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    },


}, {
    timestamps: false,
    sequelize,
    modelName: 'music'
});


class User extends Model { }

User.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },

}, {
    timestamps: false,
    sequelize,
    modelName: 'users'
});


app.get("/api/music", (req, res) => {

    Music.findAll({
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    })
        .then((music) => {
            res.json(music);
        })
        .catch((error) => {
            console.error('Error retrieving data:', error);
            res.status(500).json({ error: 'Error retrieving data' });
        });


});

async function getUser(req) {
    let data = req.body;
    console.log(data);

    const x = await User.findOne({ where: { name: data.name, password: data.password } });
    if (x === null) {
        console.log('Not found!');
    } else {
        console.log(x instanceof User); // true
        console.log(x.name); // 'My Title'
    }
}
app.post("/api/getuser", (req, res) => {
    getUser(req);
}
)

app.post('/api/addmusic', (req, res) => {
    let data = req.body;
    /*res.send('Data Received: ' + JSON.stringify(data));*/
    console.log(data)
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});