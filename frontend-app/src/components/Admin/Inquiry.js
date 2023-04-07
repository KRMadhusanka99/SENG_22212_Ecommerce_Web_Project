import './css/list.css';

const Inquiry = () => {
  

  return (
    <div className="list-container">
      <h1>Inquiries</h1>
      <table className='list-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>Vijitha</td>
              <td>vijitha@gmail.com</td>
              <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</td>
              <td>
              <form onSubmit="">
                <input type="text" id="emailbody" placeholder='Enter your response' required />
                <button type="submit">Reply</button>
                </form>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Inquiry;
