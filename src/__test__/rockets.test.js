import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configStore';
import Rockets from '../components/rocket';

describe('display rockets component', () => {
  test('test if rocket component renders in the dom', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(screen.queryByText(/Reserve Rocket/)).toBeTruthy();
    expect(screen.queryByText(/Mission/)).toBeNull();
  });
  test('snapshot renders properly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
