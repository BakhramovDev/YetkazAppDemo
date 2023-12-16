<template>
  <div>
    <button class="show-modal" @click="showBottomSheet">
      Show Bottom Sheet
    </button>
    <div
      class="bottom-sheet"
      :class="{
        show: isBottomSheetVisible,
        dragging: isDragging,
        fullscreen: sheetHeight === 100,
      }"
    >
      <div class="sheet-overlay" @click="hideBottomSheet"></div>
      <div class="content" :style="{ height: sheetHeight + 'vh' }">
        <div class="header">
          <div class="drag-icon" @mousedown="dragStart" @touchstart="dragStart">
            <span></span>
          </div>
        </div>
        <div class="body">
          <!-- Your content goes here -->
          <h2>Bottom Sheet Modal</h2>
          <p>
            Create a bottom sheet modal that functions similarly to Facebook
            modal using HTML CSS and JavaScript. This modal allows the user to
            view its contents, drag it up or down, and close it. It also works
            on touch-enabled devices...
          </p>
          <!-- ... Rest of your content ... -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBottomSheetVisible: false,
      isDragging: false,
      startY: 0,
      startHeight: 0,
      sheetHeight: 50,
    };
  },
  methods: {
    showBottomSheet() {
      this.isBottomSheetVisible = true;
      document.body.style.overflowY = "hidden";
      this.updateSheetHeight(50);
    },
    updateSheetHeight(height) {
      this.sheetHeight = height;
    },
    hideBottomSheet() {
      this.isBottomSheetVisible = false;
      document.body.style.overflowY = "auto";
    },
    dragStart(e) {
      this.isDragging = true;
      this.startY = e.pageY || e.touches?.[0].pageY;
      this.startHeight = this.sheetHeight;
      // this.$refs.bottomSheet.classList.add("dragging");
    },
    dragging(e) {
      if (!this.isDragging) return;
      const delta = this.startY - (e.pageY || e.touches?.[0].pageY);
      const newHeight = this.startHeight + (delta / window.innerHeight) * 100;
      this.updateSheetHeight(newHeight);
    },
    dragStop() {
      this.isDragging = false;
      // this.$refs.bottomSheet.classList.remove("dragging");
      const sheetHeight = this.sheetHeight;
      if (sheetHeight < 25) {
        this.hideBottomSheet();
      } else if (sheetHeight > 75) {
        this.updateSheetHeight(100);
      } else {
        this.updateSheetHeight(50);
      }
    },
  },

  mounted() {
    document.addEventListener("mousemove", this.dragging);
    document.addEventListener("mouseup", this.dragStop);

    document.addEventListener("touchmove", this.dragging);
    document.addEventListener("touchend", this.dragStop);
  },
  beforeDestroy() {
    document.removeEventListener("mousemove", this.dragging);
    document.removeEventListener("mouseup", this.dragStop);

    document.removeEventListener("touchmove", this.dragging);
    document.removeEventListener("touchend", this.dragStop);
  },
};
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #e3f2fd;
}
.show-modal {
  outline: none;
  border: none;
  cursor: pointer;
  color: #fff;
  border-radius: 6px;
  font-size: 1.2rem;
  padding: 15px 22px;
  background: #4a98f7;
  transition: 0.3s ease;
  box-shadow: 0 10px 18px rgba(52, 87, 220, 0.18);
}
.show-modal:hover {
  background: #2382f6;
}
.bottom-sheet {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  opacity: 0;
  pointer-events: none;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  transition: 0.1s linear;
}
.bottom-sheet.show {
  opacity: 1;
  pointer-events: auto;
}
.bottom-sheet .sheet-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  background: #000;
}
.bottom-sheet .content {
  width: 100%;
  position: relative;
  background: #fff;
  max-height: 100vh;
  height: 50vh;
  max-width: 1150px;
  padding: 25px 30px;
  transform: translateY(100%);
  border-radius: 12px 12px 0 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.03);
  transition: 0.3s ease;
}
.bottom-sheet.show .content {
  transform: translateY(0%);
}
.bottom-sheet.dragging .content {
  transition: none;
}
.bottom-sheet.fullscreen .content {
  border-radius: 0;
  overflow-y: hidden;
}
.bottom-sheet .header {
  display: flex;
  justify-content: center;
}
.header .drag-icon {
  cursor: grab;
  user-select: none;
  padding: 15px;
  margin-top: -15px;
}
.header .drag-icon span {
  height: 4px;
  width: 40px;
  display: block;
  background: #c7d0e1;
  border-radius: 50px;
}
.bottom-sheet .body {
  height: 100%;
  overflow-y: auto;
  padding: 15px 0 40px;
  scrollbar-width: none;
}
.bottom-sheet .body::-webkit-scrollbar {
  width: 0;
}
.bottom-sheet .body h2 {
  font-size: 1.8rem;
}
.bottom-sheet .body p {
  margin-top: 20px;
  font-size: 1.05rem;
}
</style>
