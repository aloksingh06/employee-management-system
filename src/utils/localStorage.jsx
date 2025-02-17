
    const employees = [
      {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Task 1",
            "description": "Complete project report",
            "date": "2025-02-10",
            "category": "Work",
            "active": true,
            "completed": false,
            "failed": false,
            "new_task": true
          },
          {
            "title": "Task 2",
            "description": "Team meeting",
            "date": "2025-02-12",
            "category": "Meeting",
            "active": true,
            "completed": false,
            "failed": false,
            "new_task": true
          }
        ]
      },
      {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Task 3",
            "description": "Update website content",
            "date": "2025-02-11",
            "category": "Development",
            "active": true,
            "completed": false,
            "failed": false,
            "new_task": true
          },
          {
            "title": "Task 4",
            "description": "Fix login bug",
            "date": "2025-02-14",
            "category": "Bug Fixing",
            "active": true,
            "completed": false,
            "failed": false,
            "new_task": true
          }
        ]
      },
      {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Task 5",
            "description": "Prepare sales report",
            "date": "2025-02-09",
            "category": "Sales",
            "active": false,
            "completed": true,
            "failed": false,
            "new_task": false
          },
          {
            "title": "Task 6",
            "description": "Client follow-up",
            "date": "2025-02-13",
            "category": "Communication",
            "active": true,
            "completed": false,
            "failed": false,
            "new_task": true
          }
        ]
      },
      {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Task 7",
            "description": "Inventory check",
            "date": "2025-02-08",
            "category": "Logistics",
            "active": false,
            "completed": false,
            "failed": true,
            "new_task": false
          },
          {
            "title": "Task 8",
            "description": "Review financial statements",
            "date": "2025-02-15",
            "category": "Finance",
            "active": true,
            "completed": false,
            "failed": false,
            "new_task": true
          }
        ]
      },
      {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Task 9",
            "description": "Marketing strategy meeting",
            "date": "2025-02-07",
            "category": "Marketing",
            "active": false,
            "completed": true,
            "failed": false,
            "new_task": false
          },
          {
            "title": "Task 10",
            "description": "Social media campaign planning",
            "date": "2025-02-16",
            "category": "Advertising",
            "active": true,
            "completed": false,
            "failed": false,
            "new_task": true
          }
        ]
      }
    ]
    const admin = [
        {
            "id": 1,
            "email": "admin@example.com",
            "password": "123"
          }
    ]
  
  export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
  }
  export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    
    return {employees,admin}
  }