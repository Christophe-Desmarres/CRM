import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AuthForm from './AuthForm';

describe('AuthForm', () => {
  test('renders AuthForm component', () => {
    render(<AuthForm />);
    const formElement = screen.getByTestId('auth-form');
    expect(formElement).toBeInTheDocument();
  });

  test('renders email input', () => {
    render(<AuthForm />);
    const emailInput = screen.getByTestId('email-input');
    expect(emailInput).toBeInTheDocument();
  });

  test('renders password input', () => {
    render(<AuthForm />);
    const passwordInput = screen.getByTestId('password-input');
    expect(passwordInput).toBeInTheDocument();
  });

  test('renders submit button', () => {
    render(<AuthForm />);
    const submitButton = screen.getByTestId('submit-button');
    expect(submitButton).toBeInTheDocument();
  });

  test('calls onSubmit function when form is submitted', () => {
    const mockOnSubmit = jest.fn();
    render(<AuthForm onSubmit={mockOnSubmit} />);
    const form = screen.getByTestId('auth-form');
    fireEvent.submit(form);
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });

  test('displays error message when email is not provided', async () => {
    render(<AuthForm />);
    const form = screen.getByTestId('auth-form');
    fireEvent.submit(form);
    const errorMessage = await screen.findByText('Email is required');
    expect(errorMessage).toBeInTheDocument();
  });

  test('displays error message when password is not provided', async () => {
    render(<AuthForm />);
    const form = screen.getByTestId('auth-form');
    fireEvent.submit(form);
    const errorMessage = await screen.findByText('Password is required');
    expect(errorMessage).toBeInTheDocument();
  });

  test('toggles password visibility when eye icon is clicked', () => {
    render(<AuthForm />);
    const passwordInput = screen.getByTestId('password-input');
    const eyeIcon = screen.getByTestId('eye-icon');
    userEvent.click(eyeIcon);
    expect(passwordInput.type).toBe('text');
    userEvent.click(eyeIcon);
    expect(passwordInput.type).toBe('password');
  });
});
