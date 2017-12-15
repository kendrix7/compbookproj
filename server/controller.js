module.exports = {
    
    create_book: (req, res, next) => {
        db.create_book([req.params.body])
        .then(response => {
            res.status(200).send(response)
        })
        .catch(err => res.status(500).send(err))
    }
}