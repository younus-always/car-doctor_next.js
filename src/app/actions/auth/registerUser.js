"use server"
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import bcrypt from 'bcrypt';

export const registerUser = async (payload) => {
      const { email, password } = payload;
      const userCollection = dbConnect(collectionNameObj.userCollection);

      // Validation
      if (!email || !password) return { "success": false };
      const user = await userCollection.findOne({ email: payload.email });

      if (!user) {
            const hashedPassword = await bcrypt.hash(password, 10);
            payload.password = hashedPassword; // password encrypted
            const result = await userCollection.insertOne(payload);
            const { acknowledged, insertedId } = result;
            return { acknowledged, insertedId }
      }
      return { "success": false };
};