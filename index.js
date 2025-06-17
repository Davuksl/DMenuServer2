const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 8080

app.use(bodyParser.json())

app.post('/telemetry', (req, res) => {
    const { directory, identity, region, userid } = req.body
    console.log('[Telemetry]', { directory, identity, region, userid })
    res.sendStatus(200)
})

app.post('/syncdata', (req, res) => {
    const { directory, region, data } = req.body
    console.log('[SyncData]', { directory, region, data })
    res.sendStatus(200)
})

app.post('/heartbeat', (req, res) => {
    console.log('[Heartbeat]', new Date().toISOString())
    res.sendStatus(200)
})

app.post('/reportban', (req, res) => {
    const { error, version, data } = req.body
    console.log('[ReportBan]', { error, version, data })
    res.sendStatus(200)
})

app.listen(port, () => {
    console.log(`Something on http://localhost:${port}`)
})