namespace Ficha_10.Models
{
    public class Characters
    {
        public List<Character> CharactersL { get; set;}
        public Characters()
        {
            CharactersL = new List<Character>();
        }
        public Characters(List<Character> achar)
        {
            CharactersL = achar;
        }
    }
}
