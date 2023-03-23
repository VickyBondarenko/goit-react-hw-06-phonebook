import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../redux/phonebookSlice';
import css from './listStyle.module.css';

export const List = () => {
  const { contacts, filter } = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  const applayFilter = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  function handleDelete(e) {
    dispatch(removeContact(e.target.id));
  }

  return (
    <ul className={css.list}>
      {applayFilter().map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <p>
            {name}: {number}
          </p>
          <button className={css.list_btn} onClick={handleDelete} id={id}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
