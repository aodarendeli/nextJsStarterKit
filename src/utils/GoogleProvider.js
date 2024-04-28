import GoogleProvider from "next-auth/providers/google";
import mongoDb from "../config/database";
import User from "../models/User";

export const AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        })
    ],
    callbacks: {
        async signIn({ profile }) {
            await mongoDb();
            const userExist = await User.findOne({ email: profile.email })
            if(!userExist){
                const username = profile.name.slice(0,20) 
                await User.create({
                    email: profile.email,
                    username,
                    image: profile.picture
                })
            }
            return true;
        },
        async session({ session }) {
            const user = await User.findOne({email: session.user.email})
            console.log("ozgur",user);
            session.user.id = user._id.toString();
            return session;
        },
    }
}