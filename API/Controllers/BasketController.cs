using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
//using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace API.Controllers
{
    public class BasketController: BaseApiController
    {
        public IBasketRepository _basketRepositoy { get; }
        public BasketController(IBasketRepository basketRepositoy)
        {
            _basketRepositoy = basketRepositoy;
        }

        [HttpGet]
        public async Task<ActionResult<CustomerBasket>> GetBasketById(string id){
            var basket = await _basketRepositoy.GetBasketAsync(id);
            return Ok(basket ?? new CustomerBasket(id));
        }

        [HttpPost]
        public async Task<ActionResult<CustomerBasket>> UpdateBasket(CustomerBasket basket){
            var updateBasket = await _basketRepositoy.UpdateBasketAsync(basket);
            return Ok(updateBasket);
        }

        [HttpDelete]
        public async Task DeleteBasketAsync(string id){
            await _basketRepositoy.DeleteBasketAsync(id);
        }
    }
}