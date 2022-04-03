export default function getData() {
    return {
        columnDefsGrid: [
            { headerName: "No", field: "no", width: 150, suppressSizeToFit: true, sortable: true, checkboxSelection: true }, //checkboxSelection: true 
            { headerName: "Title", field: "title", width: 1050, sortable: true}, 
            { headerName: "Name", field: "name", width: 150, sortable: true},
            { headerName: "RegDate", field: "regDate", width: 150, sortable: true},
            { headerName: "View", field: "view", width: 150, sortable: true},
        ],
        columnDefsContent: [
            { headerName: "Content", field: "content", width: 1650},
        ]
    }
}