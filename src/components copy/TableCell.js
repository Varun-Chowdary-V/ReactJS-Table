
import React from 'react';



const TableCell = (props) => {

  const { item, column, columnIndex} = props
  
  return (
    <td key={columnIndex}  style={{ width: column.width || 'auto', textAlign: 'center' }}>
      {item[column.field]}
    </td>
  );
};

export default TableCell;
