using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Web.Models
{
    public class Response
    {
        private static int ids = 0;
        public int Id { get; set; }
        public string Content { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public int Like { get; set; }
        public Response(string content, string name, string email, string phone)
        {
            this.Id = ids++;
            this.Content = content;
            this.Name = name;
            this.Email = email;
            this.Phone = phone;
            this.Like = 0;
        }
    }
}