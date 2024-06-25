import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const ListEmployeeComponent = () => {

  const [employees, setEmployees] = useState([])

  useEffect(() => {
    getAllEmployees()
  }, [])

  const getAllEmployees = () =>{
    EmployeeService.getAllEmployees().then((response) => {
      setEmployees(response.data)
      console.log(response.data)
    }).catch(error =>{
      console.log(error)
    })
  }

  const deleteEmployee = (employeeId) =>{
    EmployeeService.deleteEmployee(employeeId).then((response) =>{
      getAllEmployees()
    }).catch(error =>{
      console.log(error)
    })
  }

  return (
    <div className='container'>
      <h2 className='text-center'>직원 리스트</h2>
      <Link to = "/add-employee" className = "btn btn-primary mb-2">Add Employee</Link>
      <table className='table table-bordered table striped'>
        <thead>
          <th>직원 번호</th>
          <th>직원 이름(LastName)</th>
          <th>직원 이름(FirstName)</th>
          <th>직원 이메일</th>
          <th>동작</th>
        </thead>
        <tbody>
          {
            employees.map(
              employee =>
              <tr key ={employee.id}>
                <td> {employee.id} </td>
                <td> {employee.firstName} </td>
                <td> {employee.lastName} </td>
                <td> {employee.emailId} </td>
                <td>
                  <Link className='btn btn-info' to={`/edit-employee/${employee.id}`}>Update</Link>
                  <button className='btn btn-danger' onClick={()=>deleteEmployee(employee.id)} style={{marginLeft:"10px"}}>Delete</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponent

