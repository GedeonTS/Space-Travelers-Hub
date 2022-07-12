import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configStore';
import Missions from '../components/Missions';

describe('display missions component', () => {
  test('test if mission component renders in the dom', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(screen.queryByText(/Reserve Rockets/)).toBeNull();
  });
  test('snapshot renders properly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
