const User = require('../models/Models.js')

// get user
const getUser = async(req, res) => {
    try {
        const {id} = req.params
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

//  get users friends
const getUserFriends = async(req, res) => {
    try {
        const {id} = req.params
        const user = await User.findById(id)
        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        )
        const friendsFormatted = friends.map(({_id, firstName, lastName, occupation, location, picturePath}) => {_id, firstName, lastName, occupation, location, picturePath})
        res.status(200).json(friendsFormatted)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

// update friend list
const addRemoveFriends = async(req, res) => {
    try {
        const {id , friendId} = req.params
        const user = await User.findById(id)
        const friend = await User.findById(friendId)

        if(user.friends.includes(friendId)){
            user.friends.filter(idx => idx !== friendId)
            friend.friends.filter(idx => idx !== id)
        }else{
            user.friends.push(friendId)
            friend.friends.push(id)
        }

        await user.save()
        await friend.save()

        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        )

        const friendsFormatted = friends.map(({_id, firsName, lastName, occupation, location, picturePath}) => {_id, firsName, lastName, occupation, location, picturePath})
        res.status(200).json(friendsFormatted)

    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = {getUser, addRemoveFriends, getUserFriends}