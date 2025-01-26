const express = require('express');
const cors = require('cors');

const client = require('./config/gRPC_Client');
const { startGRPCServer } = require('./config/grpc_Server');
const { ConnectedDB } = require('../src/config/Db');

const expressServer = () => {
    const app = express();
    app.use(express.json());
    app.use(cors());

    app.get('/api/questions', (req, res) => {
        const { Searchquery, limit, page } = req.query;
        console.log("Searchquery:", Searchquery);
        console.log("limit:", limit);
        console.log("page:", page);

        if (!Searchquery || Searchquery.trim() === "") {
            return res.status(400).send({ msg: "Enter query to search" });
        }
        client.GetQuestion({ Searchquery, limit: parseInt(limit), page: parseInt(page) }, (err, response) => {
            if (err) {
                console.log("gRPC error", err);
                res.status(500).json({ error: "Failed to fetch questions" });
            } else {
                res.json(response);
            }
        });
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Express server is running on http://localhost:${PORT}`);
    });
};

const startServers = async () => {
    try {
        await ConnectedDB(); // Connect to MongoDB
        expressServer(); // Start Express server
        startGRPCServer(); // Start gRPC server
    } catch (error) {
        console.error("Application startup failed:", error);
        process.exit(1);
    }
};

startServers();