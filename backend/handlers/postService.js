const postService = async (req, res) => {
    try {    
        res.status(201).json({
        message: "The data was received successfully",
        data: req.body,
        });
    } 
    catch (error) {
        res.status(400).json({
        error: true,
        status: 400,
        message: error.message || 'Unknown error',
        });
    }
};

module.exports = { 
    postService,
};
