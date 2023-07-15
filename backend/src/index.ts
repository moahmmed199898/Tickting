import express from "express"
import {assetRouter} from "./Routes/Assets"
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use("/assets", assetRouter)

app.listen(2000, () => {
    console.log(`backend listening on port 2000`)
})