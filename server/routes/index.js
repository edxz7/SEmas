//steps needed immports
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";

const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Working' });
});

module.exports = router;
