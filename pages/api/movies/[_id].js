import { ObjectId } from 'mongodb';
import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("sample_mflix");

       const movie = await db
           .collection("movies")
           .findOne({ _id: ObjectId(req.query._id)});

       res.json(movie);
   } catch (e) {
       console.error(e);
   }
};