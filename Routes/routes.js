const express = require('express')
const router = express.Router()
const { getContact, get1Contact, createContact, updateContact, deleteContact } = require("../Controller/controller")

router.route("/").get(getContact).post(createContact)

router.route("/:id").get(get1Contact).put(updateContact).delete(deleteContact)

module.exports = router