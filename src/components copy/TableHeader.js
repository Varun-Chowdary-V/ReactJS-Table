import React from 'react';


const TableHeader = (props) => {

  const { columns, showSelectionCheckboxes, sortDescriptor} = props
  
  return (
    <thead>
      <tr>
        {showSelectionCheckboxes && <th style={{backgroundColor: 'green', color: 'white'}}>Select</th>}
        {columns.map((column, index) => (
          <th key={index} style={{ width: column.width || 'auto', backgroundColor: 'green', color: 'white' }}>
            {column.name}
            {sortDescriptor?.field === column.field && (
              sortDescriptor?.ascending ? ' ▲' : ' ▼'
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
