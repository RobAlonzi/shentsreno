import { renderComponent , expect } from '../config';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders App component', () => {
    expect(component).to.exist;
  });
});