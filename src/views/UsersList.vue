<template>
  <div class="table__users">
    <div class="table__header header">Users</div>
    <table class="table__list" cellspacing="0">
      <TheHeader />
      <UserItem
        v-for="user in usersList"
        :key="user.id"
        :name="user.name"
        :email="user.email"
        :phone="user.phone"
        :website="user.website"
        @click.native="clickHandler(user.id)"
      />
    </table>
  </div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader.vue';
import UserItem from '@/components/UserList/UserItem.vue';

export default {
  name: 'UsersList',
  components: { TheHeader, UserItem },
  computed: {
    usersList() {
      return this.$store.getters.getUsers;
    },
  },
  methods: {
    clickHandler(id) {
      this.$router.push({ name: 'UserAlbumPage', params: { id: String(id) } });
    },
    async getUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        this.$store.dispatch('setUsersData', data);
      } catch (error) {
        console.log('Error: GetUsers() method in UsersList comp', error);
      }
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>

<style scoped lang="scss">
$baseColor: #398b93;
$borderRadius: 10px;

body {
  background-color: lighten($baseColor, 30%);
  * {
    box-sizing: border-box;
  }
}

.header {
  background-color: darken($baseColor, 5%);
  color: white;
  font-size: 1.5em;
  padding: 1rem;
  text-align: center;
  text-transform: uppercase;
  @media screen and (max-width: 500px) {
    background-color: transparent;
    color: lighten($baseColor, 60%);
    font-size: 2em;
    font-weight: 700;
    padding: 0;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  }
}

.table {
  &__users {
    border: 1px solid darken($baseColor, 5%);
    border-radius: $borderRadius;
    box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
    max-width: calc(100% - 2em);
    margin: 1em auto;
    overflow: hidden;
    width: 800px;
    @media screen and (max-width: 500px) {
      border: none;
      box-shadow: none;
      overflow: visible;
    }
  }
  &__list {
    width: 100%;
    @media screen and (max-width: 700px) {
      display: block;
    }
  }
}
</style>
