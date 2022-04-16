<template>
  <h1>{{ category.name }}</h1>
  <ForumList :forums="getForumsForCategory(category)" :title="category.name" />
</template>

<script>
import ForumList from "@/components/ForumList";
import dataSource from "@/data.json";
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
      return dataSource.categories.find((category) => category.id === this.id);
    },
  },
  methods: {
    getForumsForCategory(category) {
      return dataSource.forums.filter(
        (forum) => forum.categoryId === category.id
      );
    },
  },
};
</script>

<style scoped></style>
