import React from 'react';
import TableRow from './TableRow';

const TableBody = (props) => {

  const {
    columns,
    items,
    isStriped,
    showSelectionCheckboxes,
    disallowEmptySelect,
    selectedItems,
    selectionMode,
    onSelectionChange,
    filter,
    isLoading,
    loadingContent,
    emptyContent
  } = props

  const doesIncludeEntry = entry => {
    return filter.length > 0 ? columns.some(column => {
      const field = column.field || column.name.toLowerCase();
      return entry[field] && entry[field].toString().toLowerCase().includes(filter.toLowerCase());
    }) : true;
  };


  return (
    <>
      {isLoading ? (
        <tr><td colSpan={columns.length + (showSelectionCheckboxes ? 1 : 0)}>{loadingContent}</td></tr>
      ) : items.filter(item => doesIncludeEntry(item)).length === 0 ? (
        <tr><td colSpan={columns.length + (showSelectionCheckboxes ? 1 : 0)}>{emptyContent}</td></tr>
      ) : (
        items.filter(item => doesIncludeEntry(item)).map((item, index) => (
          <TableRow
            key={index}
            item={item}
            index={index}
            columns={columns}
            isStriped={isStriped}
            showSelectionCheckboxes={showSelectionCheckboxes}
            selectionMode={selectionMode}
            disallowEmptySelect={disallowEmptySelect}
            selectedItems={selectedItems}
            onSelectionChange={onSelectionChange}
          />
        ))
      )}
    </>
  );
};

export default TableBody;
