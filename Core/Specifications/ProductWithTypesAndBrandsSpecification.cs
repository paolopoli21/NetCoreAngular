using System;
using System.Linq.Expressions;
using Core.Entities;

namespace Core.Specifications
{
    public class ProductWithTypesAndBrandsSpecification : BaseSpecification<Product>
    {
        public ProductWithTypesAndBrandsSpecification(string sort, int? brandId, int? typeId)
        :base(x => 
            (!brandId.HasValue || x.ProductBrandId == brandId
            && (!typeId.HasValue || x.ProductBrandId == typeId)
            )
        )
        {
            AddInclude(x => x.ProductType);
            AddInclude(x => x.ProducBrand);
            AddOrderBy(x => x.Name);

            if(!string.IsNullOrEmpty(sort)){
                switch(sort){
                    case "priceAsc":
                        AddOrderBy(p => p.Price);
                        break;

                    case "priceDesc":
                        AddOrderByDescending(p => p.Price);
                        break;  

                    default:
                        AddOrderBy(p => p.Name);
                        break;
                }
            }
        }

        public ProductWithTypesAndBrandsSpecification(int id)
         : base(x => x.Id == id)
        {
            AddInclude(x => x.ProductType);
            AddInclude(x => x.ProducBrand);
        }
    }
}