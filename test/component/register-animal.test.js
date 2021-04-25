import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import RegisterCat from '../../pages/animal/register'

test('The register component shows the title, the cat input field, the breed dropdown, the genders radio butons, the vaccines checkboxes, the accept terms and conditions checkbox and the register button', () => {
  render(<RegisterCat />);

  expect(screen.getByRole('heading', { name: /registro de gatos/i })).toBeInTheDocument()
  expect(screen.getByRole('textbox', { name: /nombre del gato/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /raza ​/i })).toBeInTheDocument();
  expect(screen.getByRole('radio', { name: /hembra/i })).toBeInTheDocument();
  expect(screen.getByRole('radio', { name: /macho/i })).toBeInTheDocument();
  expect(screen.getByRole('checkbox', { name: /moquillo/i })).toBeInTheDocument();
  expect(screen.getByRole('checkbox', { name: /gripe felina/i })).toBeInTheDocument();
  expect(screen.getByRole('checkbox', { name: /leucemia felina/i })).toBeInTheDocument();
  expect(screen.getByRole('checkbox', { name: /peritonitis infecciosa felina/i })).toBeInTheDocument();
  expect(screen.getByRole('checkbox', { name: /rabia/i })).toBeInTheDocument();
  expect(screen.getByRole('checkbox', { name: /acepto términos y condiciones/i })).toBeInTheDocument();
  expect(screen.getByText(/registrar/i)).toBeInTheDocument();
});

test('The female option should be checked by default', () => {
  render(<RegisterCat />);

  expect(screen.getByRole('radio', { name: /hembra/i })).toBeChecked();
  expect(screen.getByRole('radio', { name: /macho/i })).not.toBeChecked();
});

test('When the user selects a different gender, it should be checked', () => {
  render(<RegisterCat />);

  fireEvent.click(screen.getByRole('radio', { name: /macho/i }))

  expect(screen.getByRole('radio', { name: /hembra/i })).not.toBeChecked();
  expect(screen.getByRole('radio', { name: /macho/i })).toBeChecked();
});

test('The register button should be disabled by deffect', () => {
  render(<RegisterCat />);

  expect(screen.getByTestId("register-button")).toHaveAttribute("disabled")
});

test('When the accept terms and conditions checkbox is clicked, then the register button is enabled', () => {
  render(<RegisterCat />);

  fireEvent.click(screen.getByRole('checkbox', { name: /acepto términos y condiciones/i }));
  expect(screen.getByTestId("register-button")).not.toHaveAttribute("disabled")
});
