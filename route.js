import express from 'express';
export const router = express.Router()
import path from 'path';
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)


router.use(express.static(path.join(__dirname, "public"))); 

router.get('/', (req, res) => {
res.sendFile(path.join(__dirname, "public", "home.html"));
})
router.get('/about', (req, res) => {
res.sendFile(path.join(__dirname, "public", "about.html"));
})
router.get('/contact', (req, res) => {
res.sendFile(path.join(__dirname, "public", "contact.html"));
})
router.get('/join', (req, res) => {
res.sendFile(path.join(__dirname, "public", "join.html"));
})
router.get('/staff', (req, res) => {
res.sendFile(path.join(__dirname, "public", "staff.html"));
})
router.get('/faq', (req, res) => {
res.sendFile(path.join(__dirname, "public", "faq.html"));
})
router.get('/features', (req, res) => {
res.sendFile(path.join(__dirname, "public", "features.html"));
})
router.get('/priceing', (req, res) => {
res.sendFile(path.join(__dirname, "public", "priceing.html"));
})
router.get('/login', (req, res) => {
res.sendFile(path.join(__dirname, "public", "login.html"));
})