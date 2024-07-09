const UserGroup = require('../models/UserGroup');

// Get User Groups
getUserGroups = async (req, res) => {
    try {
        const userGroups = await UserGroup.find();
        res.json(userGroups);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create User Group
createUserGroup = async (req, res) => {
    const { id, group_name, description, timeframes, users, profile, restrictions, url } = req.body;
    const newUserGroup = new UserGroup({
        id,
        group_name,
        description,
        timeframes,
        users,
        profile,
        restrictions,
        url
    });

    try {
        const savedUserGroup = await newUserGroup.save();
        res.status(201).json(savedUserGroup);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
module.exports = {getUserGroups , createUserGroup};