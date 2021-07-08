// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nextConnect from "next-connect"
import middleware from "../../middleware/database"
import {ObjectID} from "mongodb"
import dayjs from "dayjs"

const handler = nextConnect()

handler.use(middleware)

// handler.get(async (req, res) => {
//   let {date} = req.query
//   let doc1 = await req.db.collection('daily').findOne({date: new Date(date)})
//     console.log(doc1);
//     res.json(doc1);
// })

handler.get(async (req, res) => {
 

  let {date} = req.query
  const dataModel = { "_id": new ObjectID(), "date": date, "calories": { "label": "Calories", "total": 0, "target": 0, "variant": 0 }, "carbs": { "label": "Carbs", "total": 0, "target": 0, "variant": 0 }, "fat": { "label" : "Fat", "total": 0, "target": 0, "variant": 0 }, "protein": { "label" : "Protein", "total": 0, "target": 0, "variant": 0 }}
  let doc = {}


  if(date){
    doc = await req.db.collection("daily").findOne({date: dayjs(date).format()})
  } else {
    doc = await req.db.collection("daily").findOne()
  }
  if(doc == null) {
    doc = dataModel
  }

  res.json(doc)
})

handler.post(async (req, res) => {

  let data = req.body
  data = JSON.parse(data);
  const newDate = dayjs(data.date).format()
  console.log(newDate);
  let doc = await req.db.collection('daily').updateOne({date: newDate}, {$set:data}, {upsert: true})

  res.json({message: 'ok'});
 
}) 


export default handler




// export default function handler(req, res) {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'application/json')
//     res.end(JSON.stringify({ message: 'Hello from the Daily route' }))
// }
