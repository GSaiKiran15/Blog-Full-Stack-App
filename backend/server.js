import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import { query } from "./db.js";

const app = express()
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/posts', async(req, res) => {
    try {
        const { rows } = await query('SELECT * FROM blogs;');
        console.log(rows);
        res.json(rows);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error fetching posts' });
      }
})

app.get('/trending', async(req, res) => {
    try{
        const { rows } = await query('SELECT * FROM blogs ORDER BY upvotes DESC LIMIT 5;')
        console.log(rows);
        res.json(rows)
    }
    catch (err) {
        console.log(err);
        res.status(500).json({error: 'Error Fetching Trending Posts'})
    }
})

app.get('/post/:id', async(req, res) => {
    try{
        const id = parseInt(req.params.id)
        const { rows } = await query('select * from blogs where id == $1', [id])
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Post not found' });
          }
    }catch(err){
        console.log(err);
        res.status(500).json({error: `Error Fetching ${req.params.id} Post`})
    }
})

app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
  });