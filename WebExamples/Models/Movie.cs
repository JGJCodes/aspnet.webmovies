using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebMovies.Models
{
    public class Movie
    {
        public string image { get; set; }

        public string title { get; set; }

    }

    public class ApiMovie 
    {
        public static string apiUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
        public static string IMGPATH = "https://image.tmdb.org/t/p/w1280";
        public static string SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

    }
}
