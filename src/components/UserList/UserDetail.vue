<!-- eslint-disable max-len -->
<template>
  <div class="user-detail-wrapper">
    <h2 class="user-detail-wrapper__title">User info</h2>
    <UserDetailInfo :userInfo="getUserInfo" />
    <div class="user-detail-wrapper__tabs">
      <button :class="['user-detail-wrapper__title', { active: activeTab === 'albums' }]" @click="showTab('albums')">
        Albums
      </button>
      <button :class="['user-detail-wrapper__title', { active: activeTab === 'posts' }]" @click="showTab('posts')">
        Posts
      </button>
    </div>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import UserDetailInfo from '@/components/UserList/UserDetailInfo.vue';

export default {
  name: 'UserDetail',
  components: { UserDetailInfo },
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      user: {},
      activeTab: this.$route.path.split('/').at(-1),
    };
  },
  computed: {
    getUserInfo() {
      return this.user;
    },
  },
  mounted() {
    this.getUserDetail();
  },
  methods: {
    async getUserDetail() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/' + this.id);
        const data = await response.json();

        this.user = data;
      } catch (error) {
        console.log('Error:', error);
      }
    },
    showTab(tabName) {
      if (this.activeTab !== tabName) {
        this.activeTab = tabName;
        this.$router.push('/user/' + this.id + '/' + tabName);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.user-detail-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  &__tabs {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  &__title {
    color: #fff;
    font-size: 25px;
    background: none;
    transition: 0.2s;
    &:hover {
      opacity: 0.8;
    }
    &.active {
      border-bottom: 1px solid #fff;
    }
  }
  &__albums-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}
.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}
</style>
