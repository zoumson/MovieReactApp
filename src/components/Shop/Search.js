import React, { useState } from 'react';
import AlertDialogSlide from '../Dialogue/AlertDialogSlide';
import { TextField } from '@material-ui/core';
const Search = (props) => {
  const { search, log } = props;
  const [searchValue, setSearchValue] = useState('');
  const [btn, setBtn] = useState(false);

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue('');
  };
  const callSearchFunction = () => {
    //e.preventDefault();
    search(searchValue);
    resetInputField();
  };
  const click = () => {
    console.log(alert('Adam'));
  };
  const showDialog = () => {
    setBtn(true);
  };

  return (
    <div>
      <form className="search">
        <TextField
          id="time"
          type="text"
          value={searchValue}
          onChange={handleSearchInputChanges}
          label="Movie"
          variant="filled"
          color="secondary"
          style={{ width: '60%' }}
        />

        <input
          onClick={(e) => {
            e.preventDefault();
            if (log) {
              callSearchFunction();
            } else showDialog();
          }}
          type="submit"
          value="SEARCH"
        />
      </form>
      {btn ? <AlertDialogSlide /> : <></>}
    </div>
  );
};

export default Search;
