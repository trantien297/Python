// staffList.tsx
import React, { useState, useEffect } from 'react'
import { List, ListItem, ListItemText, Paper, CircularProgress } from '@mui/material'

const StaffList: React.FC = () => {
  const [staffs, setStaffs] = useState<any[]>([]) // State để lưu dữ liệu nhân viên
  const [loading, setLoading] = useState<boolean>(true) // Trạng thái tải dữ liệu
  const [error, setError] = useState<string | null>(null) // Trạng thái lỗi

  // Fetch data từ API khi component được render
  useEffect(() => {
    // Gọi API để lấy danh sách nhân viên
    fetch('http://localhost:8000/api/staff/')
      .then((response) => response.json()) // Chuyển phản hồi từ API sang định dạng JSON
      .then((data) => {
        setStaffs(data) // Lưu dữ liệu vào state
        setLoading(false) // Đổi trạng thái tải dữ liệu
      })
      .catch((error) => {
        setError('Failed to fetch staff data') // Xử lý lỗi nếu có
        setLoading(false) // Đổi trạng thái tải dữ liệu
      })
  }, []) // Mảng rỗng để chỉ gọi API một lần khi component được mount

  // Nếu đang tải dữ liệu, hiển thị loading
  if (loading) return <div>Loading...</div>

  // Nếu có lỗi, hiển thị thông báo lỗi
  if (error) return <div>{error}</div>

  // Hiển thị danh sách nhân viên
  return (
    <Paper sx={{ marginTop: 8, padding: 2 }}>
      <List>
        {staffs.map((staff) => (
          <ListItem key={staff.id}>
            <ListItemText primary={staff.first_name} secondary={staff.email} />
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default StaffList
