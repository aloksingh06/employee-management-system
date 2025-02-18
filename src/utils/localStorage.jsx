
const employees = [
    {
      "id": 1,
      "first_name": "Amit",
      "email": "employee1@example.com",
      "password": "123",
      "task_count": {"new": 2, "completed": 0, "failed": 0, "active": 2},
      "tasks": [
        {
          "title": "Complete Annual Project Report",
          "description": "Prepare and finalize the annual project report for submission.",
          "date": "2025-02-10",
          "category": "Work",
          "active": true,
          "completed": false,
          "failed": false,
          "new_task": true
        },
        {
          "title": "Attend Team Meeting",
          "description": "Participate in the scheduled team meeting to discuss project updates.",
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
      "first_name": "Rajesh",
      "email": "e2@e.com",
      "password": "123",
      "task_count": {"new": 2, "completed": 0, "failed": 0, "active": 2},
      "tasks": [
        {
          "title": "Update Website Content",
          "description": "Modify and update the website content for the latest product details.",
          "date": "2025-02-11",
          "category": "Development",
          "active": true,
          "completed": false,
          "failed": false,
          "new_task": true
        },
        {
          "title": "Fix User Login Issue",
          "description": "Identify and resolve the bug causing login issues for users.",
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
      "first_name": "Sunil",
      "email": "employee3@example.com",
      "password": "123",
      "task_count": {"new": 1, "completed": 1, "failed": 0, "active": 1},
      "tasks": [
        {
          "title": "Prepare Monthly Sales Report",
          "description": "Compile and analyze sales data for the monthly report.",
          "date": "2025-02-09",
          "category": "Sales",
          "active": false,
          "completed": true,
          "failed": false,
          "new_task": false
        },
        {
          "title": "Follow up with Clients",
          "description": "Call and email clients for feedback and future engagements.",
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
      "first_name": "Anil",
      "email": "employee4@example.com",
      "password": "123",
      "task_count": {"new": 1, "completed": 0, "failed": 1, "active": 1},
      "tasks": [
        {
          "title": "Conduct Inventory Check",
          "description": "Verify and update the inventory stock levels.",
          "date": "2025-02-08",
          "category": "Logistics",
          "active": false,
          "completed": false,
          "failed": true,
          "new_task": false
        },
        {
          "title": "Review Financial Statements",
          "description": "Analyze financial records for accuracy and reporting.",
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
      "first_name": "Vikram",
      "email": "employee5@example.com",
      "password": "123",
      "task_count": {"new": 1, "completed": 1, "failed": 0, "active": 1},
      "tasks": [
        {
          "title": "Marketing Strategy Meeting",
          "description": "Plan and discuss the marketing strategy for the upcoming quarter.",
          "date": "2025-02-07",
          "category": "Marketing",
          "active": false,
          "completed": true,
          "failed": false,
          "new_task": false
        },
        {
          "title": "Plan Social Media Campaign",
          "description": "Design and schedule social media campaigns for brand promotion.",
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
      "first_name": "Suresh",
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