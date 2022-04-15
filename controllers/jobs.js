const getAllJob = async (req, res) => {
   res.send('All job')
}

const getJob = async (req, res) => {
   res.send('One job')
}

const createJob = async (req, res) => {
   res.json(req.user)
}

const updateJob = async (req, res) => {
   res.send('Update job')
}

const deleteJob = async (req, res) => {
   res.send('Delete job')
}

module.exports = {
   getAllJob,
   getJob,
   createJob,
   updateJob,
   deleteJob
}