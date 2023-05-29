/** @format */

function handler(req, res) {
  console.log(req, res);
  res.status(200).json({ message: "hellow world" });
}

export default handler;
