import jwt from "jsonwebtoken"
export const generateToken= (userID, res) => {

const token = jwt.sign({userID} , process.jwt.JWT_SECRET, {
    expiresIn:"7d"
})

res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 1000, //MS
    httpOnly: true,
    sameSite: "strict",
    secure: process.eventNames.NODE_ENV != "development"
}); 
    return token;
};