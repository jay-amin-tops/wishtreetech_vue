import Home from "./components/Home.vue";
import About from "./components/About.vue";
import ExampleCompo from "./components/ExampleCompo.vue";
import EventsAndReactivities from "./components/EventsAndReactivities.vue";
import OptionAPI from "./components/OptionAPI.vue";
import CompositionApi from "./components/CompositionApi.vue";
import CompositionApiScriptSetup from "./components/CompositionApiScriptSetup";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: Home,
  },{
    path: "/about",
    component: About,
  },
  {
    path: "/example",
    component: ExampleCompo,
    children: [
      {
        path: "eventsandreactivities",
        component: EventsAndReactivities,
      },
      {
        path: "optionapiexample",
        component: OptionAPI,
      },
      {
        path: "compositionapiexample",
        component: CompositionApi,
      },
      {
        path: "compositionapiscriptsetupexample",
        component: CompositionApiScriptSetup,
      },
    ],
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
