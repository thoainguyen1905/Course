const express = require('express');
const router = express.Router();

const coursesControllers = require('../app/controllers/CoursesControllers');


router.get('/create',coursesControllers.create);
router.post('/store',coursesControllers.store);
router.post('/handler-form-action',coursesControllers.handleFormAction);
router.get('/:slug',coursesControllers.show);
router.put('/:id',coursesControllers.update);
router.patch('/:id/restore',coursesControllers.restore);
router.delete('/:id',coursesControllers.delete);
router.delete('/:id/force',coursesControllers.forceDelete);
router.get('/:id/edit',coursesControllers.edit);

module.exports = router;
