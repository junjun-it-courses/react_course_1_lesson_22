import TodoBox from "../components/TodoBox";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('TodoBox 1', async () => {
    render(<TodoBox />);
    const input = screen.getByRole('textbox');
    const submitBtn = screen.getByRole('button', { name: 'add' });

    userEvent.type(input, 'new task');
    userEvent.click(submitBtn);

    expect(await screen.findByRole('link', { name: 'new task' })).toBeInTheDocument();
});