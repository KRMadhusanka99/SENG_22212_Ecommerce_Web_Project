import {Link} from 'react-router-dom';
import './css/list.css';

const ProductList = () => {

  return (
    <div className="list-container aproduct">
      <h1>Product List</h1>
      <div className='add'><Link to="/admin/add-product" className='add'><button className='add-edit addbtn'>Add Product</button></Link></div>
      <table className="list-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
              <td>1</td>
              <td>Sony headphone</td>
              <td>sony</td>
              <td>headphone</td>
              <td>Rs 7000</td>
              <td>4</td>
              <td>
              <Link to=""><button className='add-edit edit'>Edit</button></Link>
                <button onClick="">
                  Delete
                </button>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
