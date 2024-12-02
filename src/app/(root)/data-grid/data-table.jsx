import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const DataTable = ({ gridConfig, onActionClick, onPageChange, currentPage, rowsPerPage }) => {

  return (
    <div className="overflow-x-auto p-4">
    <table className="min-w-full table-auto border-collapse border border-gray-300">
      <thead className="bg-gray-200">
        <tr>
          {gridConfig.columnDef.map((column) => (
            <th
              key={column.data}
              className="px-8 border border-gray-300 text-left"
              style={{ width: column.width || 'auto' }}  // Use column width if defined
            >
              {column.label}
            </th>
          ))}
          {gridConfig.actions && (
            <th className="px-8 border border-gray-300 text-left">Action</th>
          )}
        </tr>
      </thead>
      <tbody>
        {gridConfig.rowData.map((row, rowIndex) => (
          <tr key={rowIndex} className="even:bg-gray-100">
            {gridConfig.columnDef.map((column) => (
              <td
                key={column.data}
                className={`px-8 border border-gray-300 ${column.dataType === 'BOOLEAN' ? 'text-center' : ''}`}
                style={{ width: column.width || 'auto' }}
              >
                {column.dataType === 'BOOLEAN' ? (
                  row[column.data] ? <FaCheck className="text-green-500" /> : <FaTimes className="text-red-500" />
                ) : (
                  column.data.split(',').map((cd, i) => <span key={i}>{row[cd]}</span>)
                )}
              </td>
            ))}
            {gridConfig.actions && (
              <td className="px-4 py-2 border border-gray-300">
                {gridConfig.actions.map((action, actionIndex) => (
                  <button
                    key={actionIndex}
                    className={`mx-1 p-1 text-sm ${action.cssClass} rounded-md`}
                    onClick={() => onActionClick(row, action.title)}
                  >
                    <i className={`link-icon ${action.icon}`} />
                  </button>
                ))}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  
    {gridConfig.pagination && (
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm">
          Total records: {gridConfig.totalRecord}
        </div>
  
        <div className="flex space-x-2">
          <button
            className="px-3 py-1 text-sm bg-gray-300 hover:bg-gray-400 rounded-md disabled:bg-gray-200"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="px-4 py-1 text-sm border border-gray-300 rounded-md">
            Page {currentPage} of {Math.ceil(gridConfig.totalRecord / rowsPerPage)}
          </span>
          <button
            className="px-3 py-1 text-sm bg-gray-300 hover:bg-gray-400 rounded-md disabled:bg-gray-200"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(gridConfig.totalRecord / rowsPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    )}
  </div>
  
  );
};

export default DataTable;