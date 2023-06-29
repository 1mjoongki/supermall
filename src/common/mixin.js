import { debounce } from "./utils";
import BackTop from "@/components/content/backTop/BackTop.vue";

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

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    listenShowBackTop(position) {
      this.isShowBackTop = -position.y > 1000;
    }
  }
}
