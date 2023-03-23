import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/phonebookSlice';

export const Filter = () => {
  const { filter } = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  const onChangeSearch = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className="filter">
      <p>Find contacts by name</p>
      <input
        type="text"
        placeholder="Type to search ..."
        value={filter}
        onChange={onChangeSearch}
      />
    </div>
  );
};
