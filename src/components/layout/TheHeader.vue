<template>
  <tr>
    <th>Picture</th>
    <th>Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Website</th>
  </tr>
</template>

<style scoped lang="scss">
$baseColor: #398b93;
$padding: 10px;
$borderRadius: 10px;

th {
  color: darken($baseColor, 10%);
  padding: $padding;
  background-color: lighten($baseColor, 50%);
  font-weight: 300;
}

tr {
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
}
</style>
