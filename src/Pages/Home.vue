<template>
  <h1>Welcome to the forum</h1>
  <CategoryList :categories="categories" />
</template>

<script>
import CategoryList from "@/components/CategoryList";
import dataSource from "@/data.json";
export default {
  name: "PageHome",
  components: { CategoryList },
  data() {
    return {
      categories: dataSource.categories,
    };
  },
};
</script>

<style scoped></style>
