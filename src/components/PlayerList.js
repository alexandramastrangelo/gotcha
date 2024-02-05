import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTable } from "react-table";
import "../styles/styles.css"; // Importing styles

function PlayerList() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3500/api/players")
            .then((response) => setPlayers(response.data))
            .catch((error) => console.error("Error fetching players:", error));
    }, []);

    const columns = React.useMemo(
        () => [
            {
                Header: "Player Name",
                accessor: "name"
            },
            {
                Header: "Target",
                accessor: "target"
            },
            {
                Header: "Status",
                accessor: "status"
            }
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data: players
    });

    return (
        <div>
            <h2>Player List</h2>
            <div className="container">
                <table {...getTableProps()} className="table">
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()} className="tr">
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()} className="th">
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()} className="tr">
                                    {row.cells.map((cell) => (
                                        <td {...cell.getCellProps()} className="td">
                                            {cell.render("Cell")}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PlayerList;
