const {Router} = require('express')
const { getUserGroups ,createUserGroup} = require('../controller/userGroupController');

const router = Router();
router.get('/usergroups', getUserGroups);
router.post('/update', createUserGroup);

module.exports = router;


