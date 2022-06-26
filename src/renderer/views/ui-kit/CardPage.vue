<template>
  <div class="grid gap-4 p-4 grid-cols-4">
    <div class="card">
      <div class="card-header">
        <!-- <slot name="header"></slot> -->
        Card Header
      </div>
      <div class="card-body">
        <!-- <slot></slot> -->
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi,
        similique!
      </div>
      <div class="card-footer">
        <!-- <slot name="footer"></slot> -->
        Card Footer
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <!-- <slot name="header"></slot> -->
        Card Header
      </div>
      <div class="card-body">
        <!-- <slot></slot> -->
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi,
        similique!
      </div>
      <div class="card-footer">
        <!-- <slot name="footer"></slot> -->
        Card Footer
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <!-- <slot name="header"></slot> -->
        Card Header
      </div>
      <div class="card-body">
        <!-- <slot></slot> -->
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi,
        similique!
      </div>
      <div class="card-footer">
        <!-- <slot name="footer"></slot> -->
        Card Footer
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <!-- <slot name="header"></slot> -->
        Card Header
      </div>
      <div class="card-body">
        <!-- <slot></slot> -->
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi,
        similique!
      </div>
      <div class="card-footer">
        <!-- <slot name="footer"></slot> -->
        Card Footer
      </div>
    </div>

    <div class="widget">
      <div class="widget-content">
        <h1>Users</h1>
        <h2>2345</h2>
        <small>
          <span class="text-green-600">
            <i class="fa fa-caret-up" aria-hidden="true"></i> +40%
          </span>
          then last week
        </small>
      </div>
      <div class="widget-icon">
        <i class="fas fa-users"></i>
      </div>
    </div>

    <div class="widget">
      <div class="widget-content">
        <h1>Orders</h1>
        <h2>344</h2>
        <small>
          <span class="text-red-600">
            <i class="fa fa-caret-down" aria-hidden="true"></i> -2%
          </span>
          then last week
        </small>
      </div>
      <div class="widget-icon">
        <i class="fas fa-cart-plus" aria-hidden="true"></i>
      </div>
    </div>

    <div class="widget">
      <div class="widget-content">
        <h1>Visitors</h1>
        <h2>344</h2>
      </div>
      <div class="widget-icon">
        <i class="fa fa-chart-pie"></i>
      </div>
    </div>

    <div class="widget">
      <div class="widget-content">
        <h1>Visitors</h1>
        <h2>344</h2>
      </div>
      <div class="widget-icon">
        <i class="fa fa-chart-pie"></i>
      </div>
    </div>

    <div class="widget">
      <div class="widget-content">
        <h1>Products</h1>
        <h2>344</h2>
      </div>
      <div class="widget-icon">
        <div
          class="flex justify-center items-center bg-info rounded-full"
          style="width: 70px; height: 70px; font-size: 30px"
        >
          <i class="fa fa-box"></i>
        </div>
      </div>
    </div>

    <div class="widget">
      <div class="widget-content">
        <h1>Registers</h1>
        <h2>344</h2>
      </div>
      <div class="widget-icon">
        <div
          class="flex justify-center items-center bg-success rounded-full"
          style="width: 70px; height: 70px; font-size: 30px"
        >
          <i class="fa fa-users"></i>
        </div>
      </div>
    </div>

    <div class="widget">
      <div class="widget-content">
        <h1>Uninstall</h1>
        <h2>344</h2>
      </div>
      <div class="widget-icon">
        <div
          class="flex justify-center items-center bg-danger rounded-full"
          style="width: 70px; height: 70px; font-size: 30px"
        >
        <i class="fas fa-user-alt-slash"></i>
        </div>
      </div>
    </div>

    <div class="widget">
      <div class="widget-content">
        <h1>Uninstall</h1>
        <h2>344</h2>
      </div>
      <div class="widget-icon">
        <div
          class="flex justify-center items-center bg-danger rounded-full"
          style="width: 70px; height: 70px; font-size: 30px"
        >
        <i class="fas fa-user-alt-slash"></i>
        </div>
      </div>
    </div>

  </div>

  <!-- Widget Progress Bar -->
  <div class="grid grid-cols-2 p-3 gap-3">
    <!-- Widget Progress Bar -->
    <div class="widget">
      <div class="widget-content">
        <span class="text-lg"> Actual Revenue vs Target Revenue </span>
        <div class="my-5">
          <div class="flex justify-between">
            <span> Target Achievement </span>
            <span class="text-green-600">
              <i class="fa fa-caret-up" aria-hidden="true"></i> +90%
            </span>
          </div>
          <div class="w-full h-2 rounded bg-gray-500 mt-2">
            <div class="h-2 rounded bg-blue-600" style="width: 90%"></div>
          </div>
        </div>

        <div class="flex justify-between">
          <div>
            <span> Actual Revenue </span>
            <h5 class="text-xl">$50,000</h5>
          </div>
          <div>
            <span> Target Revenue </span>
            <h5 class="text-xl">$50,000</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="widget">
      <div class="widget-content">
        <span class="text-lg"> Actual Revenue vs Target Revenue </span>
        <div class="my-5">
          <div class="flex justify-between">
            <span> Target Achievement </span>
            <span class="text-red-600">
              <i class="fa fa-caret-up" aria-hidden="true"></i> +90%
            </span>
          </div>
          <div class="w-full h-2 rounded bg-gray-500 mt-2">
            <div class="h-2 rounded bg-red-600" style="width: 24%"></div>
          </div>
        </div>

        <div class="flex justify-between">
          <div>
            <span> Actual Revenue </span>
            <h5 class="text-xl">$50,000</h5>
          </div>
          <div>
            <span> Target Revenue </span>
            <h5 class="text-xl">$50,000</h5>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-3 p-3 gap-2">
    <div class="widget">
      <div class="widget-content">
        <h4 class="text-5xl">
          12:32:43
        </h4>
        <h5 class="text-md">
          <i class="fa fa-clock" aria-hidden="true"></i>
          Monday, 5th of July, 2020
        </h5>
      </div>
    </div>
  </div>

  <!-- TAB -->
  <div class="grid grid-cols-2 p-4">
    <div class="card card-nav">
      <div class="card-header">
        <ul class="nav nav-tabs" id="custom-tabs-four-tab" role="tablist">
          <li class="nav-item">
            <button data-target="#custom-tab-home" class="nav-link active">
              Home
            </button>
          </li>
          <li class="nav-item">
            <button data-target="#custom-tab-message" class="nav-link">
              Message
            </button>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <div class="tab-content" id="custom-tabs-four-tabContent">
          <div
            class="tab-pane fade show"
            id="custom-tab-home"
            role="tabpanel"
            aria-labelledby="custom-tabs-four-home-tab"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            malesuada lacus ullamcorper dui molestie, sit amet congue quam
            finibus. Etiam ultricies nunc non magna feugiat commodo. Etiam odio
            magna, mollis auctor felis vitae, ullamcorper ornare ligula. Proin
            pellentesque tincidunt nisi, vitae ullamcorper felis aliquam id.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Proin id orci eu lectus blandit suscipit.
            Phasellus porta, ante et varius ornare, sem enim sollicitudin eros,
            at commodo leo est vitae lacus. Etiam ut porta sem. Proin porttitor
            porta nisl, id tempor risus rhoncus quis. In in quam a nibh cursus
            pulvinar non consequat neque. Mauris lacus elit, condimentum ac
            condimentum at, semper vitae lectus. Cras lacinia erat eget sapien
            porta consectetur.
          </div>
          <div
            class="tab-pane fade"
            id="custom-tab-message"
            role="tabpanel"
            aria-labelledby="custom-tabs-four-profile-tab"
          >
            Mauris tincidunt mi at erat gravida, eget tristique urna bibendum.
            Mauris pharetra purus ut ligula tempor, et vulputate metus
            facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Maecenas sollicitudin, nisi a luctus
            interdum, nisl ligula placerat mi, quis posuere purus ligula eu
            lectus. Donec nunc tellus, elementum sit amet ultricies at, posuere
            nec nunc. Nunc euismod pellentesque diam.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.nav {
  margin-bottom: -1px;
  &.nav-tabs {
    .nav-item {
      @apply mr-2 inline-block mt-3;

      .nav-link,
      button {
        @apply outline-none;
        @apply border dark:border-gray-700 p-3 rounded-t-lg;
        border-bottom: 0;
        &.active {
          @apply bg-gray-900;
        }
      }
    }
  }
}
.tab-content {
  @apply p-1;
  .tab-pane {
    @apply hidden;
    &.show {
      @apply block;
    }
  }
}
</style>

<script>
export default {
  mounted() {
    document.querySelectorAll(".nav .nav-link").forEach((el) => {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        document
          .querySelector(".nav .nav-link.active")
          .classList.remove("active");
        this.classList.add("active");
        // open tab
        document.querySelectorAll(".tab-pane.show").forEach((el) => {
          el.classList.remove("show");
        });
        var target = document.querySelector(this.getAttribute("data-target"));

        target.classList.add("show");
      });
    });
  },
};
</script>