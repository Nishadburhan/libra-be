const router = require('express').Router();

router.get('/books', (req, res) => {
    res.send('Books route');
});

module.exports = router;