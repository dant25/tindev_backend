const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        const { devId } = req.params;
        const { user } = req.headers;

        const targetDev = await Dev.findById(devId);
        const loggedDev = await Dev.findById(user);

        if (!targetDev) {
            return res.status(400).json({ error: 'Dev not exists' });
        }

        if (targetDev.likes.includes(loggedDev._id)) {
            return res.json({ status: 'Deu Match!' });
        }

        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();

        return res.json({ status: 'like computado' });
    }
}