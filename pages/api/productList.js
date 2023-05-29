/** @format */
import { pList } from "../../utils";
function handler(req, res) {
  res.status(201).json({ pList });
}
export default handler;
