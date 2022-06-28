<template>
  <div class="alert hidden" ref="mainalert">
    <div class="alert-header">
      <span class="alert-title"> Alert Title </span>
      <button @click="close_alert">
        <i class="fa fa-times" aria-hidden="true"></i>
      </button>
    </div>

    <div class="alert-body">
      Are you sure..? Are you sure..? Are you sure..? Are you sure..? Are you
      sure..? Are you sure..? Are you sure..? Are you sure..? Are you sure..?
    </div>

    <div class="alert-footer">
      <button>OK</button>
    </div>
  </div>
</template>

<script>
import { ClassWatcher } from "@/utils/class_watcher.js";
export default {
  // props: {
  //     show: {
  //         type: Boolean,
  //         default: false,
  //     },
  // },

  data() {
    return {
      show: false,
      class_watcher: undefined,
    };
  },

  mounted() {
    this.class_watcher = new ClassWatcher(
      document.querySelector(".alert"),
      "hidden",
      () => {
        this.alertUpdate(false);
      },
      () => {
        this.alertUpdate(true);
      }
    );
    this.class_watcher.observe();
    
    this.dragable_alert();
  },
  methods: {
    close_alert() {
      var ol = document.querySelector(".full-page-overlay");
      this.$refs.mainalert.classList.add("hidden");
      ol.classList.add("hidden");
    },

    dragable_alert() {
      document
        .querySelector(".alert-header button")
        .addEventListener("click", () => {
          // document.querySelector('.alert').classList.add('hidden');
          // document.querySelector('.full-page-overlay').classList.add('hidden');
          // this.is_show = false;
        });

      var draggable = document.querySelector(".alert");

      var isMouseDown,
        initX,
        initY,
        height = draggable.offsetHeight,
        width = draggable.offsetWidth;

      draggable.addEventListener("mousedown", function (e) {
        isMouseDown = true;
        document.body.classList.add("no-select");
        initX = e.offsetX;
        initY = e.offsetY;
      });

      document.addEventListener("mousemove", function (e) {
        if (isMouseDown) {
          var cx = e.clientX - initX,
            cy = e.clientY - initY;
          if (cx < 0) {
            cx = 0;
          }
          if (cy < 0) {
            cy = 0;
          }
          if (window.innerWidth - e.clientX + initX < width) {
            cx = window.innerWidth - width;
          }
          if (e.clientY > window.innerHeight - height + initY) {
            cy = window.innerHeight - height;
          }
          draggable.style.left = cx + "px";
          draggable.style.top = cy + "px";
        }
      });

      draggable.addEventListener("mouseup", function () {
        isMouseDown = false;
        document.body.classList.remove("no-select");
      });
    },

    alertUpdate(show) {
      var ol = document.querySelector(".full-page-overlay");

      if (show) {
        ol.classList.remove("hidden");

        this.$refs.mainalert.classList.remove("hidden");
      } else {
        this.$refs.mainalert.classList.add("hidden");
        ol.classList.add("hidden");
      }

      this.dragable_alert();
    },
  },

  updated() {
    this.alertUpdate(this.show);
  },
};
</script>

<style lang="scss">
.alert {
  position: absolute;
  user-select: none;
  z-index: 1101;
  width: 250px;
  min-height: 100px;
  left: calc(50vw - 125px);
  top: 20vh;

  @apply bg-white text-gray-700;

  .alert-header {
    @apply bg-gray-600 text-gray-200 flex justify-between items-center;
    cursor: move;
    height: 40px;
    .alert-title {
      @apply pl-3;
    }
    button {
      @apply hover:bg-red-600;
      width: 40px;
      height: 40px;
    }
  }

  .alert-body {
    @apply p-3;
  }

  .alert-footer {
    @apply bg-gray-500 flex justify-end;

    button {
      @apply bg-gray-600 px-2 py-1 text-white;
    }
  }
}
</style>