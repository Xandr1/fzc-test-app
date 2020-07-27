import Vue from "vue";
import VueRouter from "vue-router";
import People from "../views/People/People.vue";
import SingleUser from "../views/SingleUser/SingleUser.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/people",
    name: "People",
    component: People,
    beforeEnter: (to, from, next) => {
      if (!JSON.parse(localStorage.isLoginned)) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/people/:id",
    name: "SingleUser",
    component: SingleUser,
    beforeEnter: (to, from, next) => {
      if (!JSON.parse(localStorage.isLoginned)) {
        next("/");
      } else {
        next();
      }
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: "fzc-app",
  routes,
});

export default router;
