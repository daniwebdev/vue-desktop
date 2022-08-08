<template>
  <div class="grid-page">
    <data-grid :columnDefs="columnDefs" :datasets="datasets"></data-grid>
  </div>

  <div class="context-menu context-datagrid">
    <ul>
      <li @click.prevent="gotoDetail()">
        <i class="fas fa-eye"></i>
        <span>Show Detail</span>
      </li>
      <li @click.prevent="gotoDetail()">
        <i class="fas fa-pencil"></i>
        <span>Update Data</span>
      </li>
      <li @click.prevent="gotoDetail()">
        <i class="fas fa-archive"></i>
        <span>Archive</span>
      </li>
    </ul>
  </div>
</template>

<script>
import DataGrid from "@/renderer/components/partial/DataGrid.vue";
import { initContextMenu } from "@/utils/common.js";

export default {
  components: {
    DataGrid,
  },
  data() {
    return {
      selected_row: null,
      columnDefs: [
        {
          headerName: "Fullname",
          field: "name",
          sortable: true,
          filter: true,
        },
        {
          headerName: "Email",
          field: "email",
          sortable: true,
          filter: true,
        },
      ],

      datasets: [
        [
          {
            data: "Emp ",
          },
          {
            data: "IT Development",
          },
        ],
      ],
    };
  },

  methods: {
    initContext() {
      initContextMenu(".grid-page .table-row", ".context-datagrid", (data) => {
        console.log(data);
        this.selected_row = data;
      });
    },
    gotoDetail() {
      console.log('detail', this.selected_row);
    }
  },

  created() {
    var positions = [
      "Backend Engineer",
      "FrontEnd Engineer",
      "FullStack Engineer",
      "UI/UX",
    ];

    for (let i = 0; i < 100; i++) {
      this.datasets.push([
        {
          data: "Emp " + i,
        },
        {
          data: positions[Math.floor(Math.random() * positions.length)],
        },
      ]);
    }
  },

  mounted() {
    this.initContext();
  },

  updated() {
    this.initContext();
  },
};
</script>