const withAuth = async (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect('/login')
    console.log(req.session)
  } else {
    next();
  }
};

module.exports = withAuth;