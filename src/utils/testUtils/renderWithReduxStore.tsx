import { render } from "@testing-library/react";
import { Provider } from 'react-redux';

import { store } from "store";

export const renderWithReduxStore = (Component: React.ReactNode) => {
  return (
    render(<Provider store={store}>{Component}</Provider>)
  );
}