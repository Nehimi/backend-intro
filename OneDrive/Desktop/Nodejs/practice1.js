//Setting route to be accessed by users to send data with post requests.

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/submit', (req, res) => {
    const { name, email } = req.body;  
    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required.' });
    }
    res.status(200).json({ message: 'Data received successfully.', data: { name, email } });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 
