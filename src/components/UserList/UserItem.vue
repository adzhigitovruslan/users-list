<!-- eslint-disable max-len -->
<template>
  <tr>
    <td>
      <img
        src="https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg"
        alt="иконка лого"
      />
    </td>
    <td>{{ name }}</td>
    <td>{{ email }}</td>
    <td>{{ phone.split(' ')[0] }}</td>
    <td>{{ website }}</td>
  </tr>
</template>

<script>
export default {
  name: 'UserItem',
  props: {
    email: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    phone: {
      type: String,
      default: '',
    },
    website: {
      type: String,
      default: '',
    },
    id: {
      type: Number,
      default: null,
    },
  },
};
</script>

<style scoped lang="scss">
$baseColor: #398b93;
$padding: 10px;
$imageBig: 100px;
$imageSmall: 60px;
$borderRadius: 10px;

tr {
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:nth-child(2n) {
    background-color: white;
  }
  &:nth-child(2n + 1) {
    background-color: lighten($baseColor, 55%);
  }
  @media screen and (max-width: 700px) {
    display: block;
    padding: $padding 0;
    position: relative;
    &:first-child {
      display: none;
    }
  }
  @media screen and (max-width: 500px) {
    background-color: white !important;
    border: 1px solid lighten($baseColor, 20%);
    border-radius: $borderRadius;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
    margin: 0.5rem 0;
    padding: 0;
  }
  & td {
    color: darken($baseColor, 10%);
    padding: $padding;
    text-align: center;
    vertical-align: middle;
    & img {
      border-radius: 50%;
      height: $imageSmall;
      width: $imageSmall;
      @media (max-width: 500px) {
        border: 3px solid;
        border-color: lighten($baseColor, 50%);
        height: $imageBig;
        margin: 0.5rem 0;
        width: $imageBig;
      }
    }
    @media screen and (max-width: 700px) {
      display: block;
      &:first-child {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: $imageBig;
      }

      &:not(:first-child) {
        clear: both;
        margin-left: $imageBig;
        padding: 4px 20px 4px 90px;
        position: relative;
        text-align: left;

        &:before {
          color: lighten($baseColor, 30%);
          content: '';
          display: block;
          left: 0;
          position: absolute;
        }
      }

      &:nth-child(2):before {
        content: 'Name:';
      }
      &:nth-child(3):before {
        content: 'Email:';
      }
      &:nth-child(4):before {
        content: 'Phone:';
      }
      &:nth-child(5):before {
        content: 'Website:';
      }
    }
    @media (max-width: 500px) {
      &:first-child {
        background-color: lighten($baseColor, 45%);
        border-bottom: 1px solid lighten($baseColor, 30%);
        border-radius: $borderRadius $borderRadius 0 0;
        position: relative;
        top: 0;
        transform: translateY(0);
        width: 100%;
      }

      &:not(:first-child) {
        margin: 0;
        padding: 5px 1em;
        width: 100%;

        &:before {
          font-size: 0.8em;
          padding-top: 0.3em;
          position: relative;
        }
      }

      &:last-child {
        padding-bottom: 1rem !important;
      }
    }
  }
}
</style>
