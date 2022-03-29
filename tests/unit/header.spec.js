import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Header from '@/components/header/header.vue';

const localVue = createLocalVue()

localVue.use(Vuex)

const headerState = {
  namespaced: true,
  state: {
    showSignButtons: true
  }
}

const store = new Vuex.Store({
  modules: {
    headerState
  }
})

describe('Header.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Header, { 
      store, 
      localVue 
    })
  });

  it('renders Home', () => {
    const data = wrapper.get('[data-test = "Home"]').text();
    expect(data).toBe('Home');
  });

  // it('check for signin button', () => {
  //   // const data = wrapper.get('[data-test = "Sign-in"]');
  //   const data = wrapper.find('#signin');
  //   expect(data.exists()).toBe(false);
  // });

  // it('renders Home', () => {
  //   const data = wrapper.get('[data-test = "Sign-up"]').text();
  //   expect(data).toBe('Sign up');
  // });
});
