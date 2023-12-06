import React from "react";
import '../todoapp.scss'
import Item from "./todoitem";

export default function List(){
    const handleEdit = () => {
        // Xử lý sự kiện khi người dùng click vào nút sửa
        console.log('Edit clicked');
      };
    
      const handleDelete = () => {
        // Xử lý sự kiện khi người dùng click vào nút xóa
        console.log('Delete clicked');
      };
   
    return(
        <div class="todo-list-container">
        <Item
        content="Ăn bánh mì"
        isCompleted={true} // hoặc false tùy thuộc vào trạng thái hoàn thành
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
        <Item
        content="Uống một tách trà nóng"
        isCompleted={false} // hoặc false tùy thuộc vào trạng thái hoàn thành
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
        <Item
        content="Đến Academy học lập trình"
        isCompleted={false} // hoặc false tùy thuộc vào trạng thái hoàn thành
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <Item
        content="Ăn trưa cùng crush"
        isCompleted={false} // hoặc false tùy thuộc vào trạng thái hoàn thành
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <Item
        content="Thực hành lập trình"
        isCompleted={false} // hoặc false tùy thuộc vào trạng thái hoàn thành
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      </div>
    )
}