<template>
  <div class="album-wrapper">
    <UserDetailAlbum v-for="album in getUserAlbums" :key="album.id" :id="album.id" :title="album.title" />
  </div>
</template>

<script>
import UserDetailAlbum from '@/components/UserList/UserDetailAlbum.vue';

export default {
  name: 'UserAlbumPage',
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  components: {
    UserDetailAlbum,
  },
  data() {
    return {
      userAlbums: [],
      userAlbumsPhoto: [],
    };
  },
  computed: {
    getUserAlbums() {
      return this.userAlbums;
    },
  },
  mounted() {
    this.getUserDetailAlbums();
  },
  methods: {
    async getUserDetailAlbums() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/' + this.id + '/albums');
        const data = await response.json();

        this.userAlbums = data;
      } catch (error) {
        console.log('Error:', error);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.album-wrapper {
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
