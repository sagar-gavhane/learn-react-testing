/* eslint-disable no-unused-vars */
import React from 'react'
import App from './App'
import { render, cleanup, fireEvent } from '@testing-library/react'
import 'jest-dom/extend-expect'

afterAll(cleanup);

test('should work', () => {
  const { debug, getByTestId } = render(<App />)
  const firstName = getByTestId('firstName');
  expect(firstName.tagName).toBe('INPUT')
  expect(firstName.getAttribute('value')).toBe('')

  const inputFillEvent = { target: { value: 'xyz' } }
  fireEvent.change(firstName, inputFillEvent)
  expect(firstName.getAttribute('value')).toBe('xyz')
})
