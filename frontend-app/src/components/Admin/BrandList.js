import './css/list.css';
import {Link} from 'react-router-dom';

const BrandList = () => {

  return (
    <div className="list-container brand">
      <h1>Brand List</h1>
      <div className='add'><Link to="/admin/add-brand" className='add'><button className='add-edit addbtn'>Add Brand</button></Link></div>
      <table className="list-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Logo</th>
            <th>Details</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>1</td>
              <td>Sony</td>
              <td>
                <img
                  src="https://logowik.com/content/uploads/images/305_sony.jpg"
                  alt="sony"
                  style={{ maxWidth: "100px" }}
                />
              </td>
              <td>SONY SONY</td>
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

export default BrandList;
