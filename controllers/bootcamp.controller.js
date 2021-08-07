// @desc   Get all bootcamp
// @route  GET /api/v1/bootcamps/
// @acess  public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success : true, message : "show all bootcamps"})
}

// @desc   Get single bootcamp
// @route  GET /api/v1/bootcamps/:id
// @acess  public
exports.getSingleBootcamp = (req, res, next) => {
    res.status(200).json({success : true, message : `show Bootcamp ${req.params.id}`})
}

// @desc   Create Single bootcamp
// @route  POST /api/v1/bootcamps/
// @acess  private
exports.createBootcamp = (req, res, next) => {
    res.status(201).json({success : true, message : `created Bootcamp successfull`})
}

// @desc   Update Single bootcamp
// @route  PUt /api/v1/bootcamps/:id
// @acess  private
exports.updateBootcamp = (req, res, next) => {
    res.status(201).json({success : true, message : `updated Bootcamp ${req.params.id}`})
}

// @desc   Get all bootcamp
// @route  DELETE /api/v1/bootcamps/:id
// @acess  private
exports.deleteBootcamp = (req, res, next) => {
    res.status(201).json({success : true, message : `deleted Bootcamp ${req.params.id}`})
}