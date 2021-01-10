namespace Core.Entities.OrderAggregate
{
    public class OrderItem: BaseEntity
    {
        public OrderItem(){

        }
        
        public OrderItem(ProductItemOrderId itemOrdered, decimal price, int quantity) 
        {
            this.ItemOrdered = itemOrdered;
            this.Price = price;
            this.Quantity = quantity;
   
        }
                public ProductItemOrderId ItemOrdered { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        
    }
}