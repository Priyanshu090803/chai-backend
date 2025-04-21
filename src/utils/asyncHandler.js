
// const asyncHandler=()=>{async()=>{
    
// }}

// const asyncHandler=(fn)=>async(req,res,next)=>{
//     try{

//     }
//     catch(err){
//         res.status(err.code || 500).json({
//             sucess:false,
//             message:err.message
//         })
//     }
// }


const asyncHandler =(requestHandler)=>{
    (req,res,next)=>{
        Promise
        .resolve(requestHandler(req,res,next))
        .catch((err)=>next(err))
    }
}

export {asyncHandler}


// ye hmare wrapper function honge , bht jagah kam aenge like a utility kam ayenge