import React from 'react';

const DropDown = ({List,handler}) => {
    return (
      <div>
        <select
          className="border rounded-sm border-gray-600 ps-4 mt-3 h-10 w-48 bg-white"
          onChange={handler}
        >
          <option >
            Select
            </option>
          {List.map((item) => (
            <option key={item._id} value={item.field}>
              {item.field}
            </option>
          ))}
        </select>
      </div>
    );
};

export default DropDown;