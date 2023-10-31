
import Contact from "../contact";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';


describe('ContactUs Component', () => {
	beforeAll(() => {
		// console.log('beforeAll')
	});

	beforeEach(() => {
		render(<Contact/>);
	});

	afterEach(() => {
		// console.log('afterEach')
	});

	


	it('Should contain a button', () => {
		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
	});

	it("Should contain heading", () => {
		const heading = screen.getByRole('heading');
		expect(heading).toBeInTheDocument();
	});
});