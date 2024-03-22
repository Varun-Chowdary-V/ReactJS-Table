
import React from 'react';



const TableCell = ({ item, column, columnIndex}) => {
  return (
    <td key={columnIndex}  style={{ width: column.width || 'auto', textAlign: 'center' }}>
      {item[column.field]}
    </td>
  );
};

export default TableCell;
