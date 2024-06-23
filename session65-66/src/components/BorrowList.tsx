import React from 'react'
import './borrowList.scss'
export default function BorrowList() {
  return (
    <>
        <div>
            <div>
                <div>Quản lý mượn trả sách</div>
                <button>Thêm thông tin</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên sách</th>
                        <th></th>
                    </tr>
                </thead>
            </table>
        </div>
    </>
  )
}
