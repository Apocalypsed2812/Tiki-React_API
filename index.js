const express = require('express');
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const path = require('path')
const credentials = require('./credentials')
const swaggerUI= require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const PORT = process.env.PORT || 5000

// app.use(cors())
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://tiki-react-ev76xp2r2-apocalypsed2812s-projects.vercel.app',
    'https://tiki-react-sepia.vercel.app',
    'https://tiki-react-api.onrender.com',
    'http://127.0.0.1:5500'
  ],
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  credentials: true
}));

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Ecomerce API",
            version: "1.0.0",
            description: "A simple Express Ecomerce API"
        },
        servers: [
            {
                url: "http://localhost:5000"
            }
        ],
    },
    apis: ["./swagger/*.js"],
};

const specs = swaggerJsDoc(options)

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))

require('./config/db.js')
const route = require("./routes")
app.use(cookieParser({ secret: credentials.COOKIE_SECRET }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
route(app)

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`)
})
