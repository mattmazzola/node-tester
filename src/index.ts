import express from 'express'

const app = express()

app.get('/', (_, res) => res.send('Hello Typescript World with custom deploy script! EDITED 2/21/2019'))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Example app edited app listening on port ${port}!`))