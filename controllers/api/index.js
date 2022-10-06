const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const commentRoutes = require('./comment-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const aboutRoutes = require('./about-routes.js')

router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/about', aboutRoutes)

module.exports = router;