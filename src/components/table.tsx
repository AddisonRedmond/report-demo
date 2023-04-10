import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { createRandomFacts, createRandomUser } from "../static-data/report1";
import graph from "../assets/graph.svg";
import {
  Column,
  useTable,
  useSortBy,
  usePagination,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table";
import "../styles/table.css";

const variants: any = {
  open: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "10",
    width: "30vw",
    height: "30vh",
    borderRadius: "10px",
  },
  closed: {
    position: "relative",
    borderRadius: "300px",
  },
};

const Table = () => {
  const [isBuildChart, setIsBuildChart] = useState<boolean>(false);

  const randomUserData = (): any => {
    let userStore = [];
    for (let i = 0; i < 100; i++) {
      userStore.push(createRandomUser());
    }
    return userStore;
  };

  const data = useMemo(() => randomUserData(), []);

  const createColumns = (): { Header: string; accessor: string }[] => {
    const cols = Object.keys(data[0]);
    return cols.map((key: string) => {
      return {
        Header: key,
        accessor: key,
      };
    });
  };

  const columns: Array<Column> = useMemo(() => createColumns(), []);
  const tableInstance = useTable({ columns, data }, useSortBy, usePagination);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page, // Instead of using 'rows', we'll use page,

    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = tableInstance;

  return (
    <>
      <div className="flex w-fit items-center text-white font-semibold">
      
        <motion.div
          animate={isBuildChart ? "open" : "closed"}
          variants={variants}
          className="bg-black cursor-pointer w-fit p-2"
          onClick={() => setIsBuildChart(!isBuildChart)}
        >
         <p>Visualize</p>
        </motion.div>
      </div>

      <div className="pagination ml-auto flex justify-between w-full mb-3">
        <div className="flex items-center">
          <div className="bg-zinc-900 text-white font-semibold p-2 rounded-l-full border-r-2 border-white">
            <p>Jump to page</p>
          </div>
          <input
            className="bg-zinc-900 text-white font-semibold p-2 rounded-r-full text-center"
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </div>
        <div className="bg-zinc-900 text-white rounded-full p-2">
          <p>
            On page
            <span className="font-bold">{`${pageIndex + 1} of ${
              pageOptions.length
            }`}</span>
          </p>
        </div>
        <div className="flex items-center">
          <div className="bg-black rounded-l-full h-full text-white font-semibold border-r-2 border-white">
            <p className=" p-2">Show</p>
          </div>

          <select
            className="bg-black rounded-r-full text-white font-semibold p-2 border-none"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button
            className=" bg-zinc-900 text-white p-2 rounded-l-full cursor-pointer font-semibold hover:bg-zinc-600 ease-in-out duration-200"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {"First Page"}
          </button>
          <button
            className=" bg-zinc-900 text-white p-2  cursor-pointer font-semibold hover:bg-zinc-600 ease-in-out duration-200 border-l-2 border-r-2 border-white"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {"👈🏽"}
          </button>
          <button
            className=" bg-zinc-900 text-white p-2  cursor-pointer font-semibold hover:bg-zinc-600 ease-in-out duration-200 border-r-2 border-white"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            {"👉🏽"}
          </button>
          <button
            className=" bg-zinc-900 text-white p-2 rounded-r-full cursor-pointer font-semibold hover:bg-zinc-600 ease-in-out duration-200"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {"Last Page"}
          </button>
        </div>
      </div>
      <div className="overflow-auto rounded-md">
        <table className=" w-full border-none" {...getTableProps()}>
          <thead>
            {
              // Loop over the header rows
              headerGroups.map((headerGroup) => (
                // Apply the header row props
                <tr
                  {...headerGroup.getHeaderGroupProps()}
                  className="sticky top-0 z-10"
                >
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map((column) => (
                      // Apply the header cell props
                      <th
                        className="p-4 text-xl bg-slate-700 text-white font-semibold border-none sticky"
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        {column.render("Header")}
                        {/* Add a sort direction indicator */}
                        <span>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? " 🔽"
                              : " 🔼"
                            : ""}
                        </span>
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          {/* Apply the table body props */}
          <tbody {...getTableBodyProps()}>
            {
              // Loop over the table rows
              page.map((row, index) => {
                // Prepare the row for display
                prepareRow(row);
                return (
                  // Apply the row props
                  <tr {...row.getRowProps()}>
                    {
                      // Loop over the rows cells
                      row.cells.map((cell) => {
                        // Apply the cell props
                        return (
                          <td
                            className=" border-none p-4"
                            {...cell.getCellProps()}
                          >
                            {
                              // Render the cell contents
                              cell.render("Cell")
                            }
                          </td>
                        );
                      })
                    }
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
