using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using Web.Models;
using Web.Services;

namespace Web.Controllers
{
    [System.Web.Http.Cors.EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ResponseController : ApiController
    {
        //ResponseService rs=new ResponseService();

        //public ResponseController(ResponseService rs)
        //{
        //    this.rs = rs;
        //}


        [HttpGet]
        // GET: api/feedBack
        public IHttpActionResult Get()
        {
            return Ok(ResponseService.getAll());
        }

        // GET: api/feedBack/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        [HttpPost]
        // POST: api/feedBack
        public IHttpActionResult Post([FromBody] Response r)
        {
            ResponseService.addResponse(r);
            return Ok(ResponseService.getAll());
        }

        [HttpPut]
        public IHttpActionResult PutLike([FromBody]int id)
        {
            return Ok(ResponseService.addLike(id));
            
        }

        //// DELETE: api/feedBack/5
        //public void Delete(int id)
        //{
        //}
    }

}
