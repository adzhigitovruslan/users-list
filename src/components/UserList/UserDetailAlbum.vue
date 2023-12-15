<!-- eslint-disable max-len -->
<template>
  <base-card class="detail-wrapper">
    <div class="detail-page">
      <div class="detail-page__title">{{ title }}</div>
      <carousel
        :perPage="5"
        :loop="true"
        :navigationEnabled="true"
        :paginationEnabled="false"
        :adjustableHeight="true"
        :navigationClickTargetSize="5"
      >
        <slide class="detail-page__slider" v-for="photo in getAlbumsPhoto" :key="photo.id">
          <img v-lazy="photo.thumbnailUrl" alt="картинка из альбома" />
        </slide>
      </carousel>
    </div>
  </base-card>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'UserDetailAlbum',
  components: {
    Carousel,
    Slide,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    id: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      userAlbumsPhoto: [],
    };
  },
  computed: {
    getAlbumsPhoto() {
      return this.userAlbumsPhoto;
    },
  },
  created() {
    this.getUserDetailAlbumsPhoto();
  },
  methods: {
    async getUserDetailAlbumsPhoto() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/' + this.id + '/photos');
        const data = await response.json();

        this.userAlbumsPhoto = data;
      } catch (error) {
        console.log('Error:', error);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.detail-wrapper {
  padding: 20px;
}
.detail-page {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  display: flex;
  gap: 20px;
  height: 150px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  &__title {
    color: #fff;
    font-size: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    overflow: hidden;
  }
  &__carousel {
    width: 100%;
  }
  &__slider {
    width: 20%;
    height: 50px;
    overflow: hidden;
    & img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
}
</style>
