import { createRouter, createWebHistory } from "vue-router";
import Home from "@/Pages/Home";
import ThreadShow from "@/Pages/ThreadShow";
import NotFound from "@/Pages/NotFound";
import Forum from "@/Pages/Forum";
import Category from "@/Pages/Category";
import dataSource from "../data.json";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/category/:id",
    name: "Category",
    component: Category,
    props: true,
  },
  {
    path: "/forum/:id",
    name: "Forum",
    component: Forum,
    props: true,
  },
  {
    path: "/thread/:id",
    name: "ThreadShow",
    component: ThreadShow,
    props: true,
    beforeEnter(to, from, next) {
      // Check if thread exists
      const threadExists = dataSource.threads.find(
        (thread) => thread.id === to.params.id
      );
      if (threadExists) {
        // if exists continue
        return next();
      } else {
        // if doesn't exist redirect to not found
        next({
          name: "NotFound",
          params: { pathMatch: to.path.substring(1).split("/") },
          //preserve existing query and hash
          query: to.query,
          hash: to.hash,
        });
      }
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
