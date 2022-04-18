<template>
  <div class="container">
    <div class="flex-grid">
      <div class="col-3 push-top">
        <div class="profile-card">
          <p class="text-center">
            <img
              :src="authUser.avatar"
              :alt="`${authUser.name} profile picture`"
              class="avatar-xlarge"
            />
          </p>

          <h1 class="title">{{ authUser.username }}</h1>

          <p class="text-lead">{{ authUser.name }}</p>

          <p class="text-justify">{{ authUser.bio || "No bio specified" }}</p>

          <span class="online">{{ authUser.username }} is online</span>

          <div class="stats">
            <span>{{ userPostsCount }} posts</span>
            <span>{{ userThreadsCount }} threads</span>
          </div>

          <hr />

          <p v-if="authUser.website" class="text-large text-center">
            <i class="fa fa-globe"></i>
            <a :href="authUser.website">{{ authUser.website }}</a>
          </p>
        </div>

        <p class="text-xsmall text-faded text-center">
          Member since june 2003, last visited 4 hours ago
        </p>

        <div class="text-center">
          <hr />
          <a href="edit-profile.html" class="btn-green btn-small"
            >Edit Profile</a
          >
        </div>
      </div>

      <div class="col-7 push-top">
        <div class="profile-header">
          <span class="text-lead"> Joker's recent activity </span>
          <a href="#">See only started threads?</a>
        </div>

        <hr />

        <PostList :posts="userPosts" />
      </div>
    </div>
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import { mapGetters } from "vuex";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Profile",
  components: { PostList },
  computed: {
    ...mapGetters(["authUser"]),
    userPosts() {
      return this.$store.state.posts.filter(
        (post) => post.userId === this.authUser.id
      );
    },
    userPostsCount() {
      return this.userPosts.length;
    },
    userThreads() {
      return this.$store.state.threads.filter(
        (thread) => thread.userId === this.authUser.id
      );
    },
    userThreadsCount() {
      return this.userThreads.length;
    },
  },
};
</script>

<style scoped></style>
