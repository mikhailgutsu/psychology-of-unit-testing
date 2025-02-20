import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ButtonComponent from './ButtonComponent';
import {Alert} from 'react-native';

jest.spyOn(Alert, 'alert');

test('Кнопка вызывает Alert при нажатии', () => {
  const {getByText} = render(<ButtonComponent />);

  const button = getByText('Press Me');
  fireEvent.press(button);

  expect(Alert.alert).toHaveBeenCalledWith('ok!');
});
