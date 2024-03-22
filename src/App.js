import React from 'react';
import Table from './components copy/Table';


const App = () => {
  // Sample data for the table
  const columns = [
    { name: 'ID', field: 'id' },
    { name: 'Name', field: 'name' },
    { name: 'Age', field: 'age' },
    { name: 'Email', field: 'email' }
  ];

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
      <h1>Sample Table</h1>
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

