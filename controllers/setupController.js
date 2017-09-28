var Rooms = require('../models/roomModel');
var Flats = require('../models/flatModel');

module.exports = (app) => {

    app.get('/api/setupRooms', (req, res) => {
        //seed database
        var starterRooms = [
            {
                username: 'admin',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'admin',
                todo: 'Feed dog',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'admin',
                todo: 'Learn Node',
                isDone: false,
                hasAttachment: false
            }
        ];

        app.get('/api/setupFlats', (req, res) => {
            const starterFlats = [

            ];
        });


        Rooms.create(starterRooms, (err, results) => {
            res.send(results);
        });

        Flats.create(starterFlats, (err, results) => {
            res.send(results);
        });
    });
};