const Documentation = () => {
    return (
        <div className="w-[1144px] font-poppins my-10">
            <div className="flex justify-center items-center flex-col">
                <h1 className="text-3xl ">Please Login To See All Features</h1> 
                <div className="overflow-x-auto">
  <table className="table my-10">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Password</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="bg-base-200">
        <th>1</th>
        <td>romzanali@gmail.com</td>
        <td>Ryd/1234</td>
        <td>User</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>milon5@gmail.com</td>
        <td>Ryd/1234</td>
        <td>User </td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>kutubuddin@gmail.com</td>
        <td>Ryd/1234</td>
        <td>Admin</td>
      </tr>
    </tbody>
  </table>
</div>
            </div>
           
        </div>
    );
};

export default Documentation;