import Contact from '../models/contacts.js'
import createPath from '../helpers/create-path.js'

const getContacts = (req, res) => {
  const title = 'Contacts';
  Contact
    .find()
    .then((contacts) => res.render(createPath('contacts'), { contacts, title }))
    .catch((error) => {
      console.error(error);
      res.render(createPath('error'), { title: 'Error' })
    })
};

export { getContacts };
