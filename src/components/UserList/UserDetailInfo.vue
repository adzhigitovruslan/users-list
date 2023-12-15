<!-- eslint-disable max-len -->
<template>
  <div>
    <base-card>
      <div class="detail-page">
        <div class="detail-page__photo">
          <img
            src="https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg"
            alt="иконка лого"
          />
        </div>
        <div class="detail-page__content">
          <h2>{{ userInfo.name }}</h2>
          <p>{{ userInfo.email }}</p>
        </div>
      </div>
    </base-card>
  </div>
</template>

<script>
export default {
  name: 'UserDetailInfo',
  props: {
    userInfo: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.detail-page {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.detail-page__photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;

  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.detail-page__content {
  text-align: center;
  color: var(--font-color);

  & h2 {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 10px;
  }

  & p {
    font-size: 18px;
  }
}
</style>
