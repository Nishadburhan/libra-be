const router = require('express').Router();

router.get('/books', (req, res) => {
 res.send('This is books route');
});

module.exports = router;