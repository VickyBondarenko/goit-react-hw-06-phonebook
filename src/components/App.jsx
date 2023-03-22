import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  removeContact,
  changeFilter,
} from '../redux/phonebookSlice';
import { List } from 'components/list/List';
import { Form } from 'components/form/Form';
import { Filter } from 'components/filter/Filter';
import styled from 'styled-components';

export const App = () => {
  const { filter, contacts } = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  const handleSubmit = contact => {
    dispatch(addContact(contact));
  };

  const handleDeleteUser = id => {
    dispatch(removeContact(id));
  };

  const onChangeSearch = e => {
    dispatch(changeFilter(e.target.value));
  };

  const applayFilter = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleCheck = user => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === user.name.toLowerCase()
      )
    ) {
      alert(`${user.name} is alredy in contact`);
    } else {
      handleSubmit(user);
    }
  };

  return (
    <Wraper>
      <h1>Phonebook</h1>
      <Form onCheck={handleCheck} />

      <h2>Contacts</h2>
      <Filter value={filter} onChangeSearch={onChangeSearch} />
      <List options={applayFilter()} onDeleteUser={handleDeleteUser} />
    </Wraper>
  );
};

const Wraper = styled.div`
  margin-left: 50px;
  margin-top: 50px;
  padding: 20px 50px;
`;
