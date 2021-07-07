// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nextConnect from "next-connect"
import middleware from "../../middleware/database"
import {ObjectID} from "mongodb"

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {

  // let doc1 = await req.db.collection('daily').findOne()
  //   console.log(doc1);
  //   res.json(doc1);

  let {date} = req.query
  const dataModel = { "_id": new ObjectID(), "date": date, "calories": { "label": "Calories", "total": 0, "target": 0, "variant": 0 }, "carbs": { "label": "Carbs", "total": 0, "target": 0, "variant": 0 }, "fat": { "label" : "Fat", "total": 0, "target": 0, "variant": 0 }, "protein": { "label" : "Protein", "total": 0, "target": 0, "variant": 0 }}
  let doc = {}


  if(date){
    doc = await req.db.collection("daily").findOne({date: new Date(date)})
  } else {
    doc = await req.db.collection("daily").findOne()
  }
  if(doc == null) {
    doc = dataModel
  }

  res.json(doc)
})


export default handler




// export default function handler(req, res) {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'application/json')
//     res.end(JSON.stringify({ message: 'Hello from the Daily route' }))
// }
