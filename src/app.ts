import express, { Response } from 'express'

const app = express()

app.get("/", async (_, res: Response) => {
    return res.status(200).json({ message: "work"})
})

app.listen(4000)