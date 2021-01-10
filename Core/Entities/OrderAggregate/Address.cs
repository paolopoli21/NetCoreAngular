namespace Core.Entities.OrderAggregate
{
    public class Address
    {
        public Address(){
            
        }

        public Address(string firtName,string lastName, string street, string city, string state, string zipcode) 
        {
            this.FirstName = firtName;
            this.LastName = lastName;
            this.Street = street;
            this.City = city;
            this.State = state;
            this.Zipcode = zipcode;
        }
        public string  FirstName { get; set; }
        public string  LastName { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zipcode { get; set; }
    }
}