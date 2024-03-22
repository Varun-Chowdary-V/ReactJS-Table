import React, { useState } from 'react';
import SearchBar from './SearchBar';
import TableHeader from './TableHeader';
import TableBody from './TableBody';


const Table = (props) => {

  const {
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
    } = props
  const [filter, setFilter] = useState('');
  const [selectedItems,setSelectedItems]=useState([]);
 
  // For Pagination
  const [currentPage, setPage] = useState(0);
  const numPages = Math.ceil(items.length / 10);

  // To check whether an element is selected to filter or not
  const doesIncludeEntry = entry => {

    return filter.length > 0 ? columns.some(column => {

      const field = column.field || column.name.toLowerCase();

      return entry[field] && entry[field].toString().toLowerCase().includes(filter.toLowerCase());

    }) : true;
  };

  // Sort and filter items based on the sortDescriptor and search bar query
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

  // Pagination requirements
  const getPaginationNumbers = () => {
    const blocks = [];
    for (let i = 0; i < numPages; i++) {
      blocks.push(i);
    }
    return blocks;
  };

  const startIndex = currentPage * 10;
  const endIndex = Math.min(startIndex + 10, sortedItems.length);
  const slicedItems = sortedItems.slice(startIndex, endIndex);
  const getPageNumbers = getPaginationNumbers();  
  const startBlockIndex = Math.max(currentPage - 1, 0);
  const endBlockIndex = Math.min(currentPage + 1, numPages - 1);

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < numPages - 1) {
      setPage(currentPage + 1);
    }
  };


  // Update elements if the checkbox/radio is checked
  function onSelectionChange(item,e) {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedItems([...selectedItems, item]);
    } else {
      setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));
    }
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
      <table style={{layout:`${layout === 'auto' ? '' : 'fixed'}`, width:'fit-content', minWidth:'70%', margin:'auto', paddingBottom:'20px'}} >

        {/* Header */}
        {!hideHeader && <TableHeader columns={columns} showSelectionCheckboxes={showSelectionCheckboxes} sortDescriptor={sortDescriptor} />}

        {/* Table Body */}
        <tbody>
          <TableBody
            columns={columns}
            items={slicedItems}
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

      {/* Pagination */}
      <div style={{display:'flex', justifyContent:'center'}}>
          <button onClick={() => { setPage(0); }}>
            &#171;
          </button>
          <button onClick={goToPrevPage}>&#8592;</button>
          {
            getPageNumbers.slice(startBlockIndex, endBlockIndex + 1).map(pageNum => (
              <button
                key={pageNum}
                onClick={() => {
                  setPage(pageNum);
                }}
              >
                {pageNum}
              </button>
            ))
          }
          <button  onClick={goToNextPage}>&rarr;</button>
          <button onClick={() => {
            setPage(numPages - 1);
          }}>&raquo;</button>
      </div>

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
