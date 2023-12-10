const express   = require("express")
const cors      = require("cors")

const app       = express();

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended : true }))


// routers
const router = require('./routes/pesananRouter')
app.use('/api/pesanan', router)

const routerMobil = require('./routes/mobilRouter')
app.use('/api/mobil', routerMobil)

const routerMotor = require('./routes/motorRouter')
app.use('/api/motor', routerMotor)

const routerPemesan = require('./routes/pemesanRouter')
app.use('/api/pemesan', routerPemesan)

const routerPembayaran = require('./routes/pembayaranRouter')
app.use('/api/pembayaran', routerPembayaran)

// testing api
app.get('/', (req, res) => {
    res.json({ message: "hello from api" })
})

// port 

const PORT = process.env.PORT || 3000

// server

app.listen(PORT, () => {
    console.log( `server is running on port ${PORT}` )
})