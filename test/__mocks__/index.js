
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const mockdata =[
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
]
export const getters = {

    getPostCount: jest.fn().mockReturnValue(mockdata.length),
    getPosts: jest.fn().mockReturnValue(mockdata),
    getIsLoadingPost: jest.fn().mockReturnValue(false),
    getIsError:jest.fn().mockReturnValue({status: false ,message: ""})


};

export const mutations = {
    FETCH_START: jest.fn(),
    MUTATE_ADD_POST: jest.fn(),
    MUTATE_SET_POST: jest.fn(),
    MUTATE_ERROR_FETCH_POSTS: jest.fn()
};

export const actions = {
    fetchPost: jest.fn(),
    getPosts: jest.fn(),
    addPostAction: jest.fn()

};

export const state = {
    posts:mockdata,
    isLoading: true,
    postCount: mockdata.length,
    isError : {status: false ,message: ""}

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