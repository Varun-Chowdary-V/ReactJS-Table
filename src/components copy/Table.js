import React, { useState } from 'react';
import SearchBar from './SearchBar';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = ({
  columns,
  items,
  layout = 'auto',
  hideHeader = false,
  isStriped = false,
  showSelectionCheckboxes = false,
  disallowEmptySelect = false,
  selectionMode = 'none',
  sortDescriptor,
  isLoading = false,
  loadingContent = 'Loading...',
  emptyContent = 'No items found.',
}) => {

  const [filter, setFilter] = useState('');
  const [selectedItems,setSelectedItems]=useState([]);

  const doesIncludeEntry = entry => {
    return filter.length > 0 ? columns.some(column => {
      const field = column.field || column.name.toLowerCase();
      return entry[field] && entry[field].toString().toLowerCase().includes(filter.toLowerCase());
    }) : true;
  };

  const sortedItems = items.filter(item => doesIncludeEntry(item)).sort((a, b) => {
    
    const field = sortDescriptor.field;
    const aValue = a[field];
    const bValue = b[field];

    if (sortDescriptor.ascending) {
      if (aValue < bValue) return -1;
      if (aValue > bValue) return 1;
      return 0;
    } else {
      if (aValue > bValue) return -1;
      if (aValue < bValue) return 1;
      return 0;
    }
  });

  function onSelectionChange(item) {
    if( selectedItems.includes(item)){
      setSelectedItems(selectedItems.filter((_,index) => index !== selectedItems.lastIndexOf(item)))
    }
    setSelectedItems([item,...selectedItems]);
  }


  return (
    <div style={{ display:'flex', flexDirection: 'column', justifyContent: 'center' }}>       
      {/* Search Bar */}
      <div style={{ display:'flex', justifyContent: 'center' }}>
        <SearchBar 
          setValue={setFilter}
          placeholder="Search..."
        />
      </div>
      {/* Table */}
      <table className={` ${layout === 'auto' ? '' : 'fixed'}`}>
        {/* Header */}
        {!hideHeader && <TableHeader columns={columns} showSelectionCheckboxes={showSelectionCheckboxes} sortDescriptor={sortDescriptor} />}
        {/* Table Body */}
        <tbody>
          <TableBody
            columns={columns}
            items={sortedItems}
            isStriped={isStriped}
            showSelectionCheckboxes={showSelectionCheckboxes}
            disallowEmptySelect={disallowEmptySelect}
            selectedItems={selectedItems}
            onSelectionChange={onSelectionChange}
            filter={filter}
            isLoading={isLoading}
            selectionMode={selectionMode}
            loadingContent={loadingContent}
            emptyContent={emptyContent}
          />
        </tbody>
      </table> 
      {/* Selected items display as json */}
      <div>
        {selectedItems.map((item, index) => (
          <div key={index}>{JSON.stringify(item)}</div>
        ))}
      </div>
    </div>
  );
};

export default Table;
