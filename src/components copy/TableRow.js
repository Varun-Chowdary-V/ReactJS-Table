import React from 'react';
import TableCell from './TableCell';


const TableRow = ({
  item,
  index,
  columns,
  isStriped,
  showSelectionCheckboxes,
  selectionMode,
  disallowEmptySelect,
  selectedItems,
  onSelectionChange
}) => {

  const type=(selectionMode ==='multiple' ? 'checkbox' : selectionMode ==='single' ? 'radio' :'hidden' )

  return (
    <tr key={index} style={isStriped && index % 2 !== 0 ? {backgroundColor: '#f4f4f4'} : null}>
      {showSelectionCheckboxes &&  (
        <td>
          <input 
            type={type} 
            onChange={() => onSelectionChange(item) } 
            disabled={disallowEmptySelect && selectedItems.length === 0}
          />
        </td>
      )}
      {columns.map((column, columnIndex) => (
        <TableCell
          key={columnIndex}
          item={item}
          column={column}
          columnIndex={columnIndex}
        />
      ))}
    </tr>
  );
};

export default TableRow;
