import React from 'react';
import Table from './components copy/Table';


const App = () => {
  // Sample data for the table

  const items = [
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 40, email: 'bob@example.com' },
    { id: 4, name: 'Alice Williams', age: 35, email: 'alice@example.com' },
    { id: 5, name: 'Charlie Brown', age: 28, email: 'charlie@example.com' },
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 40, email: 'bob@example.com' },
    { id: 4, name: 'Alice Williams', age: 35, email: 'alice@example.com' },
    { id: 5, name: 'Charlie Brown', age: 28, email: 'charlie@example.com' },
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 40, email: 'bob@example.com' },
    { id: 4, name: 'Alice Williams', age: 35, email: 'alice@example.com' },
    { id: 5, name: 'Charlie Brown', age: 28, email: 'charlie@example.com' },
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 40, email: 'bob@example.com' },
    { id: 4, name: 'Alice Williams', age: 35, email: 'alice@example.com' },
    { id: 5, name: 'Charlie Brown', age: 28, email: 'charlie@example.com' },
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 40, email: 'bob@example.com' },
    { id: 4, name: 'Alice Williams', age: 35, email: 'alice@example.com' },
    { id: 5, name: 'Charlie Brown', age: 28, email: 'charlie@example.com' },
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 40, email: 'bob@example.com' },
    { id: 4, name: 'Alice Williams', age: 35, email: 'alice@example.com' },
    { id: 5, name: 'Charlie Brown', age: 28, email: 'charlie@example.com' },
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 40, email: 'bob@example.com' },
    { id: 4, name: 'Alice Williams', age: 35, email: 'alice@example.com' },
    { id: 5, name: 'Charlie Brown', age: 28, email: 'charlie@example.com' },
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 40, email: 'bob@example.com' },
    { id: 4, name: 'Alice Williams', age: 35, email: 'alice@example.com' },
    { id: 5, name: 'Charlie Brown', age: 28, email: 'charlie@example.com' },
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 40, email: 'bob@example.com' },
    { id: 4, name: 'Alice Williams', age: 35, email: 'alice@example.com' },
    { id: 5, name: 'Charlie Brown', age: 28, email: 'charlie@example.com' },
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 40, email: 'bob@example.com' },
    { id: 4, name: 'Alice Williams', age: 35, email: 'alice@example.com' },
    { id: 5, name: 'Charlie Brown', age: 28, email: 'charlie@example.com' },
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 40, email: 'bob@example.com' },
    { id: 4, name: 'Alice Williams', age: 35, email: 'alice@example.com' },
    { id: 5, name: 'Charlie Brown', age: 28, email: 'charlie@example.com' },
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 40, email: 'bob@example.com' },
    { id: 4, name: 'Alice Williams', age: 35, email: 'alice@example.com' },
    { id: 5, name: 'Charlie Brown', age: 28, email: 'charlie@example.com' },
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 40, email: 'bob@example.com' },
    { id: 4, name: 'Alice Williams', age: 35, email: 'alice@example.com' },
    { id: 5, name: 'Charlie Brown', age: 28, email: 'charlie@example.com' },
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 40, email: 'bob@example.com' },
    { id: 4, name: 'Alice Williams', age: 35, email: 'alice@example.com' },
    { id: 5, name: 'Charlie Brown', age: 28, email: 'charlie@example.com' },
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 40, email: 'bob@example.com' },
    { id: 4, name: 'Alice Williams', age: 35, email: 'alice@example.com' },
    { id: 5, name: 'Charlie Brown', age: 28, email: 'charlie@example.com' },
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 40, email: 'bob@example.com' },
    { id: 4, name: 'Alice Williams', age: 35, email: 'alice@example.com' },
    { id: 5, name: 'Charlie Brown', age: 28, email: 'charlie@example.com' },
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 40, email: 'bob@example.com' },
    { id: 4, name: 'Alice Williams', age: 35, email: 'alice@example.com' },
    { id: 5, name: 'Charlie Brown', age: 28, email: 'charlie@example.com' },
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 40, email: 'bob@example.com' },
    { id: 4, name: 'Alice Williams', age: 35, email: 'alice@example.com' },
    { id: 5, name: 'Charlie Brown', age: 28, email: 'charlie@example.com' },
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 40, email: 'bob@example.com' },
    { id: 4, name: 'Alice Williams', age: 35, email: 'alice@example.com' },
    { id: 5, name: 'Charlie Brown', age: 28, email: 'charlie@example.com' },
  ];

  const columns=(Object.keys(items[0])).map((string) => {
    return (
      {
        name:(string[0].toUpperCase()+string.slice(1)),
        field:string.toLowerCase()
      }
    )
  })
  
  const layout = 'fixed';
  const hideHeader = false;
  const isStriped = true;
  const showSelectionCheckboxes = true;
  const sortDescriptor = { field: 'name', direction: 'asc' };
  const disallowEmptySelect = false;
  const selectionMode = 'multiple';
  const isLoading = false;
  const loadingContent = 'Loading...';
  const emptyContent = 'No items to display';

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Sample Table</h1>
      <Table
        columns={columns}
        items={items}
        layout={layout}
        hideHeader={hideHeader}
        isStriped={isStriped}
        showSelectionCheckboxes={showSelectionCheckboxes}
        sortDescriptor={sortDescriptor}
        disallowEmptySelect={disallowEmptySelect}
        selectionMode={selectionMode}
        isLoading={isLoading}
        loadingContent={loadingContent}
        emptyContent={emptyContent}
      />
    </div>
  );
}

export default App;

