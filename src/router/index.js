import { createRouter, createWebHistory } from "vue-router";
import Home from "@/Pages/Home";
import ThreadShow from "@/Pages/ThreadShow";
import ThreadCreate from "@/Pages/ThreadCreate";
import NotFound from "@/Pages/NotFound";
import Forum from "@/Pages/Forum";
import Category from "@/Pages/Category";
import Profile from "@/Pages/Profile";
import dataSource from "../data.json";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: { toTop: true, smoothScroll: true },
  },
  {
    path: "/profile/edit",
    name: "ProfileEdit",
    component: Profile,
    props: { edit: true },
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
    path: "/forum/:forumId/thread/create",
    name: "ThreadCreate",
    component: ThreadCreate,
    props: true,
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
  scrollBehavior(to) {
    const scroll = {};
    if (to.meta.toTop) scroll.top = 0;
    if (to.meta.smoothScroll) scroll.behavior = "smooth";
    return scroll;
  },
});

export default router;
