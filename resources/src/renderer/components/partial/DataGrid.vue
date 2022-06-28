<template>
  <div class="table-header">
    <div
      v-for="(col, i) in columnDefs"
      :key="'col_' + i"
      class="header-data"
      :class="{ 'flex-1': !(col.width > 0) }"
      :style="col.width > 0 ? 'width:' + col.width + 'px' : ''"
    >
      <span class="px-2">
        {{ col.headerName }}
      </span>
    </div>
  </div>

  <div class="table-body scrollbar">
    <div
      class="table-row context"
      :data="JSON.stringify(build_data(columnDefs, items))"
      v-for="(items, index) in datasets"
      :key="'d-grid_' + index"
    >
      <div
        v-for="(item, i) in items"
        :key="'x' + i"
        class="table-data"
        :class="{ 'flex-1': !(columnDefs[i].width > 0) }"
        :style="
          columnDefs[i].width > 0 ? 'width:' + columnDefs[i].width + 'px' : ''
        "
      >
        <span class="">
          {{ item.data }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    columnDefs: {
      type: Array,
      required: true,
    },
    datasets: {
      type: Array,
      required: true,
    },
  },
  methods: {
    build_data(col, data) {
      var output = {};

      for (let i in col) {
        output[col[i].field] = data[i].data || [];

        // data[col[i].field].push(data[col[i].field]);
      }
      return output;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables";

$top-control-height: 30px;
$table-header-height: 40px;

.main-control {
  height: $top-control-height;
  display: flex;
  align-items: center;
  width: calc(100vw - $side-nav-width);
  button {
    @apply bg-blue-600 px-3 text-white text-sm;
    height: $top-control-height;
    &:hover {
      @apply bg-blue-700;
    }
  }
}

.table-header {
  @apply bg-gray-200;
  @apply dark:bg-gray-700 dark:text-gray-400;

  padding-right: 15px;
  position: fixed;
  height: $table-header-height;
  width: calc(100vw - $side-nav-width);
  display: flex;
  align-items: center;
  .header-data {
    height: $table-header-height;
    display: flex;
    align-items: center;

    // @apply border-b;
    @apply dark:border-gray-200;

    &:first-child {
      border-left: none;
    }
  }
}

.table-body {
  position: fixed;
  bottom: $bottom-nav-height;
  width: calc(100vw - $side-nav-width);
  overflow-y: scroll;
  height: calc($main-height - $table-header-height - $top-control-height);
  .table-row {
    display: flex;
    cursor: pointer;
    @apply border-b border-gray-200;
    @apply dark:text-gray-300 dark:border-gray-800;

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      @apply bg-gray-100;
      @apply dark:bg-gray-800;
    }
    .table-data {
      @apply border-l border-gray-200;
      @apply dark:text-gray-500 dark:border-gray-800;
      // border-left: 1px solid #ddd;
      // display: flex;
      // align-items: center;
      padding: 8px 8px;
      &:first-child {
        border-left: none;
      }
      // padding: 10px 0px;
    }
  }
}
</style>