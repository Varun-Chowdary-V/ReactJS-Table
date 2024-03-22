import React from 'react';
import TableCell from './TableCell';


const TableRow = (props) => {

  const {
    item,
    index,
    columns,
    isStriped,
    showSelectionCheckboxes,
    selectionMode,
    disallowEmptySelect,
    selectedItems,
    onSelectionChange
  } = props
  const type=(selectionMode ==='multiple' ? 'checkbox' : selectionMode ==='single' ? 'radio' :'hidden' )

  return (
    <tr key={index} style={isStriped && index % 2 !== 0 ? {backgroundColor: '#f4f4f4'} : null}>
      {showSelectionCheckboxes &&  (
        <td style={{display:'flex', justifyContent:'center'}} >
          <input 
            type={type} 
            onChange={(e) => onSelectionChange(item,e) } 
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
