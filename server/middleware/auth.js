import { OAuth2Client } from "google-auth-library";

const client= new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

const auth= async(req,res,next)=>{
  try {
    const token= req.headers.authorization.split(' ')[1]
    const googleToken= token.length > 2000
    if (googleToken){
      const ticket= await client.verifyIdToken({
        idToken:token,
        audience:process.env.GOOGLE_CLIENT_ID
      })
      const payload= ticket.getPayload()
      req.user={id:payload.sub, name:payload.name, photoURL:payload.picture}
    }else{
      //to do: verify custom token
    }
    next()
  } catch (error) {
    console.log(error)
    res.status(401).json({success:false,message:'something is wrong with user authorization!'})
  }
}

export default auth;