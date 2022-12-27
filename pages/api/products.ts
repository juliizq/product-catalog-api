import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try{
    const db = (await clientPromise).db('test');
    const collection = db.collection('products');
    const results = await collection
      .find({})
      .toArray();
      
      res.status(200).json(results)
  } catch (e){
    console.error(e)
    res.status(500);
  }
}