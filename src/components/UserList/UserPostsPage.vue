<template>
  <div class="post-wrapper">
    <UserDetailPosts :post="post" isCreating @create-post="createPost" />
    <UserDetailPosts v-for="post in getUserPosts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import UserDetailPosts from '@/components/UserList/UserDetailPosts.vue';

export default {
  name: 'UserPostsPage',
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  components: {
    UserDetailPosts,
  },
  data() {
    return {
      userPosts: [],
      post: {
        title: '',
        body: '',
        userId: 1,
      },
    };
  },
  computed: {
    getUserPosts() {
      return this.userPosts;
    },
  },
  mounted() {
    this.getUserDetailPosts();
  },
  methods: {
    async getUserDetailPosts() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/' + this.id + '/posts');
        const data = await response.json();

        this.userPosts = data;
      } catch (error) {
        console.log('Error:', error);
      }
    },
    async createPost(post) {
      this.userPosts.unshift(post);
    },
  },
};
</script>

<style scoped lang="scss">
.post-wrapper {
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 250px));
  gap: 20px;
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, minmax(200px, 250px));
  }
  @media (max-width: 490px) {
    grid-template-columns: repeat(1, minmax(200px, 250px));
  }
}
</style>
