import { shallow } from 'enzyme';
import App from './App';

describe("App", () => {
  it("Should render only one root div with data-id=app", () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('[data-id="app"]').length).toBe(1);
  })
})