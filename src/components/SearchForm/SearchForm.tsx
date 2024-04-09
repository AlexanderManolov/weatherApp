import { PropsWithChildren } from 'react'
import { SearchFormWrapper, SearchInput, SubmitButton } from './SearchForm.styled'
import { SearchFormProps } from './SearchForm.types'

const SearchForm = ({ onSubmitHandler }: PropsWithChildren<SearchFormProps>) => {
  return (
    <SearchFormWrapper
      action='search'
      onSubmit={onSubmitHandler}
      name='search-form'
    >
      <SearchInput
        id='searchQuery'
        type='search'
        name='search-input'
        required={true}
        placeholder='Search for a city'
      />
      <SubmitButton type='submit' title='Submit your search'>
        <img src="https://cdn-icons-png.flaticon.com/512/711/711319.png" alt="Search Icon" aria-label='Submit' />
      </SubmitButton>
    </SearchFormWrapper>
  )
}

export default SearchForm