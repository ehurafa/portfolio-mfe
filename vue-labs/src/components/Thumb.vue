<template>
  <a :class="{ [item.framework]: item.framework, 'thumb': true }">
    <img :src="item.thumb" />
  </a>
</template>

<script>
export default {
  name: 'ThumbApp',
  props: ['item']
}
</script>
<style>
.thumb {
  border: 3px solid #f3f3f3;
  width: 100%;
  max-width: 250px;
  border-radius: 4px;
}
.thumb.react {
  border-color: #61DBFB;
}
</style>