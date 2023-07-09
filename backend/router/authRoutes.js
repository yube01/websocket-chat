import express from "express"
import { login } from "../controller/auth.js"
import cors from "cors"

const router = express.Router()


router.use(cors({
    credentials:true,
    origin:"http://localhost:5173"

}))

router.post("/login", login)


export default router