import { useState } from 'react';
import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  Input,
  SearchFormLabel,
} from './searchbar.styled';
export default function Searchbar({ onSubmit }) {
  const [imageName, setImageName] = useState('');

  const handleNameChange = event => {
    event.preventDefault();
    setImageName(event.currentTarget.value.toLowerCase());
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (imageName.trim() === '') {
      alert('Enter data search');
      return;
    }
    onSubmit(imageName);
  };

  return (
    <SearchBar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormLabel>Search</SearchFormLabel>
        </SearchFormButton>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          value={imageName}
          onChange={handleNameChange}
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchBar>
  );
}
