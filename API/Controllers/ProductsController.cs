using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Infrastructure.Data;
//using API.Data;
//using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    // [ApiController]
    // [Route("api/[controller]")]
    public class ProductsController : BaseApiController
    {
        private readonly IGenericRepository<Product> _productRepo;
        private readonly IGenericRepository<ProductBrand> _productBrandRepo;
        private readonly IGenericRepository<ProductType> _productTypeRepo;
        private readonly IMapper _mapper;




        //private readonly IProductRepository _repo;
        public ProductsController(IGenericRepository<Product> productRepo,
                                  IGenericRepository<ProductBrand> productBrandRepo,
                                  IGenericRepository<ProductType> productTypeRepo,
                                  IMapper mapper)
        {
            this._productRepo = productRepo;
            this._productBrandRepo = productBrandRepo;
            this._productTypeRepo = productTypeRepo;
            this._mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<ProductToReturnDto>>> GetProducts()
        {
            //var products = await _productRepo.ListAllAsync();
            var spec = new ProductWithTypesAndBrandsSpecification();
            var products = await _productRepo.ListAsync(spec);
            //return Ok(products);
            // return products.Select(product => new ProductToReturnDto{
            //     Id= product.Id,
            //     Name = product.Name,
            //     Description = product.Description,
            //     PicturesUrl = product.PicturesUrl,
            //     Price = product.Price,
            //     ProducBrand = product.ProducBrand.Name,
            //     ProductType = product.ProductType.Name
            // }).ToList();
            //return _mapper.Map<Product, ProductToReturnDto>(products);
            return Ok(_mapper.Map<IReadOnlyList<Product>,IReadOnlyList<ProductToReturnDto>>(products));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ProductToReturnDto>> GetProduct(int id)
        {
            var spec = new ProductWithTypesAndBrandsSpecification(id);
            //return await _productRepo.GetByIdAsync(id);
            var product = await _productRepo.GetEntityWithSpec(spec);
            // return new ProductToReturnDto
            // {
            //     Id= product.Id,
            //     Name = product.Name,
            //     Description = product.Description,
            //     PicturesUrl = product.PicturesUrl,
            //     Price = product.Price,
            //     ProducBrand = product.ProducBrand.Name,
            //     ProductType = product.ProductType.Name
            // };
            return _mapper.Map<Product, ProductToReturnDto>(product);
        }

        [HttpGet("brands")]
        public async Task<ActionResult<IReadOnlyList<ProductBrand>>> GetProductBrands(){
            return Ok(await _productBrandRepo.ListAllAsync());
        }

        [HttpGet("types")]
        public async Task<ActionResult<IReadOnlyList<ProductType>>> GetProductType()
        {
            return Ok(await _productTypeRepo.ListAllAsync());
        }

    }
}