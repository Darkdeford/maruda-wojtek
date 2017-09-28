var Rooms = require('../models/roomModel');
var Flats = require('../models/flatModel');
var bodyParser = require('body-parser');

module.exports = (app) => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/room/', (req, res) => {
        Rooms.find({ username: req.params.username }, (err, rooms) => {
            if (err) throw err;

            res.send(rooms);
        });
    });

    app.get('/api/room/:id', (req, res) => {
        Rooms.findById({ _id: req.params.id }, (err, room) => {
            if (err) throw err;

            res.send(room);
        })
    });

    app.post('/api/room', (req, res) => {
        if (req.body.id) {
            Rooms.findByIdAndUpdate(req.body.id,
                {
                    title: req.body.title,
                    price: req.body.price,
                    address: req.body.address,
                    charges: req.body.charges,
                    area: req.body.area,
                    deposit: req.body.deposit,
                    availableFrom: req.body.availableFrom,
                    availableTo: req.body.availableTo,
                    minRentTime: req.body.minRentTime,
                    isOwner: req.body.isOwner,
                    isAgency: req.body.isAgency,
                    description: req.body.description,
                    hasAttachment: req.body.hasAttachment
                }, (err, room) => {
                    if (err) throw err;

                    res.send('Success! Room has been updated!');
                }
            );
        } else {
            var newRoom = Rooms({
                title: req.body.title,
                price: req.body.price,
                address: req.body.address,
                charges: req.body.charges,
                area: req.body.area,
                deposit: req.body.deposit,
                availableFrom: req.body.availableFrom,
                availableTo: req.body.availableTo,
                minRentTime: req.body.minRentTime,
                isOwner: req.body.isOwner,
                isAgency: req.body.isAgency,
                description: req.body.description,
                hasAttachment: req.body.hasAttachment
            });

            newRoom.save((err, room) => {
                if (err) throw err;

                res.send('Success! Room has been created!');
            });
        }
    });

    app.delete('/api/room', (req, res) => {
        Todos.findByIdAndRemove(req.body.id, (err, room) =>  {
            if (err) throw err;

            res.send('Success! Room has been removed!');
        })
    });

    app.get('/api/flat/', (req, res) => {
        Flats.find({ username: req.params.username }, (err, flats) => {
            if (err) throw err;

            res.send(flats);
        });
    });

    app.get('/api/flat/:id', (req, res) => {
        Rooms.findById({ _id: req.params.id }, (err, flat) => {
            if (err) throw err;

            res.send(flat);
        })
    });

    app.post('/api/flat', (req, res) => {
        if (req.body.id) {
            Flats.findByIdAndUpdate(req.body.id,
                {
                    title: req.body.title,
                    price: req.body.price,
                    address: req.body.address,
                    charges: req.body.charges,
                    area: req.body.area,
                    deposit: req.body.deposit,
                    availableFrom: req.body.availableFrom,
                    availableTo: req.body.availableTo,
                    minRentTime: req.body.minRentTime,
                    isOwner: req.body.isOwner,
                    isAgency: req.body.isAgency,
                    description: req.body.description,
                    noOfRooms: req.body.noOfRooms,
                    isGarage: req.body.isGarage
                }, (err, room) => {
                    if (err) throw err;

                    res.send('Success! Flat has been updated!');
                }
            );
        } else {
            var newFlat = Flats({
                title: req.body.title,
                price: req.body.price,
                address: req.body.address,
                charges: req.body.charges,
                area: req.body.area,
                deposit: req.body.deposit,
                availableFrom: req.body.availableFrom,
                availableTo: req.body.availableTo,
                minRentTime: req.body.minRentTime,
                isOwner: req.body.isOwner,
                isAgency: req.body.isAgency,
                description: req.body.description,
                noOfRooms: req.body.noOfRooms,
                isGarage: req.body.isGarage
            });

            newFlat.save((err, flat) => {
                if (err) throw err;

                res.send('Success! Flat has been created!');
            });
        }
    });

    app.delete('/api/flat', (req, res) => {
        Todos.findByIdAndRemove(req.body.id, (err, flat) =>  {
            if (err) throw err;

            res.send('Success! Flat has been removed!');
        })
    });
};