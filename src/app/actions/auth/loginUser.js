"use server"
import bcrypt from "bcrypt";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

export const loginUser = async (payload) => {
      console.log(payload)
      const { email, password } = payload;
      const userCollection = dbConnect(collectionNameObj.userCollection);
      const user = await userCollection.findOne({ email: email });
      if (!user) return null
      // check password
      const isPasswordOk = bcrypt.compare(user.password, password);
      if(!isPasswordOk) return null
      return user
}