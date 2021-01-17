using System;
using System.Collections.Generic;
using Core.Entities.OrderAggregate;

namespace API.Dtos
{
    public class OrderToReturnDto
    {
        public OrderToReturnDto(int id, string bayerEmail, DateTimeOffset orderDate, Address shipToAddress, decimal shippingPrice, string deliveryMethod, decimal subtotal, string status)
        {
            this.Id = id;
            this.BayerEmail = bayerEmail;
            this.OrderDate = orderDate;
            this.ShipToAddress = shipToAddress;
            this.ShippingPrice = shippingPrice;
            this.DeliveryMethod = deliveryMethod;
            this.Subtotal = subtotal;
            this.Status = status;

        }
        public int Id { get; set; }
        public string BayerEmail { get; set; }
        public DateTimeOffset OrderDate { get; set; }
        public Address ShipToAddress { get; set; }
        public decimal ShippingPrice { get; set; }
        public string DeliveryMethod { get; set; }
        public IReadOnlyList<OrderItemDto> OrderItems { get; set; }
        public decimal Subtotal { get; set; }
        public string Status { get; set; }
    }
}