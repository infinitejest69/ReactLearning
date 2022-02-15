function ItemDisplay({ items, deleteItems }) {
  const showItem = (item) => {
    return (
      <tr>
        <th scope="row">{item.id}</th>
        <th>{item.name}</th>
        <th>{item.price}</th>
        <th>{item.brand}</th>
        <th>{item.type}</th>
        <th>
          <button className="btn btn-danger" onClick={() => deleteItems(item)}>
            Delete
          </button>
        </th>
      </tr>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <h2>Items</h2>
      </div>
      <div className="row">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Type</th>
              <th scope="col">Brand</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{items.map(showItem)}</tbody>
        </table>
      </div>
    </div>
  );
}

export default ItemDisplay;
