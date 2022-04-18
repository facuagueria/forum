import { createStore } from "vuex";
import dataSource from "@/data.json";

export default createStore({
  state: {
    ...dataSource,
    authId: "VXjpr2WHa8Ux4Bnggym8QFLdv5C3",
  },
  getters: {
    authUser: (state) => state.users.find((user) => user.id === state.authId),
  },
  mutations: {
    setPost(state, { post }) {
      state.posts.push(post); //set the post
    },
    appendPostToThread(state, { postId, threadId }) {
      const thread = state.threads.find((thread) => thread.id === threadId);
      thread.posts.push(postId);
    },
  },
  actions: {
    createPost(context, post) {
      post.id = "gggg" + Math.random();
      context.commit("setPost", { post });
      context.commit("appendPostToThread", {
        postId: post.id,
        threadId: post.threadId,
      });
    },
  },
  modules: {},
});
