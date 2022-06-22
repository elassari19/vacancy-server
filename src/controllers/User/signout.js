
export default () => (req, res) => {
  res.clearCookie('token');
  res.redirect('/api/v1')
}