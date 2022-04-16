<template>
  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ forum.name }}</h1>
        <p class="text-lead">{{ forum.description }}</p>
      </div>
      <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
    </div>
  </div>
  <div class="col-full push-top">
    <ThreadList :threads="threads" />
  </div>
</template>

<script>
import ThreadList from "@/components/ThreadList";
import dataSource from "@/data.json";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Forum",
  components: { ThreadList },
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  computed: {
    forum() {
      return dataSource.forums.find((forum) => forum.id === this.id);
    },
    threads() {
      return dataSource.threads.filter((thread) => thread.forumId === this.id);
    },
  },
};
</script>

<style scoped></style>
