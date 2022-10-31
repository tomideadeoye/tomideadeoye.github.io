/* eslint-disable no-nested-ternary */
/* eslint react/prop-types: 0 */
import MaterialTable from "material-table";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import { useState, createRef } from "react";
// import {} from "react";
// import SimpleModal from "./modal";

export default function MaterialTab({ data, type }) {
  const [selectedRow, setSelectedRow] = useState(null);
  const tableRef = createRef();

  const columnsBCM = [
    {
      title: "Act No",
      field: "Act No",
    },
    {
      title: "Legislation",
      field: "Legislation Name",
    },
    {
      title: "Act URL",
      field: "Act URL",
      cellStyle: { wordBreak: "break-all" },
      hidden: true,
    },

    {
      title: "Regulator",
      field: "Regulator",
    },
    {
      title: "Section",
      field: "Section",
    },
    {
      title: "Compliance Description",
      field: "Compliance Description",
      // cellStyle: { width: "2%" },
    },
    {
      title: "Task Frequency",
      field: "Task Frequency",
    },
    {
      title: "Penalty",
      field: "Penalty",
    },
    {
      title: "Significant Judicial Intervention",
      field: "Significant Judicial Intervention",
    },
    {
      title: "YES",
      field: "YES",
    },
    {
      title: "NDD",
      field: "NDD",
    },
    {
      title: "NO",
      field: "NO",
    },
    {
      title: "GROUP",
      field: "GROUP",
    },
  ];
  const columnsSCT = [
    {
      title: "Act No",
      field: "Act No",
    },
    {
      title: "Legislation",
      field: "Legislation Name",
    },
    {
      title: "Act URL",
      field: "Act URL",

      cellStyle: { wordBreak: "break-all" },
    },

    {
      title: "Regulator",
      field: "Regulator",
    },
    {
      title: "Section",
      field: "Section",
    },
    {
      title: "Compliance Name",
      field: "Compliance Name",
    },
    {
      title: "Compliance Description",
      field: "Compliance Description",
    },
    {
      title: "Task Frequency",
      field: "Task Frequency",
    },
    {
      title: "Penalty",
      field: "Penalty",
    },
    {
      title: "Criticality",
      field: "Criticality",
    },

    {
      title: "Significant Judicial Intervention",
      field: "Significant Judicial Intervention",
    },
    // {
    //   title: "GROUP",
    //   field: "GROUP",
    //   cellStyle: { backgroundColor: "#039be5", color: "#FFF" },
    //   defaultGroupOrder: 0,
    // },
  ];

  function SimpleModal({ src, title }) {
    return (
      <MKBox component="section" py={5}>
        <Container>
          <Slide direction="down" in timeout={500}>
            <MKBox
              position="relative"
              width="100%"
              display="flex"
              flexDirection="column"
              borderRadius="xl"
              bgColor="white"
              shadow="xl"
            >
              <MKBox display="flex" alginItems="center" justifyContent="space-between" p={2}>
                <MKTypography variant="h6">{title}</MKTypography>
              </MKBox>
              <Divider sx={{ my: 0 }} />
              <MKBox p={2}>
                <iframe title={title} src={src} height="400px" width="100%" />
              </MKBox>
              <Divider sx={{ my: 0 }} />
              <MKBox display="flex" justifyContent="center" full-width p={1.5}>
                <MKButton
                  variant="gradient"
                  color="info"
                  onClick={() => window.open(src, "_blank")}
                  sx={{ margin: 1 }}
                >
                  Visit
                </MKButton>{" "}
              </MKBox>
            </MKBox>
          </Slide>
        </Container>
      </MKBox>
    );
  }

  const checkType = () => (type === "BCM" ? columnsBCM : columnsSCT);

  const options = {
    filtering: true,
    columnsButton: true,
    paging: false,
    grouping: true,
    header: true,
    fixedColumns: {
      top: 1,
    },
    headerStyle: {
      backgroundColor: "#039be5",
      position: "sticky",
      top: 0,
      fontSize: 13,
      color: "#FFF",
      width: "100%",
    },

    rowStyle: (rowData, index) => ({
      // backgroundColor: index % 2 === 0 ? "#ecf2f9" : "#fff",
      backgroundColor:
        selectedRow === rowData.tableData.id ? "#e3efff" : index % 2 === 0 ? "#ecf2f9" : "#fff",
      fontSize: 11,
      color: "black",
      position: "relative",
      fontWeight: selectedRow === rowData.tableData.id ? "bold" : "normal",
    }),
  };

  return (
    <>
      <MaterialTable
        tableRef={tableRef}
        title=""
        columns={checkType()}
        data={data}
        detailPanel={(rowData) => (
          <SimpleModal title={rowData["Legislation Name"]} src={rowData["Act URL"]} />
        )}
        options={options}
        // eslint-disable-next-line no-shadow
        onRowClick={(evt, selectedRow, togglePanel) => {
          setSelectedRow(selectedRow.tableData.id);
          togglePanel();
        }}
      />
    </>
  );
}
