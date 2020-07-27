import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const state = {
  peopleList: [],
};

const getters = {
  peopleData: (state) => {
    return state.peopleList.map((people, index) => ({
      fullName: people.name.first + " " + people.name.last,
      photo: people.picture.medium,
      email: people.email,
      dob: people.dob.date.slice(0, 10),
      info: "/people/" + index,
    }));
  },
  singleUser: (state) => (id) => {
    return state.peopleList[id];
  },
};

const mutations = {
  SET_PEOPLE(state, people) {
    state.peopleList = people;
  },
};

const actions = {
  getPeople(context) {
    axios
      .get("https://randomuser.me/api/?results=50")
      .then((response) => {
        context.commit("SET_PEOPLE", response.data.results);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
