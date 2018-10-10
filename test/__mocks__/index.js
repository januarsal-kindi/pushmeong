
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const getters = {
    getposts: jest.fn().mockReturnValue([
        {
            userId: 1,
            id: 1,
            title: 'hello world',
            body: 'hello juga'
        },
        {
            userId: 2,
            id: 2,
            title: 'hello mahfud',
            body: 'hello jokowi'
        },
        {
            userId: 1,
            id: 3,
            title: 'hello',
            body: 'hello juga kamu'
        },
    ]),
    getpostcount: jest.fn().mockReturnValue(3),

    getisloadingpost: jest.fn().mockReturnValue(true),

};

export const mutations = {
    FETCH_START: jest.fn(),
    MUTATE_ADD_POST: jest.fn(),
    MUTATE_SET_POST: jest.fn(),
};

export const actions = {
    fetchpost: jest.fn(),
    getposts: jest.fn(),
    addPostAction: jest.fn()

};

export const state = {
    posts: [
        {
            userId: 1,
            id: 1,
            title: 'hello world',
            body: 'hello juga'
        },
        {
            userId: 2,
            id: 2,
            title: 'hello mahfud',
            body: 'hello jokowi'
        },
        {
            userId: 1,
            id: 3,
            title: 'hello',
            body: 'hello juga kamu'
        },
    ],
    isLoading: true,
    postCount: 0
};

// eslint-disable-next-line no-underscore-dangle
export function __createMocks(custom = { getters: {}, mutations: {}, actions: {}, state: {} }) {
    const mockGetters = Object.assign({}, getters, custom.getters);
    const mockMutations = Object.assign({}, mutations, custom.mutations);
    const mockActions = Object.assign({}, actions, custom.actions);
    const mockState = Object.assign({}, state, custom.state);

    return {
        getters: mockGetters,
        mutations: mockMutations,
        actions: mockActions,
        state: mockState,
        store: new Vuex.Store({
            getters: mockGetters,
            mutations: mockMutations,
            actions: mockActions,
            state: mockState,
        }),
    };
}

export const store = __createMocks().store;