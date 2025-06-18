import React from "react";

interface TableRowProps {
    td1?: React.ReactNode;
    td2?: React.ReactNode;
    td3?: React.ReactNode;
    td4?: React.ReactNode;
    td5?: React.ReactNode;
    td6?: React.ReactNode;
    td7?: React.ReactNode;
    td8?: React.ReactNode;
}

const TableRow: React.FC<TableRowProps> = ({ td1, td2, td3, td4, td5, td6, td7, td8 }) => {
    return (
        <tr className="text-center">
            {td1 && <td className="border border-blue-400 px-4 py-2">{td1}</td>}
            {td2 && <td className="border border-blue-400 px-4 py-2">{td2}</td>}
            {td3 && <td className="border border-blue-400 px-4 py-2">{td3}</td>}
            {td4 && <td className="border border-blue-400 px-4 py-2">{td4}</td>}
            {td5 && <td className="border border-blue-400 px-4 py-2">{td5}</td>}
            {td6 && <td className="border border-blue-400 px-4 py-2">{td6}</td>}
            {td7 && <td className="border border-blue-400 px-4 py-2">{td7}</td>}
            {td8 && <td className="border border-blue-400 px-4 py-2">{td8}</td>}
        </tr>
    );
};

export default TableRow;
