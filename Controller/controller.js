const getContact = (req,res) => {
    res.status(200).json({ message : "Get All Contacts"})
}

const get1Contact = (req,res) => {
    res.status(200).json({message: "Get specific contact"})
}

const createContact = (req,res) => {
    console.log(req.body)
    res.status(200).json({message: "Create contact"})
}

const updateContact = (req,res) => {
    res.status(200).json({message: "Update contact"})
}

const deleteContact = (req,res) => {
    res.status(200).json({message: "Delete contact"})
}

module.exports = { getContact, get1Contact, createContact, updateContact, deleteContact }