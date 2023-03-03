using ASPAngularLecture.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ASPAngularLecture.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {

        ResturantDbContext dbContext = new ResturantDbContext();

        [HttpGet()]//default end point
        public List<Order> GetAll()
        {
            return dbContext.Orders.ToList();
        }

        [HttpPost()] //adding in new orders
        public Order CreateOrder(string _description, decimal _cost, int _rating)
        {
            //construcor
            Order newOrder = new Order()
            {
                Description= _description,
                Cost= _cost,
                Rating= _rating
            };
            dbContext.Orders.Add(newOrder);//add new order to orders
            dbContext.SaveChanges();//save to database

            return newOrder;
        }
    }
}
