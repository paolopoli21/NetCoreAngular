using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUserAsync(UserManager<AppUser> userManager){
            if(!userManager.Users.Any()){
                var user = new AppUser
                {
                    DisplayName = "Paul",
                    Email = "Paul@paul.it",
                    UserName = "paul@paul.it",
                    Address = new Address
                    {
                        FirstName = "Paul",
                        LastName = "Moscoso",
                        Street = "30 brunelleschi",
                        City = "TsN",
                        State = "IT",
                        Zipcode = "20090"
                    }
                };

                await userManager.CreateAsync(user, "Pa$$0rd");
            }
        }
    }
}