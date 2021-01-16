using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Entities.OrderAggregate;
using Core.Interfaces;

namespace Infrastructure.Services
{
    public class OrderService : IOrderService
    {
        private readonly IBasketRepository _basketRepo;
        private readonly IUnitOfWork _unitOfWor;
        public OrderService(IBasketRepository basketRepo, IUnitOfWork unitOfWor)
        {
            _unitOfWor = unitOfWor;
            _basketRepo = basketRepo;
        }

        public async Task<Order> CreateOrderAsync(string buyerEmail, int deliveryMethodId, string basketId, Address shippingAddress)
        {
            //get basket from the repo
            var basket = await _basketRepo.GetBasketAsync(basketId);
            //get Items from the product repo
            var items = new List<OrderItem>();

            foreach (var item in basket.Items)
            {
                //var productItem = await _productRepo.GetByIdAsync(item.Id);
                var productItem = await _unitOfWor.Repository<Product>().GetByIdAsync(item.Id);
                var itemOrdered = new ProductItemOrdered(productItem.Id, productItem.Name, productItem.PicturesUrl);
                var orderItem = new OrderItem(itemOrdered, productItem.Price, item.Quantity);
                items.Add(orderItem);
            }
            //get delivery method form repo
            //var deliveryMethod = await _dmRepo.GetByIdAsync(deliveryMethodId);
            var deliveryMethod = await _unitOfWor.Repository<DeliveryMethod>().GetByIdAsync(deliveryMethodId);
            // calc subtotal
            var subtotal = items.Sum(item => item.Price * item.Quantity);
            //create order
            var order = new Order(items, buyerEmail, shippingAddress, deliveryMethod, subtotal);
            _unitOfWor.Repository<Order>().Add(order);
            // todo: save to db
            var result = await _unitOfWor.Complete();
            if(result <= 0) return null;

            //delete
            await _basketRepo.DeleteBasketAsync(basketId);
            //return order
            return order;
        }

        public Task<IReadOnlyList<DeliveryMethod>> GetDeliveryMethodsAsync()
        {
            throw new System.NotImplementedException();
        }

        public Task<Order> GetOrderByIdAsync(int id, string buyerEmail)
        {
            throw new System.NotImplementedException();
        }

        public Task<IReadOnlyList<Order>> GetOrdersForUserAsync(string buyerEmail)
        {
            throw new System.NotImplementedException();
        }
    }
}