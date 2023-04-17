const router = require('express').Router();
const { getThoughts , getSingleThought, updateThought, deleteThought , createThought , addReaction , removeReaction} = require('../../controllers/thoughtController');

// Finds all users
router.route('/').get(getThoughts).post(createThought);

// /api/users/:userId
router
.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;