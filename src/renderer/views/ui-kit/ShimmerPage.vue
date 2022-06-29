<template>
  <div>
    <transition>
      <div class="p-4 grid grid-cols-3">
        <div>
          <h2>Box</h2>
          <div class="box shine"></div>
        </div>
        <div>
          <h2 class="mt-3">Circle</h2>
          <div class="circle shine"></div>
        </div>

        <div>
          <h2>Lines</h2>
          <div>
            <div class="lines shine"></div>
            <div class="lines shine"></div>
            <div class="lines shine" style="width: 80%"></div>
            <div class="lines shine" style="width: 50%"></div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "Shimmer",
    };
  },
};
</script>

<style>
.shine {
  background: #818181;

  background-image: linear-gradient(
    45deg,
    #818181 0%,
    #2f2f2f 80%,
    #818181 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 104px;
  /* display: inline-block; */
  position: relative;

  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeholderShimmer;
  animation-timing-function: linear;
}

.box {
  height: 104px;
  width: 100px;
}

.circle {
  height: 104px;
  width: 100px;
  border-radius: 50%;
}

.lines {
  height: 10px;
  margin-top: 5px;
}

.photo {
  display: block !important;
  width: 325px;
  height: 100px;
  margin-top: 15px;
}

@keyframes placeholderShimmer {
  0% {
    background-position: 100% 0;
  }

  100% {
    background-position: 0% 0;
  }
}
</style>