import { debounce } from "./utils";

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
    }
  },
  mounted() {
    // 1.图片加载完成的事件监听
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.itemImgListener = () => {
      // this.$refs.scroll.refresh();
      refresh()
    };
    this.$bus.$on("itemImageLoad", this.itemImgListener);
  }
}
