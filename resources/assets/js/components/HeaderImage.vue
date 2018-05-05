<template>
  <div class="header">
    <div class="header-img" :style="headerImageStyle" @click="$emit('header-clicked')">
      <button class="view-photos">View Photos</button>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      headerImageStyle() {
        return {
          'background-image': `url(${this.imageUrl})`
        };
      }
    },
    props: ['image-url']
  }
</script>

<style>
  .header {
  height: 320px;
}

.header .header-img {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  background-color: #f5f5f5;
  height: 100%;
  cursor: pointer;
  position: relative;
}

.header button {
  border-radius: 4px;
  border: 1px solid #c4c4c4;
  text-align: center;
  vertical-align: middle;
  font-weight: bold;
  line-height: 1.43;
  user-select: none;
  white-space: nowrap;
  cursor: pointer;
  background: white;
  color: #484848;
  padding: 7px 18px;
  font-size: 14px;
  display: inline-block;
  margin-bottom: 0;
}

.header .header-img .view-photos {
  position: absolute;
  bottom: 20px;
  left: 20px;
}
</style>