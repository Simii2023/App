import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


//positive test case

test('evaluate an arithmetic op',()=>{

    const sum=10+10;
    expect(sum).toBe(20);
});

//negative test case

test('evaluate an arithmetic op',()=>{

    const sum=10+10;
    expect(sum).not.toBe(25);
});

//Another method of testeing


describe('tests for arithmetic ops',()=>{

  //positive test
  it('test addnums',()=>{
    const sum=10+10;
    expect(sum).toBe(20);
  });
  //negative test
it('test addNums 2',()=>{
  const sum=10+11;
  expect(sum).not.toBe(20);
});

});