using System.Collections.Generic;

namespace API.Helpers
{
    public class Pagination <T> where T : class
    {
        public Pagination(int pageIndex, int pageSize, int coutn, IReadOnlyList<T> data)
        {
            PageIndex = pageIndex;
            PageSize = pageSize;
            Coutn = coutn;
            Data = data;
        }

        public int PageIndex {get; set;}
        public int PageSize {get; set;}
        public int Coutn { get; set; }
        public IReadOnlyList<T> Data { get; set; }
    }
}