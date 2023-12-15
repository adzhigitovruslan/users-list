<!-- eslint-disable max-len -->
<template>
  <div>
    <base-card class="detail-wrapper">
      <div class="detail-page">
        <div class="detail-page__title-wrapper">
          <div class="detail-page__title" v-if="!isEditing && !isCreating">
            <div>{{ postData.title }}</div>
          </div>
          <input
            class="detail-page__title"
            placeholder="enter title"
            v-if="isEditing || isCreating"
            v-model="postData.title"
          />
          <button @click="updatePost(isEditing)" v-if="!isCreating">{{ isEditing ? 'save' : 'edit' }}</button>
          <button @click="createPost" v-else>create</button>
        </div>
        <div class="detail-page__body" v-if="!isEditing && !isCreating">{{ postData.body }}</div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="enter text..."
          v-model="postData.body"
          v-if="isEditing || isCreating"
        ></textarea>
      </div>
    </base-card>
  </div>
</template>

<script>
export default {
  name: 'UserDetailPosts',
  props: {
    post: {
      type: Object,
      default: () => {},
    },
    isCreating: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['create-post'],
  data() {
    return {
      postData: {
        id: this.post.id,
        title: this.post.title,
        body: this.post.body,
        userId: this.post.userId,
      },
      isEditing: false,
    };
  },
  methods: {
    async updatePost(isEditing) {
      if (isEditing) {
        try {
          const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + this.post.id, {
            method: 'PUT',
            body: JSON.stringify(this.postData),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          });

          if (res.status === 500) {
            this.$toast.error("Newly created post can't be updated due to 'JSONPlaceholder' settings");

            return;
          }

          const data = await res.json();

          this.postData = data;
          this.$toast.success('Post successfully edited');
          this.isEditing = !this.isEditing;
        } catch (err) {
          console.log(err, 'err');
          this.$toast.error('Something went wrong');
          this.isEditing = !this.isEditing;
        }
      } else {
        this.isEditing = !this.isEditing;
      }
    },
    async createPost() {
      if (!(this.postData.title && this.postData.body)) return;
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify(this.postData),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });

        const data = await res.json();

        this.$toast.success('Post successfully created');
        (this.postData = {
          id: '',
          title: '',
          body: '',
          userId: '',
        }),
          this.$emit('create-post', data);
      } catch (err) {
        console.log(err);
        this.$toast.error('Something went wrong');
        this.isEditing = !this.isEditing;
      }
    },
  },
};
</script>

<style scoped lang="scss">
button {
  background: none;
  color: #fff;
  border: 1px solid #fff;
  padding: 5px;
  border-radius: 10px;
  transition: 0.2s;
  font-size: 18px;
  &:hover {
    border-color: aquamarine;
    color: aquamarine;
  }
}
textarea {
  font-size: 18px;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  &::-webkit-scrollbar-track-piece {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #eee;
    border-radius: 10px;
  }
}
input.detail-page__title {
  border: 1px solid #fff;
  padding: 5px 10px;
  font-size: 18px;
  background-color: #fff;
  color: #000;
}
.detail-page {
  font-size: 18px;
  max-width: 400px;
  margin: auto;
  padding: 20px;
  display: flex;
  gap: 30px;
  height: 200px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  &__title-wrapper {
    display: flex;
    gap: 10px;
    align-items: center;
    width: 100%;
    height: 40px;
  }
  &__title {
    color: #fff;
    width: 75%;
    border: 1px solid #fff;
    border-radius: 10px;
    padding: 5px 10px;
    line-height: 1.4;
    height: 40px;
    background-color: #327a81;
    & div {
      display: flex;
      align-items: center;
      white-space: nowrap;
      overflow-x: scroll;
      overflow-y: hidden;
      height: 100%;
      width: 100%;

      &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }
      &::-webkit-scrollbar-track-piece {
        background: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background: #eee;
        border-radius: 10px;
      }
    }
  }
  &__body {
    color: #fff;
    overflow-y: scroll;
    padding-right: 5px;
    background: #327a81;
    border-radius: 10px;
    height: 100%;
    width: 100%;
    padding: 10px;
    color: #fff;
    border: 1px solid #fff;
    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    &::-webkit-scrollbar-track-piece {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: #eee;
      border-radius: 10px;
    }
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
