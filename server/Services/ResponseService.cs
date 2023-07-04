using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Web.Models;

namespace Web.Services
{
    public class ResponseService
    {
        static List<Response> Responses { get; set; }

        static ResponseService()
        {
            Responses = new List<Response>();
            Responses.Add(new Response("נהנו מאוד מהשירות ועוד", "הדסה מנוחה ופנינה ", "987654321@gmail.com", "052-123456"));
        }
        public static List<Response> getAll()
        {
            return Responses;
        }

        public static List<Response> addResponse(Response r)
        {
            Responses.Add(r);
            return Responses;
        }

        public static int addLike(int id)
        {
            Response response = Responses.First(r => r.Id == id);
            response.Like++;
            return response.Like;
        }
    }
}