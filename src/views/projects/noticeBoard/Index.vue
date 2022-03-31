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
import gridOptions from './data/gridOptions.js' //gridOption from js
import mock from '@/api/mock/noticeBoard.json'  //gridMock from json

export default {
  name: 'NoticeBoard',
  components: {
     AgGridVue
  },
  data() {
    return {
      columnDefs: gridOptions().columnDefs, //gridOption
      rowData: [],  //gridData
      onGridReady: '',
      gridApi: '',
      columnApi: ''
    }
  },
  created(){
    this.setup()  //setup for the grid
  },
  mounted(){
  },
  methods: {
    setup() {
      this.rowData = reactive([]) //init rowData
      this.gridApi = ref(null)  //init gridApi
      this.columnApi = ref(null)  //init columnApi

      this.setApi() //api
      this.gridReady()  //gridReady
    },
    setApi(){
      let useMock = true  //mockup true or false
      onMounted(() => {
        if(useMock === false){
          fetch('https://www.ag-grid.com/example-assets/row-data.json')
            .then(response => response.json())
            .then(remoteRowData => this.rowData.value = remoteRowData.value)
        }
        else{
          this.rowData = mock.rowData
        }
      })
    },
    gridReady() {
      this.onGridReady = params => {
        this.columnApi = params.columnApi
        this.gridApi = params.api
      }
    },
    getSelectedRows(){
      let selectedNodes = this.gridApi.getSelectedNodes()
      let selectedData = selectedNodes.map(node => node.data)
      alert(`Selected Nodes:\n${JSON.stringify(selectedData)}`)
      return selectedData
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
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 96px 24px 24px;
  gap: 10px;
}
</style>
