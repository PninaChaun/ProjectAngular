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
    public class ServicesController : ApiController
    {
        [HttpGet]
        public IHttpActionResult Get()
        {
            List<string> list= new List<string>()
            {
                "עיצוב שיער","איפור ערב", "סירוק פאות"
            };
            return Ok(list);
        }
    }
}
