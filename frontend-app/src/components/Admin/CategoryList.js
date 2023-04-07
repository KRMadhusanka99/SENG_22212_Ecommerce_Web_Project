import './css/list.css';
import {Link} from 'react-router-dom';


const CategoryList = () => {

  return (
    <div className="list-container categ">
      <h1>Category List</h1>
      <div className='add'><Link to="/admin/add-category" className='add'><button className='add-edit addbtn'>Add Category</button></Link></div>
      <table className="list-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>3</td>
              <td>headphone</td>
              <td>
              <Link to=""><button className='add-edit edit'>Edit</button></Link>
                <button onClick="">Delete</button>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;
