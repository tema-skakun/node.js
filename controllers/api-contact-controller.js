import Contact from '../models/contacts.js'

const handleError = (res, error) => {
  res.status(500).send(error.message);
};

const getContacts = (req, res) => {
  Contact
    .find()
    .then((contacts) => res.status(200).json(contacts))
    .catch((error) => handleError(res, error));
};

export { getContacts };
