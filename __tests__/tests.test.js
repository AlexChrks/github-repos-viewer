import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import SignIn from '../pages/auth/sign-in';
import Preloader from '../components/Preloader/Preloader'
import ReposItem from '../components/ReposList/ReposItem/RepositoryItem'

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Sign In', () => {
  it('should render correctly', () => {
    const form = shallow(
      <SignIn />
    );
    expect(shallowToJson(form)).toMatchSnapshot();
  });
});


describe('Preloader', () => {
  it('should render correctly', () => {
    const preloader = shallow(
      <Preloader/>
    );
    expect(shallowToJson(preloader)).toMatchSnapshot();
  });
});

describe('RepositoryItem', () => {
  it('should render correctly', () => {
    const repoItem = shallow(
      <ReposItem/>
    );
    expect(shallowToJson(repoItem)).toMatchSnapshot();
  });
});
