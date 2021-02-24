const ProductSchema = require('../models/productSchema');

async function index (req, res) {

    const { id = null } = req.params;
    const { format = 'complete' } = req.body;

    if (!id) {
        res.json({ error: "Id is required" });
    } else {

        try {

            const response = await ProductSchema.findOne({
                id,
            });


            if (response == null) {
                return res.json({
                    data: {},
                    message: `Product with ${id} not found!`
                });
            }

            if (format === 'compact') {
                const {
                    name,
                    price,
                    status,
                    categories
                } = product
                res.json({
                    data: {
                        name,
                        price,
                        status,
                        categories
                    },
                    status: `OK`


                })

            } else {
                res.json({
                    data: response,
                    status: `OK`
                });
            }



        } catch (error) {
            res.json({ message: error, status: 'BAD_REQUEST' })


        }
    }
}
module.exports = { index }  
