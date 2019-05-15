import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import Display from './Display';

describe('<Display />', () => {
  it('initial state open unlocked', () => {
    const { getByText } = render(<Display />);
    expect(getByText('Unlocked'));
    expect(getByText('Open'));
  });
  it('accept state props', () => {
    const { getByText } = render(<Display locked={true} closed={true}/>);
    expect(getByText('Locked'));
    expect(getByText('Closed'));
  });
});
