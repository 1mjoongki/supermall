<template>
  <div id="tab-bar">    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    border-top: 1px solid #eee;
    text-align: center;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -1px 1px rgba(100, 100, 100, .1);
    /* z-index: 10; */
  }



</style>