let img = (req, res, next) => {


    const fileName = Math.random();
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send({
            error: 'File Mavjud emas  !. ',
        });
    }

    // Tekshrish 
    let sampleFile = req.files.img;
    let mimi = req.files.img.mimetype.split("/");

    if (!(mimi[0] == 'image'))
        return res.status(400).send({
            error: "File turi image bo'lshi kerag!."
        });

    if (sampleFile.size > 1000000)
        return res.status(400).send({
            error: "File hajmi Juda katta !."
        });

    // mv()  bilan saqlaymiz 
    sampleFile.mv(`./public/${fileName}.${mimi[1]}`, async(err) => {
        if (err)
            return res.status(500).send({
                error: "File Yuklanmadi !."
            });
        req.fileId = fileName + "." + mimi[1]
        next()
    })
}

module.exports = img