const mongoose=require("mongoose")
const { Schema } = mongoose;

const bookSchema=mongoose.Schema({
	 user : { type: Schema.Types.ObjectId, ref: 'Users' },
	 flight : { type: Schema.Types.ObjectId, ref: 'flights' }
})


const BookModel=mongoose.model("booking",bookSchema)


module.exports={BookModel}