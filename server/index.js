const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const multer = require('multer')
const helmet = require('helmet')
const morgan = require('morgan')
const path = require('path')
const port = process.env.PORT || 5000
// const { fileURLToPath } = require('url')


// configuration
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)


dotenv.config()
const app = express()
app.use(cors())
app.use(express.json({ limit: '30mb',extended: true }))
app.use(express.urlencoded({ limit: '30mb',extended: true }));
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:'cross-origin'}))
app.use(morgan('common'))
app.use('/assests', express.static(path.join(__dirname, 'public/assets')))

// storage

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/assest")
    },
    filename: (req,file,cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({storage})

app.post('auth/register', upload.single('picture'), register)


// connect to db

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(() => app.listen(port, () => console.log("connected to ", port)))
.catch((err) => console.log(err))