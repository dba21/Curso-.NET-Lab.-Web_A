using Ficha_10.Controllers;
using Ficha_10.Models;
using Microsoft.AspNetCore.Mvc;
using MVC_.Models;
using System.Diagnostics;

namespace MVC_.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            CharactersController ncc = new CharactersController();
            return View(new Characters(ncc.Get().ToList()));

            EmployeesController em = new EmployeesController();
            return View(new Employees(em.Get().ToList()));
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}