
export default () => (req, res) => {
  console.log(req.value)
  res.status(200).send('create')
}