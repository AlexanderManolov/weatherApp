import styled from 'styled-components'

export const SearchFormWrapper = styled.form`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 2.5rem;
  white-space: nowrap;
`

export const SearchInput = styled.input`
  transition: box-shadow .4s ease, background .4s ease;
  border: 0;
  border-radius: 2px;
  box-shadow: inset 0 0 0 1px #C4D1EB;
  background: #FFFFFF;
  padding-right: 3rem;
  padding-left: 1rem;
  width: 100%;
  height: 100%;
`

export const SubmitButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  border: 0;
  border-radius: 0 1px 1px 0;
  background-color: #b3b3b3;
  padding: 10px;
  width: 3rem;
  height: 100%;
`
