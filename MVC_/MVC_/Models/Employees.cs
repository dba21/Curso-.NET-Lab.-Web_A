namespace Ficha_10.Models
{
    public class Employees
    {
        public List<Employee> EmployeesL { get; set; }

        public Employees()
        {
            EmployeesL = new List<Employee>();
        }

        public Employees(List<Employee> achar)
        {
            EmployeesL = achar;
        }
    }
}
