<template>
  <h1>{{ category.name }}</h1>
  <ForumList :forums="getForumsForCategory(category)" :title="category.name" />
</template>

<script>
import ForumList from "@/components/ForumList";
import { findById } from "@/helpers";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Category",
  components: {
    ForumList,
  },
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  computed: {
    category() {
      // return this.$store.state.categories.find((category) => category.id === this.id);
      return findById(this.$store.state.categories, this.id);
    },
  },
  methods: {
    getForumsForCategory(category) {
      return this.$store.state.forums.filter(
        (forum) => forum.categoryId === category.id
      );
    },
  },
};
</script>

<style scoped></style>
