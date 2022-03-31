<template>
  <section>
    <button @click="getSelectedRows()">Get Selected Rows</button>
      <ag-grid-vue 
        class="ag-theme-alpine"
        :columnDefs="columnDefs"
        :rowData="rowData"
        rowSelection="multiple"
        @grid-ready="onGridReady"
        >
    </ag-grid-vue>
  </section>
</template>

<script>
import {reactive, ref, onMounted} from "vue"
import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-alpine.css"
import { AgGridVue } from "ag-grid-vue3"

export default {
  name: 'NoticeBoard',
  components: {
     AgGridVue
  },
  setup() {
    let rowData = reactive([])
    let gridApi = ref(null)
    // eslint-disable-next-line no-unused-vars
    let columnApi = ref(null)

    
    onMounted(() => {
        fetch('https://www.ag-grid.com/example-assets/row-data.json')
          .then(result => result.json())
          .then(remoteRowData => rowData.value = remoteRowData)
    })

    const onGridReady = params => {
      gridApi = params.api
      columnApi = params.columnApi
    }

    const getSelectedRows = () => {
      console.log("##gridApi", gridApi)
      const selectedNodes = gridApi.value.getSelectedNodes()
      const selectedData = selectedNodes.map( node => node.data )
      const selectedDataStringPresentation = selectedData.map( node => `${node.make} ${node.model}`).join(', ')
      alert(`Selected nodes: ${selectedDataStringPresentation}`)
    }
    return {
      columnDefs: [
        { headerName: "No", field: "no", width: 150, suppressSizeToFit: true, sortable: true}, //checkboxSelection: true 
        { headerName: "Title", field: "title", width: 1050, sortable: true}, 
        { headerName: "Name", field: "name", width: 150, sortable: true},
        { headerName: "RegDate", field: "regDate", width: 150, sortable: true},
        { headerName: "View", field: "view", width: 150, sortable: true},
      ],
      // rowData,
      rowData: [
        { no: "1", title: "Title1", name: "NohBug", regDate: "2022-03-27", view: 100 },
        { no: "2", title: "Title2", name: "NohBug", regDate: "2022-03-28", view: 100 },
        { no: "3", title: "Title3", name: "NohBug", regDate: "2022-03-29", view: 100 },
        { no: "4", title: "Title4", name: "NohBug", regDate: "2022-03-30", view: 100 },
        { no: "5", title: "Title5", name: "NohBug", regDate: "2022-03-31", view: 100 },
      ],
      onGridReady,
      getSelectedRows
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "~ag-grid-community/dist/styles/ag-grid.css"; //ag-grid style
  @import "~ag-grid-community/dist/styles/ag-theme-alpine.css"; //ag-grid theme

.ag-theme-alpine {
  width: 90%;
  height: 700px;
  text-align: center
  // @include ag-theme-alpine((
  // ));
}
section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 96px 24px 24px;
  gap: 10px;
}
</style>
